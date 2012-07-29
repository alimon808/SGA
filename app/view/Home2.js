
Ext.define('SGA.view.Home2', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.MessageBox',
        'Ext.data.Store'
    ],
    xtype: 'home2',
    id: 'home2id',
    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'card',
        animation: {
            type: 'slide',
            direction: 'left',
            duration: 300
        },
        items: [
           
            {
                xtype: 'panel',
                layout: 'vbox',
        //defaults: { cls: 'middle'},
            items: [
            {
               title:'Top',
                html:'<img style="" src="resources/images/sga_logo1.png" />',
                style:"background-color:#eee; color:white;",
                flex:1,
                cls:'middle'
            },
            {
                xtype: 'list',
                id: 'homelist',
                itemTpl: '{title}',
                data: [
                   {title:'Mission'},
                   {title:'Initiative'},
                   {title:'Election'},
                   {title:'Office Locations'}
                ],
                flex:2,
                ui:'round',
                onItemDisclosure: true
        	}
            ]
            },
            {
                xtype: 'panel',
                scrollable: true,
                html: [
                    '<p>The Student Government Association (SGA) is the official representative body for students attending DePaul University. As such, SGA is committed to promoting and advocating the student voice and opinion. Our mission might be best summed up in the phrase, "We are interested students working for student interests!"</p>',
                    "<br />",
                    "<p>We are a 35-member student organization, which includes an 11-person executive branch and 24 senators and liaisons from each of DePaul's 10 colleges. In the past, SGA has led the charge in a number of key issue areas, including fighting for financial aid for Illinois college students, securing university funding and support for campus-wide environmental initiatives and promoting institutional diversity and student wellbeing. This regularly brings us face-to-face with University administrators and state and local officials.</p>"
                ].join(""),
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'SGA Mission',
                        items: [
                            {
                        xtype: 'button',
                        text: 'Back',
                        handler: function(){
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right',duration: '3000' });
                        }
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'panel',
                layout:'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'SGA Initiatives',
                        items: [
                            {
                        xtype: 'button',
                        text: 'Back',
                        handler: function(){
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right',duration: '3000' });
                        }
                            }
                        ]
                    },
                    {
                xtype: 'list',
                //id: 'initlist',
                itemTpl: '<div> {description} </div>',
                title: '',
                store: 'Initiatives',
                grouped: true,
                ui: 'round',
                disableSelection: true
                    }
                ]

            },
            {
                xtype: 'panel',
                layout: 'fit',
                //scrollable: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'SGA Election',
                        items: [
                            {
                        xtype: 'button',
                        text: 'Back',
                        handler: function(){
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right',duration: '3000' });
                        }
                            }
                        ]
                    },
                    {
                        xtype: 'electionpanel',
                    }
                ]
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                html: [
	    				'<h2>Lincoln Park</h2>',
	    				"<p>Student Involvement Office, Ste. 201 G<br />",
	    				"2250 N. Sheffield Avenue<br />",
	    				"Chicago, IL 60614<br />",
	    				"773-325-7350</p>",

	    				'<h2>Loop</h2>',
	    				"<p>DePaul Center, Rm. 110002<br />",
	    				"1 E. Jackson Blvd<br />",
	    				"Chicago, IL 60604<p>"
					].join(""),
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'SGA Office Locations',
                        items: [
                            {
                        xtype: 'button',
                        text: 'Back',
                        handler: function(){
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right',duration: '3000' });
                        }
                            }
                        ]
                    }
                ]
            }
        ]
   }
});

/*
Ext.define('SGA.view.Home2', {
    extend: 'Ext.Panel',
    requires: ['Ext.MessageBox'],
    xtype: 'home2',
    
    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'vbox',
        //defaults: { cls: 'middle'},
            items: [
            {
               title:'Top',
                html:'<img style="" src="resources/images/sga_logo1.png" />',
                style:"background-color:#eee; color:white;",
                flex:1,
                cls:'middle'
            },
            {
                xtype: 'list',
                itemTpl: '{title}',
                data: [
                   {title:'Mission'},
                   {title:'Initiative'},
                   {title:'Committee'},
                   {title:'Office Locations'}
                ],
                flex:2,
                ui:'round',
                onItemDisclosure: true
        	}
            ]
   }
});
*/
/*
// with buttons
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
                   //ui: 'confirm',
                   //icon: 'resources/icons/code3.png',
                   //iconAlign: 'right',
                   margin: '5 20'
               },
              items: [

                       {
                           xtype: 'panel',
                           html: '<img style="" src="resources/images/sga_logo1.png" />'

                       },
                       {
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
                               
                       },
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
                                      xtype: 'contactform',
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

