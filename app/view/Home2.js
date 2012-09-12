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
            items: [
                {
                    title:'Top',
                    html:'<img style="" src="resources/images/sga_logo1.png" />',
                    style:"background-color:#fff; color:white;",
                    flex:1,
                    height:'130px',
                    cls:'middle'
                },
                {
                    xtype: 'list',
                    id: 'homelist',
                    itemTpl: '{title}',
                    data: [
                        {title:'Mission'},
                        {title:'Initiatives'},
                        {title:'SGA Elections'},
                        {title:'Office Locations'},
                        {title: 'Suggestion Box'}
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
                styleHtmlContent: true,
                html: [
                    '<center><img src="resources/images/photos/sgaphoto.png" /></center>',
                    '<p>The Student Government Association (SGA) is the official representative body for students attending DePaul University. As such, SGA is committed to promoting and advocating the student voice and opinion. Our mission might be best summed up in the phrase, "We are interested students working for student interests!"</p>',
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
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000' });
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
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000' });
                        }
                            }
                        ]
                    },
                    {
                xtype: 'list',
                itemTpl: '<div style="font-size:80%;"> {description} </div>',
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
                        title: 'SGA Elections',
                        items: [
                            {
                        xtype: 'button',
                        text: 'Back',
                        handler: function(){
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000' });
                        }
                            }
                        ]
                    },
                    {
                        xtype: 'electionpanel'
                    }
                ]
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                scrollable: true,
                html: [
                        '<center><img src="resources/images/office2.png" /></center>',
	    				'<h2>Lincoln Park</h2>',
	    				"<p>Student Involvement Office, Ste. 201 G<br />",
	    				"2250 N. Sheffield Avenue<br />",
	    				"Chicago, IL 60614<br />",
	    				"773-325-7350</p>",

	    				'<center><img src="resources/images/office.png" /></center>',
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
                            Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000' });
                        }
                            }
                        ]
                    }
                ]
            },
            {
                xtype:'suggestionform'
            },
            {
                xtype: 'panel',
                styleHtmlContent: true,
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Suggestion',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Back',
                                handler: function(){
                                    Ext.getCmp('home2id').setActiveItem(0, {type: 'slide', direction: 'right', duration: '3000' });
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'subject',
                                label: 'Subject'
                            },
                            {
                                xtype: 'textareafield',
                                name: 'message',
                                label: 'Message'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        ui: 'confirm',
                        handler: function(){
                            this.up('suggestionform').submit({
                                success: function(){
                                    alert('Suggestion submitted successfully.');
                                }
                            });
                        }
                    }
                ]
            }
        ]
   }
});
