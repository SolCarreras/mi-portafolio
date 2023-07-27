const express= require('express');
const app= express();
app.use(express.static('public'));
const dotenv= require('dotenv').config();
const port= process.env.PORT ||3000;
const mainRouter= require('./routers/main');



app.listen(port, () => {
    console.log('Servidor funcionando')
});
app.use('/', mainRouter)



