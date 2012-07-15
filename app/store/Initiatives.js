Ext.define('SGA.store.Initiatives', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Initiative',
       sorters: 'name',
        grouper: {
            groupFn: function(item){
                return item.get('name');
            }
        },
       data: [
           {
               name: 'Transparency',
               description: 'Work to enhance methods by which the student voice can be effectively incorporated into critical university administrative decisions, particularly Budget and Tuitioin Pricing Processes.  We are committed to advocating on behalf of students.'
           },
           {
               name: 'Educational Accessibility',
               description: 'Description...'
           },
           {
               name: 'SGA as an Advocate',
               description: 'Description...'
           },
           {
               name: 'Civic Engagement',
               description: 'Description here...'
           }
       ]//data
   }//config
});