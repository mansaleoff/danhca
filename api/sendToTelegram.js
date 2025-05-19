export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text } = req.body;

  const TELEGRAM_TOKEN = "6842756326:AAFDAatuHcgfNYU5nu3chRErxKw6o3vWf74";
  const CHAT_ID = "-1002558191024";

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error('❌ Telegram request failed:', error);
    return res.status(500).json({ error: 'Telegram request failed' });
  }
}
