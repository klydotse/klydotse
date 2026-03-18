// Optional MET UV proxy for environments where browser-direct calls to api.met.no are blocked.
// Example: node met-uv-proxy.mjs
// Then call /met-uv?lat=59.3293&lon=18.0686

import http from 'node:http';

const PORT = process.env.PORT || 8787;
const USER_AGENT = process.env.MET_USER_AGENT || 'kly.se weather app (contact: you@example.com)';

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname !== '/met-uv') {
    res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  const lat = Number(url.searchParams.get('lat'));
  const lon = Number(url.searchParams.get('lon'));
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    res.writeHead(400, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Missing lat/lon' }));
    return;
  }

  const upstream = new URL('https://api.met.no/weatherapi/locationforecast/2.0/complete');
  upstream.searchParams.set('lat', lat.toFixed(4));
  upstream.searchParams.set('lon', lon.toFixed(4));

  try {
    const response = await fetch(upstream, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': USER_AGENT
      }
    });
    const body = await response.text();
    res.writeHead(response.status, {
      'content-type': response.headers.get('content-type') || 'application/json; charset=utf-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=900'
    });
    res.end(body);
  } catch (error) {
    res.writeHead(502, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' });
    res.end(JSON.stringify({ error: 'Upstream fetch failed', detail: String(error?.message || error) }));
  }
});

server.listen(PORT, () => {
  console.log(`MET UV proxy listening on http://localhost:${PORT}`);
});
