import express from 'express'
import personalProjectModel from '../model/personalProjects'
import techModel from '../model/tech'

export const retrieveWholeProjectCollection = express.Router()
retrieveWholeProjectCollection.get('/gallery', async (req, res) => {
  const projectCollection = await personalProjectModel.find()
  res.status(202).send(projectCollection)
})

export const retrieveWhileTechCollection = express.Router()
retrieveWhileTechCollection.get('/tech', async (req, res) => {
  const techCollection = await techModel.find()
  res.status(202).send(techCollection)
})

export const retriveAllOfProjectAndTechCollections = express.Router()
retriveAllOfProjectAndTechCollections.get('/retrieveAllData', async (req, res) => {
  const projectCollection = await personalProjectModel.find()
  const techCollection = await techModel.find()
  res.status(202).send({ projectCollection, techCollection })
})