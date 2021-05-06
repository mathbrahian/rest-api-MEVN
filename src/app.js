import express from 'express';
import morgan from 'morgan';
import notes from './routes/notes.routes'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/notes', notes)

export default app;