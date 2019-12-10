// //////////////////////
// const mongoose = require('mongoose')

// const uri = process.env.URI

// const resolveDeprecated = { useNewUrlParser: true, useUnifiedTopology: true };

// const connectDB = async () => {
//   await mongoose.connect(uri, resolveDeprecated, (err) => {
//     if (!err) {
//       console.log("MongoDB connected !")
//     } else {
//       console.log(JSON.stringify(error))
//     }
//   })
// }

// module.exports = connectDB
/////////////////////////////////////////
const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true }

const uri = process.env.URI

mongoose.connect(uri, options)

const db = mongoose.connection

db.on('error', console.log.bind(console, "connexion error"))
db.once('open', () => { console.log("connection succeeded") })

module.exports = { db }
