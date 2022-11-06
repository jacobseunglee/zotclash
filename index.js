const express = require('express');
const { MongoClient } = require("mongodb");
const app = express();
const port = 3000;
const cors = require('cors');

var dotenv = require('dotenv');
dotenv.config();
var url = process.env.MONGOLAB_URI;

async function main() {
  const uri = url;
  client = new MongoClient(uri);
  const database = client.db("ClashData");
  const prompt = require("./prompt")(database);
  const session = require("./session")(database);
  const increment = require("./increment")(database);
  const stats = require("./stats")(database);
  try{  
    await client.connect();
  }
  catch (e)
  {
    console.error(e);
    await client.close();
  }


app.use(cors())
app.get('/prompt', prompt.handlePrompt)
app.get('/session', session.handleSession)
app.get('/inc', increment.handleIncrement)
app.use('/public', express.static('public'))
app.get('/stats', stats.handleStats)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

main().catch(console.error);
client.close();

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
