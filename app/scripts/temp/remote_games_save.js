
var gamesURL = 'http://tiy-atl-fe-server.herokuapp.com/collections/bob_ch_games_array',

    game = {
      game_id: 'unique_string',
      timestamp: '2015-02-17T18:25:43.511Z',
      player1: 'my_id',
      player2: null,
      board: [
        [' ','M',' ','M',' ','M',' ','M'],

        ['M',' ','M',' ','M',' ','M',' '],

        [' ','M',' ','M',' ','M',' ','M'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['m',' ','m',' ','m',' ','m',' '],

        [' ','m',' ','m',' ','m',' ','m'],

        ['m',' ','m',' ','m',' ','m',' ']
      ],
      last_move: [],
      turn_counter: 1,
      dull_move_counter: 0,
      is_timed: false,
      finished: 0
    };


// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });

game.timestamp = '2015-02-17T18:35:43.511Z';
game.board[5][4] = ' ';
game.board[4][5] = 'm';
game.player2 = 'Opponent1';
game.turn_counter = 2;
game.dull_move_counter = 1;

// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });

game.timestamp = '2015-02-17T18:45:43.511Z';
game.board[2][1] = ' ';
game.board[3][2] = 'M';
game.player2 = 'Opponent2';
game.turn_counter = 3;
game.dull_move_counter = 2;

// $.post(gamesURL, game, function (data) {
//   console.log(data);
// });



