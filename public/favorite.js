function showFavorites() {
    const favBooks = JSON.parse(localStorage.getItem('favorites')) || [];
    const table = document.getElementById('favoritesTable');
    favBooks.forEach(book => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
  
      cell1.innerHTML = book.title;
      cell2.innerHTML = book.author;
      cell3.innerHTML = '<button>Delete</button>';
  
      const delBtn = cell3.querySelector('button');
      delBtn.addEventListener('click', () => {
        const index = favBooks.findIndex(b => b.id === book.id);
        favBooks.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favBooks));
        table.deleteRow(row.rowIndex);
      });
    });
  }
  showFavorites() 
