export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="fc:frame:image" content="https://placekitten.com/800/401" />
      </head>
      <body></body>
    </html>`);
}