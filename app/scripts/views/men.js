
app.MenView = Backbone.View.extend({

  className: 'men',

  template: Handlebars.templates.men,

  initialize: function () {
    this.render();
    $('.board').prepend(this.el);
  },

  render: function () {

    this.$el.append(this.template);

  },

});

