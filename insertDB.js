const { MongoClient } = require("mongodb");
var dotenv = require('dotenv');
dotenv.config();

var url = process.env.MONGOLAB_URI;

async function main() {
  const uri = url;
  const client = new MongoClient(uri);
  const database = client.db("ClashData");
  const prompts = database.collection("Prompts");
  try{
    prompts.deleteMany({});
    await client.connect();
    await listDatabases(client);
    typelist = [{
        "dining_halls":[
            {"name": "Brandywine", "image": "https://www.ocregister.com/wp-content/uploads/2019/09/OCR-L-UCIDORMS-0921-12-JAG.jpg?w=620"},
            {"name": "Anteatery", "image": "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f20833538e3463a336d44ff_b02_RSM-Design_Anteatery-Food-Hall_College-Food-Hall-Design.jpg"}
        ]
    },
    {
        "housing":[
            {"name": "Middle Earth", "image": ""},
            {"name": "Mesa Court", "image": ""}
        ]
    },
    {
        "libraries":[
            {"name": "Langson Library", "image": ""},
            {"name": "Science Library", "image": ""}
        ]
    },
    {
        "recreation":[
              {"name": "eSports Arena", "image": ""},
              {"name": "Anteater Recreation Center", "image": ""}
          ]
    },
    {
        "convenience":[
            {"name": "Zot N Go", "image": ""},
            {"name": "Sidedoor", "image": ""}
        ]
    },
    {
        "OS":[
            {"name": "Mac", "image": ""},
            {"name": "Windows", "image": ""}
        ]
    },
    {
        "boba":[
            {"name": "Cha", "image": ""},
            {"name": "Sharetea", "image": ""}
        ]
    },
    {
        "sports":[
            {"name": "Basketball", "image": ""},
            {"name": "Volleyball", "image": ""}
        ]
    },
    {
        "flasks":[
            {"name": "Hydro Flask", "image": ""},
            {"name": "Thermoflask", "image": ""}
        ]
    },
    {
        "studyspots":[
            {"name": "Study in Aldrich Park", "image": ""},
            {"name": "Study in a library", "image": ""}
        ]
    }
]
    for (let i = 0; i < typelist.length; i++)
    {
        typelist[i]._id = i
        docID = await prompts.insertOne(typelist[i]);
    }
    
      console.log(docID)
    
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
