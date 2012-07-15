Ext.define('SGA.view.Home2', {
   extend: 'Ext.Container',
   requires: ['Ext.MessageBox'],
   xtype: 'home2',
   
   config: {
       title: 'Home2',
       iconCls: 'home',
       
       scrollable: true,
       layout: 'fit',

       items: [
           {       
               layout: {
                  type: 'vbox',
                  pack: 'top'
                  //align: 'stretch'
               },
               defaults: {
                   xtype: 'button',
                   cls: 'middle',
                   ui: 'confirm',
                   //icon: 'resources/icons/code3.png',
                   //iconAlign: 'right',
                   margin: '5 20'
               },
              items: [

                       {
                           xtype: 'panel',
                           html: '<img style="" src="resources/images/sga_logo1.png" />'

                       },
                       /*{
                           text: 'Navigation View',
                           handler: function(){
                               console.log('new view');
                               if(!view){
                                   var view = Ext.Viewport.add({
                                   xtype:'navigationview',
                                   items: [
                                       {
                                           title: 'Navigation view',
                                           padding: 10,
                                           items: [
                                               {
                                                   xtype: 'button',
                                                   text: 'Push another view',
                                                   handler: function(){
                                                       view.push({
                                                           title: 'Second view',
                                                           padding: 10,
                                                           items: [
                                                               {
                                                                   xtype:'button',
                                                                   title: 'Pop this view',
                                                                   handler: function(){
                                                                       view.pop();
                                                                   }
                                                               }
                                                           ]
                                                       });
                                                   }
                                               }
                                           ]
                                       }
                                   ]
                               });
                               }
                               view.show();
                           }
                               
                       },*/
                       {
                           text: 'Mission',
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
                                      html: '<p>Mission statement here</p>',
                                      items: [
                                          {
                                              docked: 'top',
                                              xtype: 'toolbar',
                                              title: 'Mission'
                                          }
                                      ],
                                      scrollable: true
                                   });
                               }
                               this.overlay.show();
                           }
                       },
                       {
                           text: 'About',
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
                                      centered: true,
                                      width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      height: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      stylehtmlContent: true,
                                      html: '<p>About statement here</p>',
                                      items: [
                                          {
                                              docked: 'top',
                                              xtype: 'toolbar',
                                              title: 'About'
                                          }
                                      ],
                                      scrollable: true
                                   });
                               }
                               this.overlay.show();
                           }
                       },
                       {
                           text: 'Initiatives',
                           handler: function(){
                               if(!overlay){
                                   var overlay = Ext.Viewport.add({
                                      xtype: 'initiativepanel',
                                      id: 'initiativeid',
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
                                      centered: true,
                                      width: Ext.Viewport.getSize().width,
                                      height: Ext.Viewport.getSize().height,
                                      stylehtmlContent: true,
                                      layout: 'fit',
                                      scrollable: true
                                      
                                   });
                               }
                               overlay.show();
                           }
                       },
                       {
                           text: 'Contact Us',
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
                                      centered: true,
                                      width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      height: Ext.os.deviceType == 'Phone' ? 260 : 400,
                                      stylehtmlContent: true,
                                      html: [
                                            '<a href="http://www.facebook.com/depaulsga" target="_blank"><img src="resources/images/fb.png" /></a>',
                                            '<a href="http://www.twitter.com/depaulsga" target="_blank"><img src="resources/images/twitter.png" /></a>',
                                            '<a href="https://login.depaul.edu/cas/login?service=https%3A%2F%2Forgsync.com%2Fcas%2Fdepaul-university" target="_blank"><img src="resources/images/orgsync.png" /></a>',
                                            '<a href="https://wwww.facebook.com/depauldmat" target="_blank"><img src="resources/images/dmat.png" /></a>'
                                            ].join("")
                                      ,
                                      items: [
                                          {
                                              docked: 'top',
                                              xtype: 'toolbar',
                                              title: 'Contact Us'
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

