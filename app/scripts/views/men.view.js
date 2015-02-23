
(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    template: Handlebars.templates.men,

    initialize: function (game) {
      this.game = game;
      this.renderMen();
      this.listenForManClick();
      this.listenForClearClick();
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

    // Highlight the selected man if it belongs to the user.
    // Adding the 'active' class also makes it searchable after
    // the click listener on the board picks up something.
    listenForManClick: function () {
      var self = this;
      $('.game-wrapper').on('click', '.men', function (e) {
        var target = $(e.currentTarget),
            id = target.attr('id'),
            contents = self.cellContents(id[0], id[1]),
            isMyMan = ( self.player1isMe() &&  self.isPlayer1Man(contents)) ||
                      (!self.player1isMe() && !self.isPlayer1Man(contents));

        if (isMyMan) {
          if (target.hasClass('active')) {
            target.removeClass('active');
          } else {
            $('.men').removeClass('active');
            target.addClass('active');
          }
        }
      });
    },

    // Clear the man highlighting if user clicks somewhere else.
    listenForClearClick: function () {
      $('.game-wrapper').on('click', function (e) {
        var target = $(e.target),
            imageEl = target.hasClass('normal'),
            menEl = target.hasClass('men');

        if (!imageEl && ! menEl) {
          $('.men').removeClass('active');
        }
      });
    },


    // I've added these functions to board.view and men.view.
    // Could be refactored later.

    cellContents: function (y, x) {
      var board = this.game.attributes.game.board;
      return board[y][x];
    },

    isPlayer1Man: function (contents) {
      return contents === contents.toUpperCase();
    },

    player1isMe: function () {
      return this.attributes.me === 'player1';
    }


  });

}());

