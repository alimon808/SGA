Ext.define('SGA.store.Liaisons', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Liaison',
       data: [
           {name: 'Donn Baca',college:'Liaison - Grad, Law, & Adult Students', email:'donnbaca@yahoo.com'},
           {name: 'John Francis',college:'Liaison - Mission and Values', email:'johnrusselfrancis@gmail.com'},
           {name: 'Edward Kim',college:'Liaison - Intercultural Students', email:'edkim247@gmail.com'},
           {name: 'Cassie Goodpaster',college:'Community and Government Relations', email:'cgoodpa2@mail.depaul.edu'},
           {name: 'Connor Lillis',college:'Liaison - Second Year Students', email:'connor.lillis@gmail.com'},
           {name: 'Matthew Martin',college:'Liaison - Third Year Students', email:'mmart905@gmail.com'},
           {name: 'Joseph Kosin',college:'Liaison - Fourth and Fifth Year Students', email:'joekosin123@yahoo.com'},
           {name: 'Jonathan Eiseman',college:'Liaison - Sustainability', email:''}
       ]
   }
});