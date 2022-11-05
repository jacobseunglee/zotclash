const express = require('express')
const { MongoClient } = require("mongodb");
const app = express()
const port = 3000
const cors = require('cors')

async function main() {
  const uri = "mongodb+srv://ZotClash:Zothacks2022@zotclash.jegpvvx.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(uri);
  try{  
    await client.connect();
    await listDatabases(client);
  }
  catch (e)
  {
    console.error(e);
  }
  finally
  {
    await client.close();
  }

}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);

const dining_halls = {
    "choices":[
        {"name": "Brandywine", "image": "https://www.ocregister.com/wp-content/uploads/2019/09/OCR-L-UCIDORMS-0921-12-JAG.jpg?w=620"},
        {"name": "Anteatery", "image": "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f20833538e3463a336d44ff_b02_RSM-Design_Anteatery-Food-Hall_College-Food-Hall-Design.jpg"}
    ]
}

const housing = {
  "choices":[
      {"name": "Middle Earth", "image": ""},
      {"name": "Mesa Court", "image": ""}
  ]
}

const libraries = {
  "choices":[
      {"name": "Langson Library", "image": ""},
      {"name": "Science Library", "image": ""}
  ]
}

const recreation = {
"choices":[
      {"name": "eSports Arena", "image": ""},
      {"name": "Anteater Recreation Center", "image": ""}
  ]
}

const convenience = {
  "choices":[
      {"name": "Zot N Go", "image": ""},
      {"name": "Sidedoor", "image": ""}
  ]
}

const OS = {
  "choices":[
      {"name": "Mac", "image": ""},
      {"name": "Windows", "image": ""}
  ]
}

const boba = {
  "choices":[
      {"name": "Cha", "image": ""},
      {"name": "Sharetea", "image": ""}
  ]
}

const sports = {
  "choices":[
      {"name": "Basketball", "image": ""},
      {"name": "Volleyball", "image": ""}
  ]
}

const flasks = {
  "choices":[
      {"name": "Hydro Flask", "image": ""},
      {"name": "Thermoflask", "image": ""}
  ]
}

const studyspots = {
  "choices":[
      {"name": "Study in Aldrich Park", "image": ""},
      {"name": "Study in a library", "image": ""}
  ]
}

pairs = [dining_halls, housing, libraries, recreation, convenience, OS, boba, sports, flasks, studyspots]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

app.use(cors())

app.get('/', (req, res) => {
  randInt = randomIntFromInterval(0, pairs.length-1);
  res.send(pairs[randInt])
  pairs.splice(randInt, 1); // Remove that element from the list so it's not repeated
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

