import express from 'express'
import {PORT} from './config.js'
import routerTasks from './routes/tasks.routes.js'
import cors from 'cors'

import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

// MIDLEWARE
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use(routerTasks)

app.use(express.static(join(__dirname, '../client/dist')))



app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})