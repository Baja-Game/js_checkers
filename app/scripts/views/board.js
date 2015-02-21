
app.BoardView = Backbone.View.extend({

  className: 'board-background',

  initialize: function () {
    $('.board').append(this.el);
    this.render();
  },

  render: function () {
    for (var i = 0; i < 8; i++) {
      var row = this.el.appendChild(document.createElement('div'));
      for (var j = 0; j < 8; j++) {
        row.appendChild(document.createElement('span'));
      }
    }
  }

});

