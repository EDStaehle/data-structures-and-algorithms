# Challenge Summary

In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Tests for these functions, and an array of sample data, have been provided in test.js and movies.js.

In the second half of the code challenge, you will write tests for your comparator functions. This may necessitate refactoring the code you wrote in part one. Your tests will need to call the comparator functions directly, and make assertions about the response values given test inputs.

## Solution

### functions

```js
"use strict";

function sortYear(movies) {
  return movies.sort((a, b) => (a.year > b.year ? -1 : 1));
}
function sortTitle(movies) {
  return movies.sort((a, b) => {
    const a_Title = a.title.toLowerCase().replace(/^the /, "");
    const b_Title = b.title.toLowerCase().replace(/^the /, "");

    if (a_Title < b_Title) {
      return -1;
    } else if (a_Title > b_Title) {
      return 1;
    } else {
      return 0;
    }
  });
}
function compareYear(movies) {
  return movies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      return 0;
    }
  });
}
```

### tests

```js
"use strict";

const { Movies } = require("./movies");
const { sortTitle, sortYear, compareYear } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Ratatouille",
      "Stardust",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });
  it("sorts the Movies array in ascending order by year", () => {
    const movies = compareYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Intouchables",
    ]);
  });
});
```
