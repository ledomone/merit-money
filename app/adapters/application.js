import Ember from 'ember';
import DS from 'ember-data';
// import FirebaseAdapter from 'emberfire/adapters/firebase';
//
// const { inject } = Ember;
//
// export default FirebaseAdapter.extend({
//   firebase: inject.service(),
// });

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1',
  host: 'https://coder-dojo-merit-money-api.herokuapp.com'
});
