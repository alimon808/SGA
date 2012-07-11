Ext.define('SGA.store.PastEvents', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Event',
       sorters: 'date',
        grouper: {
            groupFn: function(item){
                return item.get('quarter');
            }
        },
       data: [
           {name: 'SGA General Body Meeting',
               quarter: 'Winter 2012',
               date:'January 6, 2012', 
               time:'6pm-8pm',
               location:'Office of Student Involvement Conference Room, Lincoln Park.',
               description:'Catch up on all the things SGA is upto this quarter.'
           },
           {name: 'SGA General Body Meeting',
               quarter: 'Winter 2012',
               date:'February 9, 2012',
               time:'12pm-1pm',
               location:'Lincoln Park Quad',
               description:'Meet SGA and all the other great student organizations on campus.'
           },
           {name: 'SGA General Body Meeting',
               quarter: 'Spring 2012',
               date:'March 12, 2012',
               time:'12pm-1pm',
               location:'Lewis Center',
               description:'Meet SGA and all the other great student organizations on campus.'
           },
           {name: 'SGA General Body Meeting',
               quarter: 'Spring 2012',
               date:'April 24, 2012',
               time:'11am-4pm',
               location:'Lincoln Park Student Center Atrium',
               description:'Come connect with SGA.'
           }
       ]//data
   }//config
});