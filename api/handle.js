export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <meta property="fc:frame:image" content="https://i.imgur.com/r4ZqH4B.png" />
      </head>
      <body></body>
    </html>
  `);
}
