require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/fio',(req,res)=>{
    const name = 'Сайпудин'
    const familyName = 'Абдулмуслимов'
    res.send(`Привет, ${name} ${familyName}!`)
})
app.post('/add',async(req,res)=>{
    const {login,password} = req.body
    await User.create({login,password})
    res.send(`user was created`)
})

app.listen(process.env.PORT || 8080,()=>{
    console.log(`server is running on port: ${process.env.PORT || 8080}`)
})