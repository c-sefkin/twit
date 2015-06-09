Dobby.UserfeedController = Ember.ArrayController.extend({
  isTweeting: false,
  actions: {
    showFullForm: function() {
      this.set('isTweeting', true);
    },
    hideFullForm: function() {
      this.set('isTweeting', false);
    },
  }
});
