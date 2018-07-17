// Data set of all goals and their progress
var DATA = (function() {
  // set up Data categories
  const obj = {
    books: {},
    udemy: {},
    projects: {}
  };

  // constructor objects to be used with the "new" keyword
  // these constructors can take an object to define own properties
  // all default properties and methods are burried in the prototype chain (ex. Book.prototype)
  function Book(obj) {
    // Check if obj is a non-array object
    if (typeof obj === "object" && !Array.isArray(obj)) {
      let key;

      //
      for (key in obj) {
        this[key] = obj[key];
      }
    }
  }
  // can this be part of the constructor object?
  Book.prototype = {
    title: "unknown title",
    author: "unknown author",
    yearPublished: "unknown publish year",
    started: false,
    completed: false,
    dateStarted: "unknown start date",
    dateFinnished: "unknown end date"
  };

  obj.books.bookOne = new Book({
    title: "Tom Sawyer",
    author: "Mark Twain"
  });
  obj.books.bookTwo = new Book([12, 32, 11, 15]);

  return obj;
})();
