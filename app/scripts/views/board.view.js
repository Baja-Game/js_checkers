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
            cellSpan.id = String(row) + String(col);
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
        // Send start and end location to a validator and process the move.
        var isValidSlide = this.slideValidator(1),
            // isValidShuffle = this.slideValidator(2),
            isValidHop = this.hopValidator(this.slideValidator(2));

        console.log('\n isValidSlide: ', Boolean(isValidSlide));
        console.log('isValidHop:   ', Boolean(isValidHop));

        if (isValidSlide || isValidHop) {
          // Good to go.


          // Adding the background color may not be needed?
          $('span.board-cell').removeClass('active');
          endEl.addClass('active');

        }
      }
    },

    // Return x,y coordinates of the start and end locations.
    coords: function () {
      return {y1: Number(this.startID[0]), y2: Number(this.endID[0]),
              x1: Number(this.startID[1]), x2: Number(this.endID[1])};
    },

    // Return coords if valid n-step diagonal slide move.  Falsey otherwise.
    slideValidator: function (n) {
      var c = this.coords(),

          isValidPlayer1Y = (c.y2 - c.y1) === n,
          isValidPlayer2Y = (c.y1 - c.y2) === n,
          isValidKingY = Math.abs(c.y1 - c.y2) === n,
          isValidX = Math.abs(c.x1 - c.x2) === n,

          board = this.game.attributes.game.board,
          cellContents = board[c.y1][c.x1],

          player1isMe = this.attributes.me === 'player1',
          player2isMe = this.attributes.me === 'player2',

          isKing = cellContents.toLowerCase() === 'k',

          validPlayer1Move = player1isMe && isValidPlayer1Y && isValidX,
          validPlayer2Move = player2isMe && isValidPlayer2Y && isValidX,
          validKingMove = isKing && isValidKingY && isValidX;

      if (validPlayer1Move || validPlayer2Move || validKingMove) {
        return c;
      }
    },

    // Return true if valid hop over an opponent.  Falsey otherwise.
    hopValidator: function (c) {
      if (c) {
        var board = this.game.attributes.game.board,
            y = (c.y1 + c.y2) / 2,
            x = (c.x1 + c.x2) / 2,
            cellContents = board[y][x],
            emptyCell = (cellContents === ' ') || (cellContents === ''),
            player1isMe = this.attributes.me === 'player1',
            player2isMe = this.attributes.me === 'player2',
            jumppingPlayer1 = cellContents === cellContents.toUpperCase(),
            jumppingPlayer2 = cellContents === cellContents.toLowerCase(),
            validPlayer1Jump = !emptyCell && player1isMe && jumppingPlayer2,
            validPlayer2Jump = !emptyCell && player2isMe && jumppingPlayer1;

        // console.log('Cell hopped: ', y, x);
        // console.log('Cell contents: ', cellContents);
        // console.log('me: ', this.attributes.me);

        return validPlayer1Jump || validPlayer2Jump;

      }
    }

  });

}());

