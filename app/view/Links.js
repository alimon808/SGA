/*
Ext.define('SGA.view.Links', {
   extend: 'Ext.Container',
   requires: ['Ext.MessageBox'],
   xtype: 'linkspage',
   config: {
       title: 'Links',
       iconCls: 'link1',
       scrollable: true,
       layout: 'fit',
       items:[
           {
               layout: {
                   type: 'vbox',
                   pack: 'top'
               },
               defaults: {
                   xtype: 'button',
                   cls: 'middle',
                   ui: 'confirm',
                   margin: '5 20'
               },
               items: [
                   {
                       xtype: 'panel',
                       html: '<h1>Under Construction</h1><img src="resources/images/photos/sgaphoto16.png" />'
                   },
                   {
                       text: 'Election News',
                           handler: function(){
                               if(!this.overlay){
                                   this.overlay = Ext.Viewport.add({
                                      xtype: 'panel',
                                      modal: true,
                                      hideOnMaskTap: true,
                                      showAnimation: {
                                          type: 'popIn',
                                          duration: 250,
                                          easing: 'ease-out'
                                      },
                                      hideAnimation: {
                                          type: 'popOut',
                                          duration: 250,
                                          easing: 'ease-out'
                                      },
                                      padding: '0',
                                      centered: true,
                                      width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      height: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      stylehtmlContent: true,
                                      html: '<p>Election details</p>',
                                      items: [
                                          {
                                              docked: 'top',
                                              xtype: 'toolbar',
                                              title: 'Election News'
                                          }
                                      ],
                                      scrollable: true
                                   });
                               }
                               this.overlay.show();
                           }
                   },
                   {
                           text: 'Illinois Election News',
                           handler: function(){
                               if(!this.overlay){
                                   this.overlay = Ext.Viewport.add({
                                      xtype: 'panel',
                                      modal: true,
                                      hideOnMaskTap: true,
                                      showAnimation: {
                                          type: 'popIn',
                                          duration: 250,
                                          easing: 'ease-out'
                                      },
                                      hideAnimation: {
                                          type: 'popOut',
                                          duration: 250,
                                          easing: 'ease-out'
                                      },
                                      padding: '0',
                                      centered: true,
                                      width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      height: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      stylehtmlContent: true,
                                      html: '<p>Illinois Election news details</p>',
                                      items: [
                                          {
                                              docked: 'top',
                                              xtype: 'toolbar',
                                              title: 'Illinois Election News'
                                          }
                                      ],
                                      scrollable: true
                                   });
                               }
                               this.overlay.show();
                           }
                   }
               ]
           }
       ]
    }
});
*/

Ext.define('SGA.view.Links', {
    extend: 'Ext.navigation.View',
    xtype: 'linkspage',

    config: {
        title: 'Links',
        iconCls: 'link1',
        cls: 'middle',
 
        defaults: {
            styleHtmlContent: true,
            scrollable: true
        },

        items: [
            {
                title: 'Applications and Documents',
                html: [
                    "<p>Below you will find the most helpful of the documents that govern DePaul's Student Government Association.</p>",
                    '<a href="http://sga.depaul.edu/docs/constitution.pdf" target="_blank">Constitution</a>',
                    '<a href="http://sga.depaul.edu/docs/bylaws.pdf" target="_blank">EOB Bylaws</a>',
                    "<p>Please click ",
                    '<a href="https://orgsync.com/37659/files/240760" target="_blank">here</a>',
                    "for our Guiding Documents</p>",
                    "<p>Please click ",
                    '<a href="https://orgsync.com/37659/files/240760" target="_blank">here</a>',
                    "for our Proposals and Resolutions</p>",
                    "<p>Looking to become the voice of 25,000 students? Join Student Government Association! All necessary materials are below; please contact us if you have any questions.</p>"
                ].join("")
            }
        ]
    }
});