// pages/api/404.js
export default function handler(req, res) {
    res.status(404).json({ error: 'Not Found' });
  }