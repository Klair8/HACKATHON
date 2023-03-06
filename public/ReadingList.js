
      // import { booksList } from "./script"; // option to bring the book from goolge API

      function getAllBooks() {
        fetch('http://localhost:3000/books')
          .then(res => res.json())
          .then(data => {
            console.log(data);
            data.forEach(element => {
              showBooks(element.id,element.title, element.authors);
            });
            // booksList.push(...data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      
      const addBook = (e) =>{
        console.log(e.target)
        const title = e.target.title.value;
        const authors = e.target.authors.value;
        fetch('/books',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'   
            },
            body: JSON.stringify({title,authors})
        })
         .then(res=>res.json())
        .then(data=>{
            showBooks(data);
         })
        .catch (err =>{
        console.log(err)
         })        
    }
       
      function showBooks(id,title, author) {
        const table = document.getElementById('myTable');
        const row = table.insertRow(1);
        row.setAttribute('data-id', id);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = title;
        cell2.innerHTML = author;

        const delBtn = document.createElement('button');
        const textdelBtn = document.createTextNode('Delete');
        delBtn.appendChild(textdelBtn);
        cell3.appendChild(delBtn);
        delBtn.addEventListener('click', (e) => {
        console.log('script-deletebtn',e.target)
        deleteBooks(id,title, author)
        });

        const favBtn = document.createElement('button');
        const textfav = document.createTextNode('Favorite');
        favBtn.appendChild(textfav);
        cell4.appendChild(favBtn);
        favBtn.addEventListener('click', () => {
          alert(`"${title}" by ${author} has been added to favorites!`);
          const favBooks = JSON.parse(localStorage.getItem('favorites')) || [];
          const book = {
            id: id,
            title: title,
            author: author
          };
          favBooks.push(book);
          localStorage.setItem('favorites', JSON.stringify(favBooks));
        });
      }
    
      const deleteBooks = (id,title, author) => {
        fetch(`/books/${id}`, {  
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, author})
        })
          .then(res => res.json())
          .then(data => {
            console.log('fromdelete',data);
            location.reload();
            const table = document.getElementById('myTable');
            const rowToDelete = table.querySelector(`[data-id="${id}"]`);
            if (rowToDelete) {
              table.removeChild(rowToDelete);
            }

          })
          .catch(err => {
            return('Error:', err);
          });
      };
      
