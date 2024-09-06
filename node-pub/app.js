const express = require('express');
const bodyParser = require('body-parser');
const { DaprClient } = require('@dapr/dapr');

const app = express();
app.use(bodyParser.json());

const daprPort = process.env.DAPR_HTTP_PORT || 3500;
const daprHost = `http://127.0.0.1`;

const pubSubName = 'message-pub-sub';
const pubSubTopic = 'message';

const port = 3001;

const client = new DaprClient({
    daprHost,
    daprPort
});

app.post('/messages', async (req, res) => {
    try {
        await client.pubsub.publish(pubSubName, pubSubTopic, req.body);
        res.send({ message: 'Message sent!' });
    } catch (error) {
        console.error('Error publishing message:', error);
        res.status(500).send({ message: 'Failed to send message' });
    }
});

app.listen(port, () => console.log(`Publisher app listening on port ${port}!`));
