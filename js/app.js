window.App = Ember.Application.create();
App.ApplicationAdapter = DS.FixtureAdapter;

App.Router.map(function() {
  
  this.resource('books', {path: '/books'});
  this.resource('authors', function(){
    this.route('show', {path: '/:author_id'});
  this.resource('reviews');
  })
});
