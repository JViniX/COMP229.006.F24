const author = {
    fullName: "Bob Alice",
    books: ["Book 01","Book 02","Book 03"],

    printBooks() {
      this.books.forEach( book => document.write(book + ' by ' +this.fullName + '<br>'));
    },

    printBooks1() {
      function printValue(book) {      
         document.write(book + ' by ' +this.fullName + '<br>');
      }

      this.books.forEach(printValue);
    }    
};

author.printBooks();
author.printBooks1();