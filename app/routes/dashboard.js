import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    include: {
      refreshModel: true
  },
  name: {},
  order: {}
},

  // model(params) {
  //     coworkers: this.store.query('coworker', params);
  // },

actions: {
  reload() {
    this.transitionTo('dashboard');
    this.refresh();
    }
  }
});
