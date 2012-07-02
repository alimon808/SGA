Ext.define('SGA.store.Liaisons', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Liaison',
       data: [
           {name: 'Donn Baca',college:' Grad, Law, & Adult Students', email:'donnbaca@yahoo.com'},
           {name: 'John Francis',college:'Mission and Values', email:'johnrusselfrancis@gmail.com'},
           {name: 'Edward Kim',college:'Intercultural Students', email:'edkim247@gmail.com'},
           {name: 'Cassie Goodpaster',college:'Community and Government Relations', email:'cgoodpa2@mail.depaul.edu'},
           {name: 'Connor Lillis',college:'Second Year Students', email:'connor.lillis@gmail.com'},
           {name: 'Matthew Martin',college:'Third Year Students', email:'mmart905@gmail.com'},
           {name: 'Joseph Kosin',college:'Fourth and Fifth Year Students', email:'joekosin123@yahoo.com'},
           {name: 'Jonathan Eiseman',college:'Sustainability', email:''}
       ]
   }
});