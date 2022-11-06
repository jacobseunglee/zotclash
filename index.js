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
  try{  
    await client.connect();
    await listDatabases(client);
  }
  catch (e)
  {
    console.error(e);
    await client.close();
  }


app.use(cors())
app.get('/prompt', prompt.handlePrompt)
app.get('/session', session.handleSession)
app.get('/', (req, res) => {
  randInt = randomIntFromInterval(0, pairs.length-1);
  res.send(pairs[randInt])
  pairs.splice(randInt, 1); // Remove that element from the list so it's not repeated
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);
client.close();

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
