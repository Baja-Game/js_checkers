(function () {
  'use strict';

  app.BoardView = Backbone.View.extend({

    className: 'board-background',

    events: {
      'click span': 'clicked'  // Listen for clicks on open board squares.
    },

    initialize: function (game) {
      this.game = game;
      $('.board').append(this.el);
      this.render();
    },

    render: function () {
      var isOdd = utils.isOdd;
      for (var row = 0; row < 8; row++) {
        var rowDiv = this.el.appendChild(document.createElement('div'));
        rowDiv.className = 'board-row';
        for (var col = 0; col < 8; col++) {
          var cellSpan = rowDiv.appendChild(document.createElement('span'));
          cellSpan.className = 'board-cell';
          if (isOdd(row) && !isOdd(col) || !isOdd(row) && isOdd(col)) {
            cellSpan.id = 's' + String(row) + String(col);
          }
        }
      }
    },

    clicked: function (e) {
      // Step 1 of move is to select the man to move.  The men.view listen
      // function listens for this initial selection.
      try {
        this.startID = $('.men').filter('.active')[0].id;
      }
      catch (event) {}

      // Step 2 is to select the open board square to move to.
      // This is only allowed if Step 1 is complete and the move is valid.
      if (this.startID) {
        var endEl = $(e.target);
        this.endID = endEl[0].id;

        // Send start and end location through validators.
        var isValidSlide = this.slideValidator(1),
            isValidShuffle = this.slideValidator(2),
            isValidHop = this.hopValidator(this.slideValidator(2));

        // console.log('\n isValidSlide: ', Boolean(isValidSlide));
        // console.log('isValidHop:   ', Boolean(isValidHop));

        if (isValidSlide || isValidHop) {

          // Highlight the destination square.
          $('span.board-cell').removeClass('active');
          endEl.addClass('active');

          // Animate the move.
          var squareSize = 60,
              endY = this.endID.slice(1, 2) * squareSize + 'px',
              endX = this.endID.slice(2, 3) * squareSize + 'px';

          $('#' + this.startID)
            .css({top: endY, left: endX, background: 'none'})
            // Change the id of the man to reflect its new location.
            .attr('id', this.endID.slice(1, 3));

          // TODO: Eliminate the opponents man if a hop.

          // TODO: Allow only one move per turn, except for subsequent hops.
          //       Send to a new view?

        }
      }
    },

    // Return x,y coordinates of the start and end locations.
    coords: function () {
      return {y1: Number(this.startID[0]), y2: Number(this.endID.slice(1, 2)),
              x1: Number(this.startID[1]), x2: Number(this.endID.slice(2, 3))};
    },

    // Return coords if valid n-step diagonal slide move.  False otherwise.
    slideValidator: function (n) {
      var c = this.coords(),
          isKing = this.cellContents(c.y1, c.x1).toLowerCase() === 'k',

          isValidPlayer1Y = (c.y2 - c.y1) === n,
          isValidPlayer2Y = (c.y1 - c.y2) === n,
          isValidKingY = Math.abs(c.y1 - c.y2) === n,
          isValidX = Math.abs(c.x1 - c.x2) === n,

          validPlayer1Move =  this.player1isMe() && isValidPlayer1Y && isValidX,
          validPlayer2Move = !this.player1isMe() && isValidPlayer2Y && isValidX,
          validKingMove = isKing && isValidKingY && isValidX;

      return (validPlayer1Move || validPlayer2Move || validKingMove) && c;
    },

    // Return true if valid hop over an opponent.  False otherwise.
    hopValidator: function (c) {

      var validPlayer1Jump, validPlayer2Jump;

      if (c) {
        var y = (c.y1 + c.y2) / 2,
            x = (c.x1 + c.x2) / 2,
            contents = this.cellContents(y, x),
            emptyCell = (contents === ' ') || (contents === ''),
            jumppingPlayer1 = this.isPlayer1Man(contents);

        validPlayer1Jump = !emptyCell &&  this.player1isMe() && !jumppingPlayer1;
        validPlayer2Jump = !emptyCell && !this.player1isMe() &&  jumppingPlayer1;
      }
      return validPlayer1Jump || validPlayer2Jump;
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

