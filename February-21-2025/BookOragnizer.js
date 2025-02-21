var input = 
[
{title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: 1954 },
{title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
{title: "1984", author: "George Orwell", year: 1949 },
{title: "Go Set a Watchman", author: "Harper Lee", year: 2015 },
{title: "The Hobbit", author: "J. R. R. Tolkien", year: 1937 },
{title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
{title: "The Two Towers", author: "J. R. R. Tolkien", year: 1954 }
]

const organizedBooks = (input) => { 
  return input.reduce((acc, book) => { 
    if(!acc[book.author]) { 
      acc[book.author] = []
    }
    acc[book.author].push(
      { 
        title: book.title, 
        year: book.year
      })
  return acc
  }, {})
}

console.log(organizedBooks(input))