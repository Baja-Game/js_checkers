
(function () {
  'use strict';

  // app.userSignupView = new app.UserSignupView();
  app.userSigninView = new app.UserSigninView();

  app.games = new app.Games();

  // TODO: This is really inefficient - making 2 RPC calls for the same
  // data in order to populate the "Your Move" list and then again for
  // the "Their Move" list.  Needs to be optimized later.
  app.gamesListView = new app.GamesListView();


  $.ajaxSetup({
	headers: { 'auth_token': Cookies.get('userCookie')}

  });

}());

