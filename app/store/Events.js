Ext.define('SGA.store.Events', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Event',
       sorters: {property: 'date',direction:'DESC'},
        grouper: {
            groupFn: function(item){
                return item.get('quarter');
            }
        },
       data: [
           {name: 'SGA General Body Meeting',
               quarter: 'Fall 2012',
               date:'Septemper 6, 2012', 
               time:'6pm-8pm',
               location:'Office of Student Involvement Conference Room, Lincoln Park',
               description:'Catch up on all the things SGA is up to this quarter.'
           },
           {name: 'Lincoln Park Involvement Fair',
               quarter: 'Fall 2012',
               date:'September 9, 2012',
               time:'12pm-1pm',
               location:'Lincoln Park Quad',
               description:'Meet SGA and all the other great student organizations on campus.'
           },
           {name: 'Loop Involvement Fair',
               quarter: 'Fall 2012',
               date:'Sep 12, 2012',
               time:'12pm-1pm',
               location:'Lewis Center',
               description:'Meet SGA and all the other great student organizations on campus.'
           },
           {name: 'Mix \'n\' Mingle with SGA',
               quarter: 'Fall 2012',
               date:'Sep 24, 2012',
               time:'11am-4pm',
               location:'Lincoln Park Student Center Atrium',
               description:'Come connect with SGA.'
           },
           {name: 'SGA Student Leader Roundtable',
               quarter: 'Fall 2012',
               date:'Oct 19, 2012',
               time:'11am-1pm',
               location:'Cortelyou Commons',
               description:'Share your needs with SGA and connect with other student leaders.'
           },
           {name: 'SGA Gets Out the Vote!',
               quarter: 'Fall 2012',
               date:'Nov 6, 2012',
               time:'11am-4pm',
               location:'Lincoln Park Student Center Media Table',
               description:'Participate in shaping your future with SGA.'
           },
           {name: 'Mix \'n\' Mingle with SGA',
               quarter: 'Winter 2013',
               date:'Feb 18, 2013',
               time:'11am-4pm',
               location:'Lincoln Park Student Center Atrium',
               description:'Come connect with SGA.'
           },
           {name: 'Mix \'n\' Mingle with SGA',
               quarter: 'Spring 2013',
               date:'Apr 8, 2013', 
               time:'11am-4pm',
               location:'Lincoln Park Student Center Atrium',
               description:'Come connect with SGA.'
           }
       ]//data
   }//config
});