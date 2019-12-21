# servers

A collection of simiple servers for testing.

### Setup

You'll need to install node.js if you don't have it already

#### OSX
```bash
brew install node
```

#### Windows
https://nodejs.org/en/#home-downloadhead

### Running the servers

The first step is to install depencencies:

```bash
npm install
```

Then you can run the regular HTTP server (CORS enabled):

```bash
npm run http
```

Or the websocket server:

```bash
npm run ws
```

_____________________________

### HTTPS/WSS/External access

You can use ngrok to connect via HTTPS, WSS or externally without changing any configuration.
https://dashboard.ngrok.com/get-started

Once it's installed, you can then expose the HTTP server:

```bash
ngrok http 8000
```

Or the Websocket server:

```bash
ngrok http 8080
```

_Just use wss://NGROK_URL  instead of https://NGROK_URL for wss connections_
