Dobby.PostsRoute = Ember.Route.extend({
  controllerName: '',
  renderTemplate: function(){
    this.render('');
  },
  model: function() {
    return tweets;
  }
});
