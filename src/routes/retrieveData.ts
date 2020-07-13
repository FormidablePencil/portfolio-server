import express from 'express'
import projectModel from '../model/project'
import techModel from '../model/tech'

export const retrieveWholeProjectCollection = express.Router()
retrieveWholeProjectCollection.get('/gallery', async (req, res) => {
  const projectCollection = await projectModel.find()
  if (!projectCollection) return res.sendStatus(404)
  res.status(202).send(projectCollection)
})

export const retrieveWhileTechCollection = express.Router()
retrieveWhileTechCollection.get('/tech', async (req, res) => {
  const techCollection = await techModel.find()
  if (!techCollection) return res.sendStatus(404)
  res.status(202).send(techCollection)
})

export const retriveAllOfProjectAndTechCollections = express.Router()
retriveAllOfProjectAndTechCollections.get('/retrieveAllData', async (req, res) => {
  const projectCollection = await projectModel.find()
  const techCollection = await techModel.find()
  if (!techCollection || !projectCollection) return res.sendStatus(404)
  res.status(202).send({ projectCollection, techCollection })
})

