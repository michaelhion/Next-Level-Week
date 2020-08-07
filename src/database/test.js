const DataBase = require("./db")
const createProffy = require('./createProffy')

DataBase.then(async (db)=>{
    //inserir dados

    proffysValue = {
            name:"Diego Fernandes",
            avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
            whatsapp:"11999999999",
            bio:"Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        },

        classValue ={
            subject:"Química",
            cost:"20",
            //o id virá pelo banco de dados
        }

        classScheduleValues = [
            //o class_id virá pelo banco de dados, após cadastrarmos a class
            {
            weekday:1,
            time_from:720,
            time_to:1000
            },
            {
            weekday:0,
            time_from:520,
            time_to:1000
            }
        ]
        await createProffy(db,{proffyValue,classValue,classScheduleValues})

    //consultar dados inseridos
})