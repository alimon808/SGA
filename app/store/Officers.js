Ext.define('SGA.store.Officers', {
   extend: 'Ext.data.Store',
   config: {
       model:'SGA.model.Officer',
       data: [
           {name: "Caroline Winsett",position:"President",college:"",email:"cwinsett@depaul.edu"},
           {name: "Casey Clemmons",position:"Vice President",college:"",email:"cclemmon@depaul.edu"},
           {name: "Brandon Davis",position:"Treasurer",college:"",email:"bdavis36@depaul.edu"},
           {name: "Sarah Rens",position:"EVP Academic Affairs",college:"",email:"sarahrens92@gmail.com"},
           {name: "Lauren Maitland",position:"EVP Student Affairs",college:"",email:"lmaitland@depaul.edu"},
           {name: "Matthew C Von Nida",position:"EVP Operations",college:"",email:"mvonnida@mail.depaul.edu"},
           {name: "William Baker",position:"Executive Assistant",college:"",email:"williambakeriii@me.com"},
           {name: "Sophie Lammers",position:"Public Relations Coordinator",college:"",email:"sophia.a.lammers@gmail.com"},
           {name: "Danielle Prebeck",position:"Technology Coordinator",college:"",email:"dani.prebeck@gmail.com"},
           {name: "Emily Duddleston",position:"Parliamentarian",college:"",email:"eduddles@depaul.edu"}
       ]
   }
});