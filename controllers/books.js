const  {getAllBooks,deleteBooks, insertBooks} = require('../module/books.js'); 

const _getAllBooks =(req,res)=>{   // create the function to get the books
    getAllBooks()
    .then(data=>{
        console.log('my book', data)
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({msg:'error'})
    })
}
    
const _deleteBooks=(req,res)=>{   // create the function for the delete
    console.log('controllers delete',req.params)
    deleteBooks(req.params.id)
    .then(data=>{
        res.json(data)
    })
    .catch(err =>{
        console.log(err)
    })
}


const _insertBooks =(req,res)=>{   // create the function to insert the various books
    insertBooks(req.body)
.then(data=>{
    res.json(data)
})
.catch(err =>{
    console.log(err)
    res.status(404).json({msg:'error'})
})
}

module.exports ={  // module to export the function
    _getAllBooks,
    _deleteBooks,
    _insertBooks
    }
