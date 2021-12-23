const http = require('http')
const port = 8000

http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers)
    res.end()
    return
  }

  if (['GET', 'POST'].indexOf(req.method) > -1) {
    console.log(decodeURIComponent(req.url))
    let body = ''
    req.on('data', data => body += data)
      .on('end', () => console.log(body))
    res.writeHead(200, headers)
    res.end('Hello World')
    return
  }

  res.writeHead(405, headers)
  res.end(`${req.method} is not allowed for the request.`)
}).listen(port)

console.log(`listening on localhost port ${port}`)
