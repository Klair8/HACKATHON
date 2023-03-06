const  {db} = require('../config/db.js'); 

const getAllBooks = () =>{    // get all the items
    return db('mybooks')
    .select('id','title','authors')
    .orderBy('id')
    .returning('*')
}

const deleteBooks= (id) =>{
  return db('mybooks')
  .del ()
  .where({id})
  .returning('*')
}

const insertBooks = (item) =>{   
  return db('mybooks')
  .insert(item)
  .returning('*')
}


module.exports ={  
    getAllBooks,
    deleteBooks,
    insertBooks,

    }
  