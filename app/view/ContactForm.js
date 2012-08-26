Ext.define('SGA.view.ContactForm',{
    extend: 'Ext.form.Panel',
    xtype: 'contactform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        title: 'Contact Us',
        iconCls: 'mail',
        cls: 'middle',
        url: 'contact.php?f=1',
        id: 'contactForm',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contact Us'
            },
            {
                html: [
                    "<p>Have questions for your Student Government Association? Feel free to get in touch with your officers by visiting the officer tab. If you arent sure where to direct your questions, or for anything else, please use the form below or email us at ",
                    '<a href="mailto:sga@depaul.edu">sga@depaul.edu</a>',
                    "</p>"
                ].join("")
            },
            {
                xtype: 'fieldset',
                //title: 'Contact Us',
                //instructions: '(email is not required)',
                items: [
                    {
                            xtype: 'textfield',
                            name: 'name',
                            label: 'Name'
                    },
                    {
                            xtype: 'textfield',
                            name: 'major',
                            label: 'Major'
                    },
                    {
                            xtype: 'emailfield',
                            name: 'email',
                            label: 'Email'
                    },
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
                    this.up('contactform').submit({
                        success: function(){
                            Ext.Msg.alert('Success', 'Email sent successfully.');
                        },
                        failure: function(form, result){
                            Ext.Msg.alert('Error', result.error);
                        }
                    });
                }
            },
            {
                html: [
                    '<h1>Get Involved!</h1>',
                    '<a href="http://www.facebook.com/depaulsga" target="_blank"><img src="resources/images/fb.png" /></a>',
                    '<a href="http://www.twitter.com/depaulsga" target="_blank"><img src="resources/images/twitter.png" /></a>',
                    '<a href="https://login.depaul.edu/cas/login?service=https%3A%2F%2Forgsync.com%2Fcas%2Fdepaul-university" target="_blank"><img src="resources/images/orgsync.png" /></a>',
                    '<a href="https://wwww.facebook.com/depauldmat" target="_blank"><img src="resources/images/dmat.png" /></a>'
                ].join("")
            },
            {
                html: [
                        '<h1>DePaul Links</h1>',
                        "<p><center>",
                        '<a href="http://www.depaul.edu">DePaul Website</a><br />',
                        '<a href="http://www.events.depaul.edu">Depaul Events</a>',
                        "</p></center>"
                ].join("")
            }
        ]
    }
});

