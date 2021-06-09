import express from 'express'
import { config as dotenv } from 'dotenv'
import routes from './routes'
import middlewares from './middlewares'

const app = express()

routes(app)

middlewares(app)

dotenv()
export default app