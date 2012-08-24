Ext.define('SGA.store.Connects', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Connect',
       //sorters: 'name',
       //getGroupString: function(record){
       //    return record.get('group');
       //},
        grouper: {
            sortProperty: 'groupIndex',
            groupFn: function(item){
                return item.get('group');
            }
        },
       data: [
           //{name: "",title:"",email:"",group:"",groupIndex:'0'},
           
           //Academic Affairs Committee
           {name: "Brandon Allen",title:"Senator of the School of Music",email:"",group:"Academic Affairs Committee",groupIndex:'0'},
           {name: "Casey Clemmons",title:"Vice President",email:"cclemmon@depaul.edu",group:"Academic Affairs Committee",groupIndex:'0'},
           {name: "Don Baca",title:"Senator of the Grad, Law & Adult",email:"donnbaca@yahoo.com",group:"Academic Affairs Committee",groupIndex:'0'},
           {name: "Greg Zanotti",title:"Senator of the College of Business",email:"gregzanotti1@gmail.com",group:"Academic Affairs Committee",groupIndex:'0'},
           {name: "Joe Cunningham",title:"Senator of Communication",email:"cunningham_joe@sbcglobal.net",group:"Academic Affairs Committee",groupIndex:'0'},
           //add the rest here
           
           //Administrators
           {name: "Caroline Winsett",title:"President",email:"cwinsett@depaul.edu",group:"Administrators",groupIndex:'1'},
           {name: "Casey Clemmons",title:"Vice President",email:"cclemmon@depaul.edu",group:"Administrators",groupIndex:'1'},
           {name: "Sophia Lammers",title:"Public Relations Coordinator",email:"sophia.a.lammers@gmail.com",group:"Administrators",groupIndex:'1'},
           {name: "Tyneka Harris",title:"",email:"tharris6@depaul.edu",group:"Administrators",groupIndex:'1'},
           //add more administors
           
           //Officers
           {name: "Brandon Allen",title:"Senator of the School of Music",email:"",group:"Officers",groupIndex:'2'},
           {name: "Brandon Davis",title:"Treasurer",email:"bdavis36@depaul.edu",group:"Officers",groupIndex:'2'},
           {name: "Danielle Prebeck",title:"Technology Coordinator",email:"dani.prebeck@gmail.com",group:"Officers",groupIndex:'2'},
           {name: 'Donn Baca',title:'Senator of the Grad, Law & Adult Students', email:'donnbaca@yahoo.com',group:'Officers',groupIndex:"2"},
           {name: "Edward Kim",title:"Senator of Intercultural Awareness",email:"edkim247@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "Emily Duddleston",title:"Parliamentarian",email:"emilydud@msn.com",group:"Officers",groupIndex:'2'},
           {name: "Greg Zanotti",title:"Senator of the College of Business",email:"gregzanotti1@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "Joe Cunningham",title:"Senator of Communication",email:"cunningham_joe@sbcglobal.net",group:"Officers",groupIndex:'2'},
           {name: "Jonathan Eiseman",title:"Senator of Sustainability",email:"jonathan.eiseman@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "Joseph Kosin",title:"Senator of 4th & 5th Year Students",email:"joekosin123@yahoo.com",group:"Officers",groupIndex:'2'},
           {name: "Kevin Newhouse",title:"Senator of College of Computing & Digital Media",email:"knewhouse627@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "Malloree Winston",title:"Senator of the College of Science & Health",email:"mhwinston@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "Sarah Rens",title:"EVP Academic Affairs",email:"sarahrens92@gmail.com",group:"Officers",groupIndex:'2'},
           {name: "William Baker",title:"",email:"williambakeriii@me.com",group:"Officers",groupIndex:'2'},
           
           //Operations Committee
           {name: "Jonathan Eiseman",title:"Senator of Sustainability",email:"jonathan.eiseman@gmail.com",group:"Operations Committee",groupIndex:'3'},
           {name: "Joseph Kosin",title:"Senator of 4th & 5th Year Students",email:"joekosin123@yahoo.com",group:"Operations Committee",groupIndex:'3'},
           
           //Student Officers Committee
           {name: "Edward Kim",title:"Senator of Intercultural Awareness",email:"edkim247@gmail.com",group:"Student Affairs Committee",groupIndex:'4'},
           {name: "Lauren Maitland",title:"",email:"lmaitlan@depaul.edu",group:"Student Affairs Committee",groupIndex:'4'},
           
       ]
   }
});

/*
 * 
 * {name: "Casey Clemmons",title:"Vice President",email:"cclemmon@depaul.edu",group:"Officer",groupIndex:'0'},
           {name: "Brandon Davis",title:"Treasurer",email:"bdavis36@depaul.edu",group:"Officer",groupIndex:'0'},
           {name: "Sarah Rens",title:"EVP Academic Affairs",email:"sarahrens92@gmail.com",group:"Officer",groupIndex:'0'},
           {name: "Lauren Maitland",title:"EVP Student Affairs",email:"lmaitland@depaul.edu",group:"Officer",groupIndex:'0'},
           {name: "Matthew C Von Nida",title:"EVP Operations",email:"mvonnida@mail.depaul.edu",group:"Officer",groupIndex:'0'},
           {name: "William Baker",title:"Executive Assistant",email:"williambakeriii@me.com",group:"Officer",groupIndex:'0'},
           {name: "Sophie Lammers",title:"Public Relations Coordinator",email:"sophia.a.lammers@gmail.com",group:"Officer",groupIndex:'0'},
           {name: "Danielle Prebeck",title:"Technology Coordinator",email:"dani.prebeck@gmail.com",group:"Officer",groupIndex:'0'},
           {name: "Emily Duddleston",title:"Parliamentarian",email:"eduddles@depaul.edu",group:"Officer",groupIndex:"0"},
           
           
           
           //Liaisons
           {name: 'Donn Baca',title:'Grad, Law, & Adult Students', email:'donnbaca@yahoo.com',group:'Liaison',groupIndex:"2"},
           {name: 'John Francis',title:'Mission and Values', email:'johnrusselfrancis@gmail.com',group:'Liaison',groupIndex:"2"},
           {name: 'Edward Kim',title:'Intercultural Students', email:'edkim247@gmail.com',group:'Liaison',groupIndex:"2"},
           {name: 'Cassie Goodpaster',title:'Community and Government Relations', email:'cgoodpa2@mail.depaul.edu',group:'Liaison',groupIndex:"2"},
           {name: 'Connor Lillis',title:'Second Year Students', email:'connor.lillis@gmail.com',group:'Liaison',groupIndex:"2"},
           {name: 'Matthew Martin',title:'Third Year Students', email:'mmart905@gmail.com',group:'Liaison',groupIndex:"2"},
           {name: 'Joseph Kosin',title:'Fourth and Fifth Year Students', email:'joekosin123@yahoo.com',group:'Liaison',groupIndex:"2"},
           {name: 'Jonathan Eiseman',title:'Sustainability', email:'',group:'Liaison',groupIndex:"2"},
           //Senators
           {name: 'Gregory Zanotti',title:'College of Commerce', email:'GREG.ZANOTTI@GMAIL.COM',group:'Senators',groupIndex:"1"},
           {name: 'Veronica Guidi-Louviere',college:'College of Commerce', email:'vguidilou@gmail.com',group:'Senators',groupIndex:"1"},
           {name: 'Kevin Newhouse',title:'College of Computing and Digital Media', email:'knewhous@mail.depaul.edu',group:'Senators',groupIndex:"1"},
           {name: 'Joe Cunninghame',title:'College of Communication', email:'cunningham_joe@sbcglobal.net',group:'Senators',groupIndex:"1"},
           {name: 'Malloree Winston',title:'College of Science and Health', email:'strawberry6611@aim.com',group:'Senators',groupIndex:"1"},
           {name: 'Allen Brandon',title:'College of Music', email:'blallen22@gmail.com',group:'Senators',groupIndex:"1"},
           {name: 'Chelsea Robinson',title:'College of Education', email:'CROBIN48@DEPAUL.EDU',group:'Senators',groupIndex:"1"}
 */