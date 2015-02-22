
(function () {
  'use strict';

  app.login = new app.LoginView();

  app.games = new app.Games();

  // TODO: This is really inefficient - making 2 RPC calls for the same
  // data in order to populate the "Your Move" list and then again for
  // the "Their Move" list.  Needs to be optimized later.
  app.myMovesView = new app.MyMovesView(app.games);
  app.theirMovesView = new app.TheirMovesView(app.games);


  $.ajaxSetup({
	headers: { 'auth_token': Cookies.get('userCookie')}

  });

}());
