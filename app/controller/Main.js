Ext.define('SGA.controller.Main', {
   extend: 'Ext.app.Controller',
   config: {
       refs: {
           connectpage: 'connectpage'
       },
       control: {
           'connectpage list': {
               itemtap: 'showConnection'
           }
       }
   },
   showConnection: function(list,index,element, record){
       console.log(this);
       //console.log(record.get('name'));
       //Ext.Msg.alert('Show info for ' + record.get('name'));
       this.getConnectpage().push({
          xtype: 'panel',
          title: record.get('name'),
          //html: 'Show info for ' + record.get('name'),
          styleHtmlContenct: true
       });
   }
});