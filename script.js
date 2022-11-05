const express = require('express')
// const { MongoClient } = require("mongodb");
const app = express()
const port = 3000
const cors = require('cors')

// const uri = "mongodb+srv://zotclash:<zothacks2022>@zotclash.jsufize.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri);
// async function run() {
//     try {
//       // Connect the client to the server (optional starting in v4.7)
//       await client.connect();
//       // Establish and verify connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Connected successfully to server");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   run().catch(console.dir);
const dining_halls = {
    "dining_halls":[
        {"name": "Brandywine", "image": "https://www.ocregister.com/wp-content/uploads/2019/09/OCR-L-UCIDORMS-0921-12-JAG.jpg?w=620"},
        {"name": "Anteatery", "image": "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f20833538e3463a336d44ff_b02_RSM-Design_Anteatery-Food-Hall_College-Food-Hall-Design.jpg"}
    ]
}

app.use(cors())

app.get('/', (req, res) => {
  res.send(dining_halls)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

