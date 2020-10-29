import express from 'express'
import personalProjectModel from '../model/personalProjects'
import projectModel from '../model/project'

const minipulateData = express.Router()

minipulateData.post('/minipulateData', async (req, res) => {

  const result = await projectModel.find()
  const collection = JSON.parse(JSON.stringify(result))

  collection.forEach((doc: any) => {
    let temp: any = {}
    if (doc.links) {
      doc.links.forEach(link => {
        temp[Object.keys(link)[0]] = link[Object.keys(link)[0]]
        doc.linksTemp = {}
        doc.linksTemp.client = temp.client
        doc.linksTemp.server = temp.server
      })
    }
  })
  collection.forEach((doc, index) => {
    doc.links = {}
    doc.links.client = doc.linksTemp?.client ?? ''
    doc.links.server = doc.linksTemp?.server ?? ''
    delete doc.linksTemp
  })
  console.log(collection)

  personalProjectModel.insertMany(collection).then((eee) => console.log(eee, 'saved?'))

})

export default minipulateData