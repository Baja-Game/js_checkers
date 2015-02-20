
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
  authentication_token: "s6NmkzRkUhCZJj7zzK4_",
  draws: 0,
  email: "test2@test.com",
  experience: 0,
  forfeits: 0,
  losses: 0,
  username: "Test2",
  wins: 0
};


// LOGIN USER ==================================================================

var loginUserURL = 'https://baja-checkers.herokuapp.com/users/sign_in',
    user = {
      email: 'test2@test.com',
      password: 'password1'
    };

// $.post(loginUserURL, {user: user}, function (data) {
//   console.log(data);
// });

var returnedUserTest2 = {
  authentication_token: "s6NmkzRkUhCZJj7zzK4_",
  draws: 0,
  email: "test2@test.com",
  experience: 0,
  forfeits: 0,
  losses: 0,
  username: "Test2",
  wins: 0
};


// LIST GAMES ==================================================================

var listGamesURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = "s6NmkzRkUhCZJj7zzK4_",
    url = listGamesURL + '?auth_token=' + auth_token;

// $.getJSON(url, function (data) {
//   console.log(data);
// });


// JOIN GAME ===================================================================

var joinGameURL = 'https://baja-checkers.herokuapp.com/games',
    auth_token = 's6NmkzRkUhCZJj7zzK4_';

// $.ajax({
//   url: joinGameURL,
//   type: 'PUT',
//   data: {auth_token: auth_token}
// })
// .done(function (data) {
//   console.log(data);
// });

