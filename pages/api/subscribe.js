// pages/api/subscribe.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
  
    // Add subscriber to Mailchimp
    try {
      const LIST_ID = 'ab909d29c8';
      const API_KEY = '2279e48c08f6175027cdbffd9e599442-us11';
      const DATACENTER = API_KEY.split('-')[1];
  
      const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
  
      if (response.status >= 400) {
        const text = await response.text();
        throw new Error(text);
      }
  
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }
  