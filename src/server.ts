import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import { retrieveWhileTechCollection, retrieveWholeProjectCollection, retriveAllOfProjectAndTechCollections } from './routes/retrieveData'
import cors from 'cors'

const app = express()
const port = 8000

app.use(cors())

app.use('/demo', retrieveWholeProjectCollection, retrieveWhileTechCollection)
app.use('/', retriveAllOfProjectAndTechCollections)

app.listen(port, () => console.log(`server started at http://localhost:${port}`))

mongoose.connect(process.env.MONGODB, {
  useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true
}, () => console.log('connected to db'))

mongoose.connection
  .once('open', () => console.log('connection successful'))
  .on('error', (error) => console.log(error, 'connection successful'))

// npm installings > typescript & nodemon (tsConfig, nodemonConfig) > mongoose & dotenv for connecting to the server