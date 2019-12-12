const express = require('express')
// const Router = express.Router()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const mongoose = require('mongoose')

require('dotenv').config()

// const connectDB = require('./config/db')
// const db = require('./config/db')
const app = express()
const employeesRoute = require('./routes/employeesRoute')


// connectDB()

// mongoose.connect(connectDB.uri, connectDB.client).catch((error) => console.log(JSON.stringify(error))
// )

// / Fonctionne : limite l'accès au seul front
// / Danger : si le port est occupé et passe 4201, il ne fonctionne plus !!
// app.use(cors({ origin: 'http://localhost:4200' }))

app.use(cors({ origin: 'http://localhost:4200' }))


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/employees', employeesRoute)

app.listen(process.env.PORT || 3003, () => console.log('Listening server on port 3003'))

/////////////////////////////////////////
// const express = require('express')
// // const Router = express.Router()
// const bodyParser = require('body-parser')
// // const morgan = require('morgan')
// // const cors = require('cors')
// // const mongoose = require('mongoose')

// require('dotenv').config()

// const connectDB = require('./config/db')
// const app = express()
// // const { client } = require('./db.js');
// const employeesRoute = require('./routes/employeesRoute')


// connectDB()

// // mongoose.connect(connectDB.uri, connectDB.client).catch((error) => console.log(JSON.stringify(error))
// // )

// // app.use(cors())
// // app.use(morgan('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/employees', employeesRoute)

// app.listen(process.env.Port || 3003, () => console.log('Listening server on port 3003'))