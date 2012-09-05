Ext.define('SGA.view.EventDetail', {
   extend: 'Ext.form.Panel',
   requires: [
       'Ext.TitleBar',
       'Ext.form.FieldSet',
	'Ext.field.Email'
   ],
   xtype: 'eventdetail',
   config: {
       title: 'Event',
       layout: 'vbox',
       scrollable: true,
       url: 'eventrsvp.php',
       id: 'rsvpform',
       items: [
           {
               docked: 'top',
               xtype: 'titlebar',
               title: 'Event Detail',
               items: [
                  {
                    xtype: 'button',
                    text: 'Back',
                    handler: function(){
                        Ext.getCmp('eventcard').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000'});
                    }
                  }
                  /*
                  {
                      xtype: 'button',
                      text: 'RSVP',
                      id: 'btnRSVP',
                      align: 'right',
                      ui: 'confirm'
		 }
                 */
               ]   
           },
           {
               xtype: 'fieldset',
               defaults: {
                   readOnly: true,
                   cls: 'middle'
               },
               items: [
                   {
                       xtype: 'textfield',
                       name: 'eventname',
                       label: 'Name'
                   },
                   {
                       xtype: 'textfield',
                       name: 'eventlocation',
                       label: 'Location'
                   },
                   {
                       xtype: 'textfield',
                       name: 'eventdate',
                       label: 'Date'
                   },
                   {
                       xtype: 'emailfield',
                       name: 'eventtime',
                       label: 'Time'
                   },
                   {
                       xtype: 'textareafield',
                       name: 'eventdescription',
                       label: 'Description'
                   }
               ]			
           }
       ]
   }
});

