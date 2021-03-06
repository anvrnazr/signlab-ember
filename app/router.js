import Ember from 'ember';

import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});



Router.map(function() {

  //  this.route('home');


  this.route('dashboard' ,function(){
    this.route('projects',function(){
      this.route('home');
      this.route('project', { path: ':id' }, function() {
        this.route('home');
        this.route('enquiry-form');
        this.route('quotation-form');
        this.route('customer');
        this.route('agent');
        this.route('job');
        this.route('design');
      });
      this.route('new');
    });

    this.route('customers', function() {
      this.route('customer', {path: ':id'});
      this.route('new');
    });


    this.route('agents', function() {
      this.route('agent', {path: ':id'});
      this.route('new');
    });
  });
  this.route('login', {path: '/'});
});

export default Router;




// THIS IS A PLACE FOR LOGGING TODOS

//DONE: ADD FAVICON

//DONE: PROJECT STATUS ON HOME page

//DOING: PRINT CSS

//DONE: RESTRICT PAGE BY USER ROLE

//DONE: CHANGE PRELOADER


// PROJECT DEADLINE 
// ENQUIRED QUOTED STARTED FINSHED DELAYED PAUSED CANCELLED
