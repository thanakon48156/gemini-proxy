export const config = { runtime: 'edge', regions: ['iad1'] };

export default async function handler(req) {
  const url = new URL(req.url);
  url.host = 'generativelanguage.googleapis.com';
  
  const newReq = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.body,
    duplex: 'half'
  });
  
  newReq.headers.delete('x-forwarded-for');
  newReq.headers.delete('x-real-ip');
  
  return fetch(newReq);
}
