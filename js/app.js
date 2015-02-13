window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  this.resource('authors', function(){
    this.route('show', {path: '/:author_id'});
  this.resource('books');
  this.resource('reviews');
  })
});
