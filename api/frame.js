export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Monadle Word Game" />
        <meta property="og:image" content="https://i.imgur.com/Ln5cA5J.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/Ln5cA5J.png" />
        <meta property="fc:frame:button:1" content="Start" />
        <meta property="fc:frame:post_url" content="https://monadle-frame-b75l.vercel.app/api/handle" />
      </head>
      <body></body>
    </html>
  `);
}

