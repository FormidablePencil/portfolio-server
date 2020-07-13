import express from 'express'
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`))

//npm installings > typescript > mongoose & dotenv for connecting to the server