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
            isValidHop = this.slideValidator(2) && this.hopValidator();

        console.log(isValidSlide);
        console.log(isValidHop);

        if (isValidSlide || isValidHop) {
          // Good to go.


          // Adding the background color may not be needed?
          $('span.board-cell').removeClass('active');
          endEl.addClass('active');
                  }

        console.log(this);

      }
    },

    // Break out the x,y coordinates of the start and end locations.
    coords: function () {
      return {x1: Number(this.startID[0]), y1: Number(this.startID[1]),
              x2: Number(this.endID[0]),   y2: Number(this.endID[1])};
    },

    // Check for a valid one-position diagonal slide move.
    slideValidator: function (n) {
      var c = this.coords(),
          isValidX = Math.abs(c.x1 - c.x2) === n,
          isValidY = Math.abs(c.y1 - c.y2) === n;
      // This currently checks or move in any direction.
      // Need to tune up to only allow forward moved for 'men'.
      return (isValidX && isValidY) ? true : false;
    },

    hopValidator: function () {
      // Calculate the middle posn.
      // Check to see if opponent lives there.
      return true;
    }

  });

}());

