
var board = [
  [' ','1',' ','1',' ','1',' ','1'],

  ['1',' ','1',' ','1',' ','1',' '],

  [' ','1',' ','1',' ','1',' ','1'],

  [' ',' ',' ',' ',' ',' ',' ',' '],

  [' ',' ',' ',' ',' ',' ',' ',' '],

  ['2',' ','2',' ','2',' ','2',' '],

  [' ','2',' ','2',' ','2',' ','2'],

  ['2',' ','2',' ','2',' ','2',' ']
];

var mapLetters = function (board) {
  var letterRow;
  var letterBoard = [];
  board.forEach(function (row) {
    letterRow = row.map(function (cell) {
      if (cell === '1') return 'M';
      if (cell === '2') return 'm';
      if (cell === '3') return 'K';
      if (cell === '4') return 'k';
      return ' ';
    });
    letterBoard.push(letterRow);
  });
  return letterBoard;
};
console.log(mapLetters(board));

