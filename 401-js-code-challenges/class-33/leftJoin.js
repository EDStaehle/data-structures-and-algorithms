'use strict';

function leftJoin(tableA, tableB) {
  let tableAKeys = tableA.keys();
  let tableBKeys = tableB.keys();
  let joinResults = [];
  tableAKeys.forEach(key => {
    let keyResults = [];
    keyResults.push(key, tableA.get(key));
    if (tableBKeys.includes(key)) {
      keyResults.push(tableB.get(key));
    } else {
      keyResults.push(null);
    }
    joinResults.push(keyResults);
  });

  let filteredTableBKeys = tableB.keys().filter(key => !tableAKeys.includes(key));
  filteredTableBKeys.forEach(key => {
    let keyResults = [key, null, tableB.get(key)];
    joinResults.push(keyResults);
  });

  return joinResults;
}
module.exports = leftJoin
