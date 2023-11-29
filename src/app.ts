import express, { Application } from 'express';
const app:Application = express()

app.get('/', (req , res) => {
  res.send('this application is runnig fine')
})

export default app

