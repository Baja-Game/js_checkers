
(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    className: 'men',

    // attributes: {},

    attributes: {'style': 'top: ' + 120 + 'px; left: '+ 120 + 'px;'},

    template: Handlebars.templates.men,

    initialize: function () {
      var loc = this.locateMan(0, 1);
      this.attributes = {'style': 'top: ' + loc[0] + 'px; left: '+ loc[1] + 'px;'};
      console.log(this.attributes);

      this.render();
      $('.board').prepend(this.$el);
    },

    locateMan: function (row, col) {
      var squareSize = 60,
          manSize = 50,
          manOffset = (squareSize - manSize) / 2,
          vpix = row * squareSize + manOffset,
          hpix = col * squareSize + manOffset;
      return [vpix, hpix]
    },

    render: function () {
      this.$el.append(this.template);
    },



  });

}());

