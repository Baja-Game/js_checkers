(function () {
  'use strict';

  app.BoardView = Backbone.View.extend({

    className: 'board-background',

    events: {
      'click span': 'clicked'  // Listen for clicks on open board squares.
    },

    initialize: function () {
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
        this.startLoc = $('.men').filter('.active')[0].id;
      }
      catch (event) {}

      // Step 2 is to select the open board square to move to.
      // This is only allowed if Step 1 is complete.
      if (this.startLoc) {
        var endEl = $(e.target);
        this.endLoc = endEl[0].id;
        // Send start and end location to a validator and process the move.

        console.log(this.isvalidSlide(1));
        this.isvalidHopTwo();

        console.log(this);

        // Adding the background color may not be needed?
        $('span.board-cell').removeClass('active');
        endEl.addClass('active');
      }
    },

    // Break out the x,y coordinates of the start and end locations.
    coords: function () {
      return {x1: Number(this.startLoc[0]), y1: Number(this.startLoc[1]),
              x2: Number(this.endLoc[0]),   y2: Number(this.endLoc[1])};
    },

    // Check for a valid one-position diagonal slide move.
    isvalidSlide: function (n) {
      var c = this.coords(),
          isValidX = Math.abs(c.x1 - c.x2) === n,
          isValidY = Math.abs(c.y1 - c.y2) === n;
      return (isValidX && isValidY) ? true : false;
    },

    // Check for a valid two-position diagonal hop move.
    isvalidHopTwo: function () {
      // Check for valid 2 posn move.
      if (isvalidSlide(2)) {};
      // Check if opponent in the middle spot.

    }

  });

}());

