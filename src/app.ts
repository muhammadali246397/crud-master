import express, { Application } from 'express'
import cors from 'cors'
import ruter from './app/user/user.route'
const app: Application = express()

app.use(express.json())
app.use(cors())
//user routers
app.use('/api/users', ruter)

app.get('/', (req, res) => {
  res.send('this application is runnig fine')
})

export default app
