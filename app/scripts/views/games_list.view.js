
(function () {
  'use strict';

  var countPrisoners = function (board, player1IsMe) {
    var i, j,
        freeMenCount = 0;
    board.forEach(function (row) {
      row.forEach(function (cell) {
        if (player1IsMe) {
          if (cell === 'M' || cell === 'K') {
            freeMenCount++;
          }
        } else {
          if (cell === 'm' || cell === 'k') {
            freeMenCount++;
          }
        }
      });
    });
    return (12 - freeMenCount);
  };

  var filterGamesList = function (self, obj) {

    return self.collection.filter(function (game) {

      obj.isOddTurn = game.attributes.game.turn_counter % 2 == 1;
      obj.isEvenTurn = !obj.isOddTurn;

      obj.player1IsMe = game.attributes.player1.username === app.user.attributes.username;
      obj.player2IsMe = !obj.player1IsMe;
      game.set('me', (obj.player1IsMe) ? 'player1' : 'player2');

      // TODO: I may need to flip player1IsMe with player2IsMe
      // depending on how server handles the game startup.
      obj.isMyTurn = obj.isOddTurn && obj.player1IsMe ||
                     obj.isEvenTurn && obj.player2IsMe;

      return (self.myMoves) ? obj.isMyTurn : !obj.isMyTurn;
    });
  };

  var addProps = function (filteredGamesList, obj, view) {

    var opponentUsername, hash, opponent, prisonCount, prisoner, timestamp;

    filteredGamesList.forEach(function (game) {

      opponentUsername = obj.player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
      hash = CryptoJS.MD5(opponentUsername).toString();
      game.set('hash', hash);

      opponent = obj.player1IsMe ? game.attributes.player2.username : game.attributes.player1.username;
      game.set('opponent', opponent);

      prisonCount = countPrisoners(game.attributes.game.board, obj.player1IsMe);
      game.set('prisonCount', prisonCount || 'NO');

      prisoner = utils.pluralize('prisoner', prisonCount);
      game.set('prisoner', prisoner);

      game.set('isMyTurn', obj.isMyTurn);

      timestamp = moment(game.attributes.game.updated_at).fromNow();
      game.set('timestamp', timestamp);

      view.$el.append(view.template(game.attributes));
    });

  };

  var render = function () {
    var self = this,
        obj = {};
    this.$el.empty();
    this.collection.fetch().done(function () {
      var filteredGamesList = filterGamesList(self, obj);

      if (filteredGamesList.length > 0) {
        addProps(filteredGamesList, obj, self);
      } else {
        self.$el.append(self.templateNoMoves());
      }
    });
  };

  var launchGame = function (e) {
    console.log('Clicked to launch game');
    var game = app.games.find(function (game) {
      return game.attributes.game.id == e.currentTarget.id;
    });
    app.menView = new app.MenView(game);
    app.boardView = new app.BoardView(game);
  };


  app.GamesListView = Backbone.View.extend({

    initialize: function () {

      var token = Cookies.get('userCookie');
      var username = Cookies.get('bajaUsername');

      // Get token from cookie here.
      app.user = new app.User();
      app.user.set('username', username);

      $('.games-wrapper').append('<div class="games-page"></div>');
      app.myMovesView = new app.MyMovesView(app.games);
      app.theirMovesView = new app.TheirMovesView(app.games);
    }

  });


  app.MyMovesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMoves: Handlebars.templates.game_no_my_moves,

    events: {
      'click li': 'clicked'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();
      this.myMoves = true;

      $('.games-page').append('<h2 id="myTurn">Your Move</h2>').append(this.el);
    },

    render: render,

    clicked: launchGame

  });


  app.TheirMovesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMoves: Handlebars.templates.game_no_their_moves,

    events: {
      'click li': 'clicked'
    },

    initialize: function (collection) {
      this.collection = collection;
      this.render();
      this.myMoves = false;

      $('.games-page').append('<h2 id="theirTurn">Their Move</h2>').append(this.el);
    },

    render: render,

    clicked: launchGame

  });

}());


