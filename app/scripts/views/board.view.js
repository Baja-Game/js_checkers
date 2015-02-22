(function () {
  'use strict';

  app.BoardView = Backbone.View.extend({

    className: 'board-background',

    events: {
      'click span': 'clicked'
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
      var startLoc;
      try {
        startLoc = $('.men').filter('.active')[0].id;
      }
      catch (e) {}

      if (startLoc) {
        var endLoc = $(e.target);
        // Send start and end location to a validator and process the move.

        // Adding the background color may not be needed?
        $('span.board-cell').removeClass('active');
        endLoc.addClass('active');
      }
    }

  });

}());

