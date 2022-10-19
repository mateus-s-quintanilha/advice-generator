const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

const urlApi = 'https://api.adviceslip.com/advice'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    const response = await axios(urlApi)
    const resJson = response.data

    res.send(resJson)
})


app.listen(3001, () => console.log('Servidor rodando na porta 3001!'))