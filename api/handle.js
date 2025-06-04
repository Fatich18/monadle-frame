export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <meta property="fc:frame:image" content="https://framerusercontent.com/images/vyo6AWhVlK0C2Hv88Wpxb70mS4.png" />
      </head>
      <body></body>
    </html>
  `);
}
