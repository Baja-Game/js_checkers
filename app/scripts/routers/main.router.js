(function(){

  'use strict';

  app.MainRouter = Backbone.Router.extend({


    initialize: function(){
      this.on('route', this.checkRoute, this);
    },

    routes: {

      '*path':  'defaultRoute'

    },

    defaultRoute: function () {
      this.navigate('', {trigger: true});
      console.log('Default');
},

  });

}());
