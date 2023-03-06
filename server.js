const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');

dotenv.config()

const app = express(); 
app.use(cors());

app.use(express.urlencoded({extended:true}));  
app.use(express.json())

app.use('/',express.static(__dirname+'/public')); 


app.listen(process.env.PORT,() => {
    console.log(`run on ${process.env.PORT}`)
})

const books_router = require('./routes/books.js')

app.use('/books', books_router)  // using this route for the fetch

app.delete('/books/:id', books_router)  // for the delete part 


  