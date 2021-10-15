const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/sms', (req, res) => {
    console.log(req.body);
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

http.createServer(app).listen(port, () => {
    console.log('Express server listening on port', port);
});
