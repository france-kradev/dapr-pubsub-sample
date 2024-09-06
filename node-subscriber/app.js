const express = require('express');
const bodyParser = require('body-parser');
const { DaprServer } = require('@dapr/dapr');

const app = express();
app.use(bodyParser.json());

const daprPort = process.env.DAPR_HTTP_PORT || 3500;
const daprHost = `http://127.0.0.1`;

const pubSubName = 'message-pub-sub';
const pubSubTopic = 'message';

const serverPort = 3002;

const client = new DaprServer({
    serverHost: '127.0.0.1',
    serverPort: '3001',
    serverHttp: app,
    clientOptions: {
        daprHost,
        daprPort
    },
});

async function main() {
    await client.pubsub.subscribe(pubSubName, pubSubTopic, (data) => {
        console.log('Received message:', data);
    });
    await client.start();
}

main().catch(console.error);

app.listen(serverPort, () => console.log(`Subscriber app listening on port ${serverPort}!`));
