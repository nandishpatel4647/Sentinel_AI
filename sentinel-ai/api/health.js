export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ 
    status: 'SENTINEL AI Online', 
    timestamp: new Date().toISOString(),
    environment: 'vercel-serverless'
  });
}
