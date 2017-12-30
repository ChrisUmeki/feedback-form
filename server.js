const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(express.static('./client/build'));

app.get('*', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.post('*', jsonParser, (req,res) => {
  fs.readFile('response.json', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    let responses = JSON.parse(data);
    responses.push(req.body);

    fs.writeFile('response.json', JSON.stringify(responses, null, 2), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(responses);
    })
  })
}
);

app.listen(5000, () => console.log('Listening on port 5000'));