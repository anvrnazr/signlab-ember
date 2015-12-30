import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  shouldReloadRecord(store, snapshot) {
    return false;
  },
  plurals: {
      enquiry: 'enquiries'
    },
    headers: {
            'X-AUTHENTICATION-TOKEN': 'sFi7MJ5E-TwYg1FhjTT5'
          }



});

//
// export default DS.JSONAPIAdapter.extend({
//   host: 'http://localhost:3001',
// });


// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend();
