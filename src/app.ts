import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
import cors from 'cors'
import router from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('Server Working Properly!')
})

export default app
