import {createPool} from 'mysql2/promise'


const pool = createPool({
    host: '',
    user: 'root',
    password: '5553236259',
    database: 'tasks'
})

export default pool