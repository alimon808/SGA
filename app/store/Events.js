Ext.define('SGA.store.Events', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Event',
       data: [
           {name: 'SGA General Body Meeting',date:'Sep 6, 2012', time:'6pm-8pm',location:'Office of Student Involvement Conference Room, Lincoln Park.',description:'Catch up on all the things SGA is upto this quarter.'},
           {name: 'Lincoln Park Involvement Fair',date:'Sep 9, 2012', time:'12pm-1pm',location:'Lincoln Park Quad',description:'Meet SGA and all the other great student organizations on campus.'},
           {name: 'Loop Involvement Fair',date:'Sep 12, 2012', time:'12pm-1pm',location:'Lewis Center',description:'Meet SGA and all the other great student organizations on campus.'},
           {name: 'Mix n Mingle with SGA',date:'Sep 24, 2012', time:'11am-4pm',location:'Lincoln Park Student Center Atrium',description:'Come connect with SGA.'},
           {name: 'SGA Student Leader Roundtable',date:'Oct 19, 2012', time:'11am-1pm',location:'Cortelyou Commons',description:'Share your needs with SGA and connect with other student leaders.'},
           {name: 'SGA Gets Out the Vote!',date:'Nov 6, 2012', time:'11am-4pm',location:'Lincoln Park Student Center Media Table',description:'Participate in shaping your future with SGA.'},
           {name: 'Mix n Mingle with SGA',date:'Feb 18, 2013', time:'11am-4pm',location:'Lincoln Park Student Center Atrium',description:'Come connect with SGA.'},
           {name: 'Mix n Mingle with SGA',date:'Apr 8, 2013', time:'11am-4pm',location:'Lincoln Park Student Center Atrium',description:'Come connect with SGA.'}
       ]
   }
});