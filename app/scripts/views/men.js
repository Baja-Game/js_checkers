
(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    template: Handlebars.templates.men,

    initialize: function (model) {
      this.model = model;
      this.renderMen();
    },

    renderMen: function () {
      var self = this,
          board = this.model.attributes.game.board;

      board.forEach(function (row, r) {
        row.forEach(function (cell, c) {
          if (cell === 'm' || cell === 'M') {
            if (cell === cell.toLowerCase()) {
              self.renderMan(r, c, 1);
            } else {
              self.renderMan(r, c, 2);
            }
          }
        })
      });
    },

    renderMan: function (r, c, player) {

      var username, hash;

      if (player === 1) {
        username = this.model.attributes.player1.username;
      } else {
        username = this.model.attributes.player2.username;
      }

      hash = CryptoJS.MD5(username).toString();

      var pos = [r, c],
          squareSize = 60,
          vpix = pos[0] * squareSize,
          hpix = pos[1] * squareSize,
          man = {vpix: vpix, hpix: hpix, hash: hash};
      $('.board').prepend(this.template(man));
    }
  });
}());

