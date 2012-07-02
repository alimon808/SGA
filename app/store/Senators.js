Ext.define('SGA.store.Senators', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Senator',
       data: [
           {name: 'Gregory Zanotti',college:'College of Commerce', email:'GREG.ZANOTTI@GMAIL.COM'},
           {name: 'Veronica Guidi-Louviere',college:'College of Commerce', email:'vguidilou@gmail.com'},
           {name: 'Kevin Newhouse',college:'College of Computing and Digital Media', email:'knewhous@mail.depaul.edu'},
           {name: 'Joe Cunninghame',college:'College of Communication', email:'cunningham_joe@sbcglobal.net'},
           {name: 'Malloree Winston',college:'College of Science and Health', email:'strawberry6611@aim.com'},
           {name: 'Allen Brandon',college:'College of Music', email:'blallen22@gmail.com'},
           {name: 'Chelsea Robinson',college:'College of Education', email:'CROBIN48@DEPAUL.EDU'}
       ]
   }
});