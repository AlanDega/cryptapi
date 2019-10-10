const mongoose = require('mongoose');

const URL_MONGO = "mongodb+srv://usuario1:contra123@cluster0-vvocg.mongodb.net/peliculas?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO, {useUnifiedTopology: true}, (error) => {
    if(!error){
        console.log('Conexion exitosa con mongodB');

    } else {
        console.log(error);
    }
})

const Schema = mongoose.Schema;

const precioSchema = new Schema({
    precio: String,
    moneda: String,
    

    img: [ String],

    



}, {timestamps: true} )

const Precio = mongoose.model ('Precio',precioSchema)

module.exports = {  
    Precio
}