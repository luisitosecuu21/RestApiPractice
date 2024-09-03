import {Router} from 'express'
import {getTasks, getTask, createTask, updateTask, deleteTask} from '../controllers/tasks.controllers.js'
const routerTasks = Router()


routerTasks.get('/tasks', getTasks)

routerTasks.get('/tasks/:id', getTask)

routerTasks.post('/tasks', createTask)

routerTasks.put('/tasks/:id', updateTask)

routerTasks.delete('/tasks/:id', deleteTask)



export default routerTasks

