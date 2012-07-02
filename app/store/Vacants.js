Ext.define('SGA.store.Vacants', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Vacant',
       data: [
           {position: 'Senator',title:'College of Liberal Arts'},
           {position: 'Senator',title:'College of Computing and Digital Media'},
           {position: 'Senator',title:'College of Computing and Digital Media'},
           {position: 'Senator',title:'School for New Learning'},
           {position: 'Senator',title:'Theatre School'},
           {position: 'Liaison',title:'Honors Students'},
           {position: 'Liaison',title:'Transfer Students'},
           {position: 'Liaison',title:'Commuter Students'},
           {position: 'Liaison',title:'Office of Student with Disabilities'},
           {position: 'Liaison',title:'First Year Students'}
       ]
   }
});