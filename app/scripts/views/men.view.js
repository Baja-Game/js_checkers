
(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    template: Handlebars.templates.men,

    initialize: function (game) {
      this.game = game;
      this.renderMen();
      this.listen();
    },

    renderMen: function () {
      var self = this,
          board = this.game.attributes.game.board;

      board.forEach(function (row, r) {
        row.forEach(function (cell, c) {
          if (cell === 'm' || cell === 'M') {
            if (cell === cell.toLowerCase()) {
              self.renderMan(r, c, 1); // player1
            } else {
              self.renderMan(r, c, 2); // player2
            }
          }
        });
      });
    },

    renderMan: function (r, c, player) {

      var username, hash;

      if (player === 1) {
        username = this.game.attributes.player1.username;
      } else {
        username = this.game.attributes.player2.username;
      }
      // This hash is used to generate the unique monster image.
      hash = CryptoJS.MD5(username).toString();

      var id = String(r) + String(c),
          pos = [r, c],
          squareSize = 60,
          vpix = pos[0] * squareSize,
          hpix = pos[1] * squareSize,
          man = {id: id, vpix: vpix, hpix: hpix, hash: hash};

      $('.board').prepend(this.template(man));
    },

    listen: function () {
      $('.game-wrapper').on('click', '.men', function (e) {
        var target = $(e.currentTarget);

        // Check that this is my man?  If it is, then proceed...

        if (target.hasClass('active')) {
          target.removeClass('active');
        } else {
          $('.men').removeClass('active');
          target.addClass('active');
        }
      });
    }

  });

}());

