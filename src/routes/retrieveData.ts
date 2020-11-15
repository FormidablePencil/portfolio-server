import express from 'express'
import protfolioTextContentModel from '../model/protfolioTextContent'
import ProjectModel from '../model/project'
import techModel from '../model/tech'

export const retrieveWholeProjectCollection = express.Router()
retrieveWholeProjectCollection.get('/gallery', async (req, res) => {
  const projectCollection = await ProjectModel.find()
  res.status(202).send(projectCollection)
})

export const retrieveWhileTechCollection = express.Router()
retrieveWhileTechCollection.get('/tech', async (req, res) => {
  const techCollection = await techModel.find()
  res.status(202).send(techCollection)
})

export const retriveAllOfProjectAndTechCollections = express.Router()
retriveAllOfProjectAndTechCollections.get('/retrieveAllData', async (req, res) => {
  const projectCollection = await ProjectModel.find()
  const techCollection = await techModel.find()
  res.status(202).send({ projectCollection, techCollection })
})

export const retrivedataForLandingSite = express.Router()
retrivedataForLandingSite.get('/dataForLandingSite', async (req, res) => {
  const projectCollection = await ProjectModel.find()
  const techCollection = await techModel.find()
  const protfolioTextContent = await protfolioTextContentModel.find()
  res.status(202).send({ projectCollection, techCollection, protfolioTextContent })
})