App.ReviewsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('review');
  }
});
