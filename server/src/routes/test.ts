import express from 'express'

const router = express.Router()

router.get('/error', (_req: express.Request, _res: express.Response) => {
  throw new Error ('Unable to retrieve user data')
})

export default router