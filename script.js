const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const dining_halls = {
    "dining_halls":[
        {"name": "Brandywine", "image": "https://www.ocregister.com/wp-content/uploads/2019/09/OCR-L-UCIDORMS-0921-12-JAG.jpg?w=620"},
        {"name": "Anteatery", "image": "https://global-uploads.webflow.com/5eec789d24d891b6d1d15438/5f20833538e3463a336d44ff_b02_RSM-Design_Anteatery-Food-Hall_College-Food-Hall-Design.jpg"}
    ]
}

const housing = {
  "housing":[
      {"name": "Middle Earth", "image": ""},
      {"name": "Mesa Court", "image": ""}
  ]
}

const libraries = {
  "libraries":[
      {"name": "Langson Library", "image": ""},
      {"name": "Science Library", "image": ""}
  ]
}

const recreation = {
"recreation":[
      {"name": "eSports Arena", "image": ""},
      {"name": "Anteater Recreation Center", "image": ""}
  ]
}

const convenience = {
  "convenience":[
      {"name": "Zot N Go", "image": ""},
      {"name": "Sidedoor", "image": ""}
  ]
}

const OS = {
  "OS":[
      {"name": "Mac", "image": ""},
      {"name": "Windows", "image": ""}
  ]
}

const boba = {
  "boba":[
      {"name": "Cha", "image": ""},
      {"name": "Sharetea", "image": ""}
  ]
}

const sports = {
  "sports":[
      {"name": "Basketball", "image": ""},
      {"name": "Volleyball", "image": ""}
  ]
}

const flasks = {
  "flasks":[
      {"name": "Hydro Flask", "image": ""},
      {"name": "Thermoflask", "image": ""}
  ]
}

const studyspots = {
  "studyspots":[
      {"name": "Study in Aldrich Park", "image": ""},
      {"name": "Study in a library", "image": ""}
  ]
}

app.use(cors())

app.get('/', (req, res) => {
  res.send(dining_halls)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

