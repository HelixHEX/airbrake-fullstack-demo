import 'dotenv-safe/config'
import express from 'express'
import test from './routes/test'

const Airbrake = require('@airbrake/node');
const airbrakeExpress = require('@airbrake/node/dist/instrumentation/express');

const airbrake = new Airbrake.Notifier({
  projectId: process.env.AIRBRAKE_PROJECT_ID,
  projectKey: process.env.AIRBRAKE_PROJECT_KEY,
});

const PORT = process.env.PORT || 5000

const main = () => {
  const app = express ();
  
  app.use(airbrakeExpress.makeMiddleware(airbrake));

  app.use('/', test)

  app.use(airbrakeExpress.makeErrorHandler(airbrake));
  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`)
  })
}

main()