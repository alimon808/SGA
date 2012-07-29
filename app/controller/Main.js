Ext.define('SGA.controller.Main', {
   extend: 'Ext.app.Controller',
   config: {
       refs: {
           connectpage: 'connectpage',
           home2: 'home2',
           eventlist: 'eventlist',
           btnRSVP: '#btnRSVP',
           rsvpForm: '#rsvpform'
       },
       control: {
           'connectpage list': {
               itemtap: 'showConnection'
           },
           'home2 list[id=homelist]': {
               itemtap: 'showHomeDetail'
           },
           'home2 button[text=Back]': {
               tap: 'backHome'
           },
           'eventlist list': {
               itemtap: 'showEvent'
           },
           btnRSVP: {
               tap: 'onRSVP'
           }
       }
   },
   showConnection: function(list,index,element, record){
       //console.log(this);
       this.getConnectpage().push({
          xtype: 'panel',
          title: record.get('name'),
          html: 'Insert bio info here and other functionalities',
          styleHtmlContent: true
       });
   },
   showHomeDetail: function(list,index,element,record) {
       if (index==0) {
          Ext.getCmp('home2id').animateActiveItem(1, {type: 'slide', direction: 'left' });
          //Ext.Msg.alert("you have tapped Missions");
          
       }else if (index==1) {
          //Ext.Msg.alert("you have tapped Initiatives");
          Ext.getCmp('home2id').animateActiveItem(2, {type: 'slide', direction: 'left' });
       }else if (index == 2) {
          //Ext.Msg.alert("you have tapped Committees");
          Ext.getCmp('home2id').animateActiveItem(3, {type: 'slide', direction: 'left' });
       }else if (index == 3) {
          //Ext.Msg.alert("you have tapped office locations");
          Ext.getCmp('home2id').animateActiveItem(4, {type: 'slide', direction: 'left' });
       }
   },
   backHome: function(){
       Ext.getCmp('home2id').animateActiveItem(0, {type: 'slide', direction: 'right'});
       //element.getParent().setActiveItem(0);
   },
   showEvent: function(list,index,element,record){
       console.log('event list tapped...');
       console.log(record.get('name'));
       this.getRsvpForm().setValues({
           eventname:record.get('name'),
           eventlocation: record.get('location'),
           eventdate: record.get('date'),
           eventtime: record.get('time'),
           eventdescription: record.get('description')
       });
       Ext.getCmp('eventcard').animateActiveItem(1,{type: 'slide', direction: 'left'});
       
   },
   onRSVP: function(){
       console.log('RSVP tapped!.');
       var values = this.getRsvpForm().getValues();
       console.log(values);
       Ext.Msg.prompt('RSVP','Please enter your name.', 
           function(buttonId,value) {
               console.log(buttonId);
               console.log(value);
               if (buttonId=='ok' && value!=''){
                   Ext.Msg.alert(value, 'You are now registered for the event.');
               }
           }
       );
   }
});