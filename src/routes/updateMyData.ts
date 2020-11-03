import express from 'express'
import ProjectModel from '../model/project'
import PersonalProjectModel from '../model/personalProjects'
const updateMyData = express.Router()

updateMyData.post('/updateMyData', async (req, res, next) => {
  const collection = await PersonalProjectModel.find()
  const nowModifiableCollection = await JSON.parse(JSON.stringify(collection))
  const changed = await addDeviceTypeToImagePushToDb(nowModifiableCollection)
  ProjectModel.insertMany(changed)
    .then((returned) => {
      res.send(returned)
    })
})


const addDeviceTypeToImagePushToDb = async (collection) => {
  let ress = collection.map(doc => {
    doc.images = doc.images.map(item => {
      return { device: doc.type, url: item }
    })
    doc.showInPortfolio = doc.showInPorfolio
    delete doc.showInPorfolio
    return doc
  })
  return ress
}

export default updateMyData