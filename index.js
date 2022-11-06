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
  const client = new MongoClient(uri);
  const database = client.db("ClashData");
  const prompt = require("./prompt");
  const session = require("./session")(database);
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

  app.use(cors())

app.get('/', (req, res) => {
  randInt = randomIntFromInterval(0, pairs.length-1);
  res.send(pairs[randInt])
  pairs.splice(randInt, 1); // Remove that element from the list so it's not repeated
})

app.get('/prompt', prompt.handlePrompt)

app.get('/session', session.handleSession)

app.use('/public', express.static('public'))

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

const dining_halls = {
    "choices":[
        {"name": "Brandywine", "image": "https://www.ocregister.com/wp-content/uploads/2019/09/OCR-L-UCIDORMS-0921-12-JAG.jpg?w=620"},
        {"name": "Anteatery", "image": "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f20833538e3463a336d44ff_b02_RSM-Design_Anteatery-Food-Hall_College-Food-Hall-Design.jpg"}
    ]
}

const housing = {
  "choices":[
      {"name": "Middle Earth", "image": "https://newuniversity.org/wp-content/uploads/2019/10/DSC_0004.jpg"},
      {"name": "Mesa Court", "image": "https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1541525539929-5SEX9R8F856SGNI6TE6W/Housing1.jpg?format=1000w"}
  ]
}

const libraries = {
  "choices":[
      {"name": "Langson Library", "image": "https://i0.wp.com/interns.society19.com/wp-content/uploads/2018/07/LLIB-2.jpg?ssl=1"},
      {"name": "Science Library", "image": "https://classrooms.uci.edu/files/2022/02/Science-Library-1-1024x768.png"}
  ]
}

const recreation = {
"choices":[
      {"name": "eSports Arena", "image": "https://esports.uci.edu/wp-content/uploads/sites/3/2020/10/Arena-1500x500.jpg"},
      {"name": "Anteater Recreation Center", "image": "https://www.campusrec.uci.edu/arc/images/arc-insideP.jpg"}
  ]
}

const convenience = {
  "choices":[
      {"name": "Zot N Go", "image": "https://pr0.nicelocal.com/arcQQS2UvbOCnlgRrpFSlQ/1500x1125,q75/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2TEuHbn5_ylLLHUZzR_RLtfU_zmfS8V2y_kV6z5MajtJgQbnGDQHCmw5fFEg85UQKw"},
      {"name": "Sidedoor", "image": "https://www.food-management.com/sites/food-management.com/files/uploads/2014/09/unnamed_14.jpg"}
  ]
}

const OS = {
  "choices":[
      {"name": "Mac", "image": "https://149367133.v2.pressablecdn.com/wp-content/uploads/2021/05/gadgetmatch-apple-2021-mac-red-pink-05.jpg"},
      {"name": "Windows", "image": "https://cdn.mos.cms.futurecdn.net/o8g2bEtp4dfmDPTdjavRGf-1920-80.jpg.webp"}
  ]
}

const boba = {
  "choices":[
      {"name": "Cha", "image": "https://www.ucieas.com/uploads/3/0/0/9/30093831/cha-for-tea_1_orig.jpg"},
      {"name": "Sharetea", "image": "https://s3-media0.fl.yelpcdn.com/bphoto/duGbTGRunN4gNhoMlzwxWw/o.jpg"}
  ]
}

const sports = {
  "choices":[
      {"name": "Basketball", "image": "https://upload.wikimedia.org/wikipedia/commons/d/db/UCI_Bren_Events_Center_Basketball_Court_2008.jpg"},
      {"name": "Volleyball", "image": "https://gomatadors.com/images/2022/9/23/Orshoff_4168_SLg6J.jpg?width=1920&quality=80&format=jpg"}
  ]
}

const flasks = {
  "choices":[
      {"name": "Hydro Flask", "image": "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2018-12-21-at-4-12-41-pm-1545427220.png?crop=1.00xw:0.898xh;0,0.0679xh&resize=1200:*"},
      {"name": "Thermoflask", "image": "https://prod-cdn-thekrazycouponlady.imgix.net/wp-content/uploads/2019/10/thermoflask-2-10-8-costco-1570538447.jpg"}
  ]
}

const studyspots = {
  "choices":[
      {"name": "Study in Aldrich Park", "image": "https://miro.medium.com/max/1400/0*2-oC29n_3m84Pkub"},
      {"name": "Study in a library", "image": "https://www.lib.uci.edu/sites/default/files/img/library-floor/asl45-study-v3.jpg"}
  ]
}

pairs = [dining_halls, housing, libraries, recreation, convenience, OS, boba, sports, flasks, studyspots]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

