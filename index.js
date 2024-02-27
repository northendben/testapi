const express = require('express')
const app = express()
app.use(express.json());

app.get('/', async (req,res) =>{
    res.send('Hello world')
})

app.post('/data', async (req,res) =>{
    body = req.body
    console.log(body)
    res.status(200).send({'message': 'success'})
})

app.listen(5000, "0.0.0.0", () => {
    console.log("App is running");
})
