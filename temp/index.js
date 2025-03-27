require('dotenv').config()
const express = require('express')
const app = express()
const sequelize = require('./db')
const model = require('./model')
const {User} = require('./model')

app.use(express.json())

/*

    Первый коммит |
                  |
                  |
                  *
*/
//Первое задание "ПЕРВЫЙ END-POINT"
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/fio',(req,res)=>{
    const name = 'Сайпудин'
    const familyName = 'Абдулмуслимов'
    res.send(`Привет, ${name} ${familyName}!`)
})

/*

    Второй коммит |
                  |
                  |
                  *
*/
//POST-ЗАПРОС postEndPoint
app.post('/add',async(req,res)=>{
    const {login,password} = req.body
    await User.create({login,password})
    res.send(`user was created`)
})

/*

    Третий коммит |
                  |
                  |
                  *
*/
//DELETE-ЗАПРОС deleteEndPoint
app.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const candidate = await User.findByPk(id)
    if(!candidate){
        res.send('Error')
    }
    await candidate.destroy()
    res.send(`user was destroyed`)
})
// в конце git merge или git pull
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