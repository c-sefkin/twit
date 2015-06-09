Dobby.UserfeedController = Ember.Controller.extend({
  isTweeting: false;
  actions: {
    showFullForm: function() {
      this.set('isTweeting', true);
    },
    hideFullForm: function() {
      this.set('isTweeting', false);
    },
  }
});
