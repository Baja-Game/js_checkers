
(function () {
  'use strict';

  app.MenView = Backbone.View.extend({

    template: Handlebars.templates.men,

    initialize: function (model) {
      this.model = model;
      // console.dir('Passed model:', model);
      this.render();
    },

    render: function () {
      var pos = [3, 2],
          vpix = pos[0] * 60,
          hpix = pos[1] * 60,
          loc = {vpix: vpix, hpix: hpix};

      // console.log(app.games);

      $('.board').prepend(this.template(loc));
    },



  });

}());

