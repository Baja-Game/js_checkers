
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




  app.GamesView = Backbone.View.extend({

    tagName: 'ul',
    className: 'games',

    template: Handlebars.templates.game,
    templateNoMyMoves: Handlebars.templates.game_no_my_moves,
    templateNoTheirMoves: Handlebars.templates.game_no_their_moves,

    // events: {
    //   'click #showGamesButton': 'render'
    // },

    initialize: function (collection, who) {
      this.collection = collection;
      this.render();

      this.myGamesView = (who === 'me') ? true : false;

      if (this.myGamesView) {
        $('.games-wrapper').append('<h2 id="myTurn">Your Move</h2>').append(this.el);
      } else {
        $('.games-wrapper').append('<h2 id="theirTurn">Their Move</h2>').append(this.el);
      }
    },

    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.fetch().done(function () {

        var obj = {};

        var filteredGamesList = self.collection.filter(function (game) {

          obj.isOddTurn = game.attributes.game.turn_counter % 2 == 1;
          obj.isEvenTurn = !obj.isOddTurn;

          // TODO: Swap out app.username for ?app.user.username? once that is exposed.

          obj.player1IsMe = game.attributes.player1.username === app.username;
          obj.player2IsMe = !obj.player1IsMe;

          // TODO: I may need to flip player1IsMe with player2IsMe
          // depending on how server handles the game startup.
          obj.isMyTurn = obj.isOddTurn && obj.player1IsMe ||
                         obj.isEvenTurn && obj.player2IsMe;

          return (self.myGamesView) ? obj.isMyTurn: !obj.isMyTurn;

        });

        if (filteredGamesList.length > 0) {
          addProps(filteredGamesList, obj, self);


        } else {

          if (self.myGamesView) {
            self.$el.append(self.templateNoMyMoves(game.attributes));
          } else {
            self.$el.append(self.templateNoTheirMoves(game.attributes));
          }


        }

        app.menView = new app.MenView(app.games.model[0]);

        app.boardView = new app.BoardView();


      });
    }

  });
}());


