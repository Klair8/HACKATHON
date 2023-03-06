const express = require('express');

const  {_getAllBooks,_deleteBooks,_insertBooks} = require('../controllers/books.js'); 

const router = express.Router()   // creation of our router 


router.get('/', _getAllBooks)
router.delete('/:id', _deleteBooks)
router.post('/', _insertBooks)

module.exports = router  // router to export 
   