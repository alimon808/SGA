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
           {name: "Brandon Allen",title:"Senator of the School of Music",email:"",group:"Academic Affairs Committee",groupIndex:'1',pic: 'officers/allen.png'},
           {name: "Casey Clemmons",title:"Vice President",email:"cclemmon@depaul.edu",group:"Academic Affairs Committee",groupIndex:'1',pic: 'cclemmons_40.jpg'},
           {name: "Don Baca",title:"Senator of the Grad, Law & Adult",email:"donnbaca@yahoo.com",group:"Academic Affairs Committee",groupIndex:'1',pic: 'profile_blank_40.gif'},
           {name: "Greg Zanotti",title:"Senator of the College of Business",email:"gregzanotti1@gmail.com",group:"Academic Affairs Committee",groupIndex:'1',pic: 'profile_blank_40.gif'},
           {name: "Joe Cunningham",title:"Senator of Communication",email:"cunningham_joe@sbcglobal.net",group:"Academic Affairs Committee",groupIndex:'1',pic: 'officers/cunningham.png'},
           //add the rest here
           
           //Administrators
           {name: "Caroline Winsett",title:"President",email:"cwinsett@depaul.edu",group:"Administrators",groupIndex:'0',pic: 'officers/winsett.png'},
           {name: "Casey Clemmons",title:"Vice President",email:"cclemmon@depaul.edu",group:"Administrators",groupIndex:'0',pic: 'cclemmons_40.jpg'},
           {name: "Sophia Lammers",title:"Public Relations Coordinator",email:"sophia.a.lammers@gmail.com",group:"Administrators",groupIndex:'0',pic: 'officers/lammers.png'},
           {name: "Tyneka Harris",title:"",email:"tharris6@depaul.edu",group:"Administrators",groupIndex:'0',pic: 'officers/harris.png'},
           //add more administors
           
           //Officers
           {name: "Brandon Allen",title:"Senator of the School of Music",email:"",group:"Officers",groupIndex:'2',pic: 'officers/allen.png'},
           {name: "Brandon Davis",title:"Treasurer",email:"bdavis36@depaul.edu",group:"Officers",groupIndex:'2',pic: 'officers/davis.png'},
           {name: "Danielle Prebeck",title:"Technology Coordinator",email:"dani.prebeck@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/prebeck.png'},
           {name: 'Donn Baca',title:'Senator of the Grad, Law & Adult Students', email:'donnbaca@yahoo.com',group:'Officers',groupIndex:"2",pic: 'profile_blank_40.gif'},
           {name: "Edward Kim",title:"Senator of Intercultural Awareness",email:"edkim247@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/kim.png'},
           {name: "Emily Duddleston",title:"Parliamentarian",email:"emilydud@msn.com",group:"Officers",groupIndex:'2',pic: 'officers/duddleston.png'},
           {name: "Greg Zanotti",title:"Senator of the College of Business",email:"gregzanotti1@gmail.com",group:"Officers",groupIndex:'2',pic: 'profile_blank_40.gif'},
           {name: "Joe Cunningham",title:"Senator of Communication",email:"cunningham_joe@sbcglobal.net",group:"Officers",groupIndex:'2',pic: 'officers/cunningham.png'},
           {name: "Jonathan Eiseman",title:"Senator of Sustainability",email:"jonathan.eiseman@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/eiseman.png'},
           {name: "Joseph Kosin",title:"Senator of 4th & 5th Year Students",email:"joekosin123@yahoo.com",group:"Officers",groupIndex:'2',pic: 'officers/kosin.png'},
           {name: "Kevin Newhouse",title:"Senator of College of Computing & Digital Media",email:"knewhouse627@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/newhouse.png'},
           {name: "Malloree Winston",title:"Senator of the College of Science & Health",email:"mhwinston@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/winston.png'},
           {name: "Sarah Rens",title:"EVP Academic Affairs",email:"sarahrens92@gmail.com",group:"Officers",groupIndex:'2',pic: 'officers/rens.png'},
           {name: "William Baker",title:"",email:"williambakeriii@me.com",group:"Officers",groupIndex:'2',pic: 'officers/baker.png'},
           
           //Operations Committee
           {name: "Jonathan Eiseman",title:"Senator of Sustainability",email:"jonathan.eiseman@gmail.com",group:"Operations Committee",groupIndex:'3',pic: 'officers/eiseman.png'},
           {name: "Joseph Kosin",title:"Senator of 4th & 5th Year Students",email:"joekosin123@yahoo.com",group:"Operations Committee",groupIndex:'3',pic: 'officers/kosin.png'},
           
           //Student Officers Committee
           {name: "Edward Kim",title:"Senator of Intercultural Awareness",email:"edkim247@gmail.com",group:"Student Affairs Committee",groupIndex:'4',pic: 'officers/kim.png'},
           {name: "Lauren Maitland",title:"",email:"lmaitlan@depaul.edu",group:"Student Affairs Committee",groupIndex:'4',pic: 'profile_blank_40.gif'},
           
       ]
   }
});
