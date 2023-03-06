const btn = document.querySelector("#btn");

async function queryBooks(){
 const search = (document.getElementById("query").value).toLowerCase();
    try{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&maxResults=6`)
        if(response.status !== 200){
            throw new Error ("Ohh No !! Something went wrong")
        }
        const data = await response.json();
        console.log(data)
        if(data.message == 'not found') {
            throw new Error("Ohh No !! Couldnt find the books");
        }  
        console.log(data.items)

         // Clear the container element before making a new query
         const container = document.getElementById("container");
         container.innerHTML = '';
       
        for (let i =0; i <data.items.length ; i++){
            const title = data.items[i].volumeInfo.title;
            const author=`Author: ${data.items[i].volumeInfo.authors}`;
            // const description = data.items[i].volumeInfo.description;
            const preview = data.items[i].volumeInfo.imageLinks.thumbnail
       
        console.log(title, author, preview);
        displayBook(title,author,preview);
        }
    }catch (err){
        return("Oupppps we lost you ")
    }
}


    function displayBook(title,author,preview) {
        const container = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("book");
        const paraTitle = document.createElement("h3");
        const paraAuthor = document.createElement("h4");
        // const paraDes = document.createElement("p");  //=> option when we click on the pic to see description

        const textTitle = document.createTextNode(title);
        const textAuthor= document.createTextNode(author);
        // const textDes = document.createTextNode(description);

        const img = document.createElement("img");
        img.src = `${preview}`;
        img.style.width ="150px";
        img.style.height="150px" ;  
    
        paraTitle.appendChild(textTitle);
        paraAuthor.appendChild(textAuthor);
        // paraDes.appendChild(textDes);

        // const addButton = document.createElement("button");  // =>option to add book to my Read Pile
        // addButton.textContent = "Add to My Read Pile";
        // addButton.addEventListener("click", function() {
        //   addBookToPile(title, author);
          
        // });

        div.append(paraTitle,paraAuthor,img);
        container.appendChild(div);
        }

        let booksList = [];

        function addBookToPile(title, author) {
        const book = {
        title: title,
        author: author
        };
        booksList.push(book);
        console.log(`Added "${title}" by ${author} to the list`);
        }

      
        // export{booksList}; // For the add book to my Read pile