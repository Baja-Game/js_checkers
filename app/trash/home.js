
(function () {
  'use strict';

  app.Home = Backbone.View.extend({

    el: '.board',

    events: {
      'click': 'startGame'
    },

    boardTemplate: Handlebars.templates.board,

    initialize: function (args) {
      console.log('\nHome view created: ', this);
      this.boards = args.boardsCollection;
      this.render();
    },

    render: function () {
      console.log('\nRender called: ', this.el);
      var $board = this.$el;
      $board.empty();
      $board.append('I\'m a rendered board');
      $board.append(this.boardTemplate());
    },

    initPlayers: function () {
      var player1 = new app.Player(),
          player2 = new app.Player();
    },

    initMen: function () {
      var i, men = {};
      for (i = 0; i < 12; i++) {
        men[i] = new app.Man();
      }
    },

    startGame: function (e) {
      var self = this,
          modelInst = this.boards.models[0],
          boardState = modelInst.attributes.boardState;
          // boardInst = new app.Board();

      console.log(modelInst);

      console.log('\nGame start triggered: ', this);

      console.log(boardState.join('\n') + '\n\n');

      // modelInst.set(boardState[4][1], 'asdf');
      // boardState[0][0] = "MMM";

      // boardState[4][1] = boardState[5][0];

      console.log(boardState.join('\n'));

      // e.preventDefault();

      // this.boards.add(boardInst).save().done(function () {
      //   self.render();
      // });
    }

  });

}());

