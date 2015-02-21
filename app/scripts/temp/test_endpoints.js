
// CREATE USER =================================================================

var createUserURL = 'https://baja-checkers.herokuapp.com/users',
    user = {
      email: 'test2@test.com',
      password: 'password1',
      username: 'Test2'
    };

// $.post(createUserURL, {user: user}, function (data) {
//   console.log(data);
// });

var returnedUserTest2 = {
  auth_token: "s6NmkzRkUhCZJj7zzK4_",
  user: {
    draws: 0,
    email: "test2@test.com",
    experience: 0,
    forfeits: 0,
    losses: 0,
    username: "Test2",
    wins: 0
  }
};


// LOGIN USER ==================================================================

var loginUserURL = 'https://baja-checkers.herokuapp.com/users/sign_in',
    user = {
      email: 'test3@test.com',
      password: 'password1'
    };

// $.post(loginUserURL, {user: user}, function (data) {
//   console.log(data);
// });

var returnedUserTest3 = {
  auth_token: "ursXYhG-AeFxxk8NCzvk",
  user: {
    draws: 0,
    email: "test3@test.com",
    experience: 0,
    forfeits: 0,
    losses: 0,
    username: "Test3",
    wins: 0
  }
};


// LIST GAMES ==================================================================

var listGamesURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = "ursXYhG-AeFxxk8NCzvk",
    url = listGamesURL + '?auth_token=' + auth_token;

// $.getJSON(url, function (data) {
//   console.log('jQuery getJSON of games list...');
//   console.log('\n\n', data);
// });

var returnedListGamesTest3 = [
  {
    game: {
      board: [
        [' ','1',' ','1',' ','1',' ','1'],

        ['1',' ','1',' ','1',' ','1',' '],

        [' ','1',' ','1',' ','1',' ','1'],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        [' ',' ',' ',' ',' ',' ',' ',' '],

        ['2',' ','2',' ','2',' ','2',' '],

        [' ','2',' ','2',' ','2',' ','2'],

        ['2',' ','2',' ','2',' ','2',' ']
      ],
      finished: null,
      id: 14,
      turn_counter: 1,
      updated_at: "2015-02-20T15:00:50.027Z",
    },
    player1: {
      id: 7,
      username: "maxmcchesney"
    },
    player2: {
      id: 12,
      username: "Test3"
    },
  },
  {},  // same as above, except updated_at: "2015-02-20T15:01:28.025Z"
  {},  // same as above, except updated_at: "2015-02-20T15:21:14.469Z"
  {}   // same as above, except updated_at: "2015-02-20T16:04:27.431Z"
]


// JOIN GAME ===================================================================

var joinGameURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = 'ursXYhG-AeFxxk8NCzvk';

// $.ajax({
//   url: joinGameURL,
//   type: 'PUT',
//   data: {auth_token: auth_token}
// })
// .done(function (data) {
//   console.log(data);
// });

var returnedJoinGameTest3 = {
  game: {
    board: [
      [' ','1',' ','1',' ','1',' ','1'],

      ['1',' ','1',' ','1',' ','1',' '],

      [' ','1',' ','1',' ','1',' ','1'],

      [' ',' ',' ',' ',' ',' ',' ',' '],

      [' ',' ',' ',' ',' ',' ',' ',' '],

      ['2',' ','2',' ','2',' ','2',' '],

      [' ','2',' ','2',' ','2',' ','2'],

      ['2',' ','2',' ','2',' ','2',' ']
    ],
    finished: null,
    id: 14,
    turn_counter: 1,
    updated_at: "2015-02-20T15:00:50.027Z",
    // updated_at: "2015-02-20T15:01:28.025Z",
    // updated_at: "2015-02-20T15:21:14.469Z",
    // updated_at: "2015-02-20T16:04:27.431Z",
  },
  player1: {
    id: 7,
    username: "maxmcchesney"
  },
  player2: {
    id: 12,
    username: "Test3"
  }
}



