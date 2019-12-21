const WebSocket = require('ws')
const readline = require('readline')
const port = 8080

const wss = new WebSocket.Server({ port })

console.log(`listening on localhost port ${port}`)

wss.on('connection', ws => {
  ws.on('message', message => console.log('received: %s', message))

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    //terminal: false
  })

  // read input from the terminal and send it back as the response
  rl.on('line', line => ws.send(line))
})
