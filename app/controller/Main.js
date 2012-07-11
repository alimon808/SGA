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
       this.getConnectpage().push({
          xtype: 'panel',
          title: record.get('name'),
          html: 'Insert bio info here and other functionalities',
          styleHtmlContenct: true
       });
   }
});