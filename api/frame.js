export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placekitten.com/800/400" />
        <meta property="fc:frame:button:1" content="Start" />
        <meta property="fc:frame:post_url" content="/api/handle" />
      </head>
      <body></body>
    </html>`);
}
