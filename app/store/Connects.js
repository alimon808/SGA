Ext.define('SGA.store.Connects', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Connect',
       sorters: 'name',
       //getGroupString: function(record){
       //    return record.get('group');
       //},
        grouper: {
            groupFn: function(item){
                return item.get('group');
            }
        },
       data: [
           {name: 'Donn Baca',title:' Grad, Law, & Adult Students', email:'donnbaca@yahoo.com',group:'Liaison'},
           {name: 'John Francis',title:'Mission and Values', email:'johnrusselfrancis@gmail.com',group:'Liaison'},
           {name: 'Edward Kim',title:'Intercultural Students', email:'edkim247@gmail.com',group:'Liaison'},
           {name: 'Cassie Goodpaster',title:'Community and Government Relations', email:'cgoodpa2@mail.depaul.edu',group:'Liaison'},
           {name: 'Connor Lillis',title:'Second Year Students', email:'connor.lillis@gmail.com',group:'Liaison'},
           {name: 'Matthew Martin',title:'Third Year Students', email:'mmart905@gmail.com',group:'Liaison'},
           {name: 'Joseph Kosin',title:'Fourth and Fifth Year Students', email:'joekosin123@yahoo.com',group:'Liaison'},
           {name: 'Jonathan Eiseman',title:'Sustainability', email:'',group:'Liaison'},
           {name: 'Gregory Zanotti',title:'College of Commerce', email:'GREG.ZANOTTI@GMAIL.COM',group:'Senators'},
           {name: 'Veronica Guidi-Louviere',college:'College of Commerce', email:'vguidilou@gmail.com',group:'Senators'},
           {name: 'Kevin Newhouse',title:'College of Computing and Digital Media', email:'knewhous@mail.depaul.edu',group:'Senators'},
           {name: 'Joe Cunninghame',title:'College of Communication', email:'cunningham_joe@sbcglobal.net',group:'Senators'},
           {name: 'Malloree Winston',title:'College of Science and Health', email:'strawberry6611@aim.com',group:'Senators'},
           {name: 'Allen Brandon',title:'College of Music', email:'blallen22@gmail.com',group:'Senators'},
           {name: 'Chelsea Robinson',title:'College of Education', email:'CROBIN48@DEPAUL.EDU',group:'Senators'}
       ]
   }
});