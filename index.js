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
app.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const candidate = await User.findByPk(id)
    if(!candidate){
        res.send('Error')
    }
    await candidate.destroy()
    res.send(`user was destroyed`)
})

async function start(){
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(process.env.PORT || 8080,()=>{
            console.log(`server is running on port: ${process.env.PORT || 8080}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()