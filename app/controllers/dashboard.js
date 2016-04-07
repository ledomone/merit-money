import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['name', 'order'],
  include: 'kudos',
  actions: {
    setParams() {
      let newInclude = this.get('includeCollection');
      this.set('include', newInclude);
      this.set('includeCollection', '');
    }
  }
});
