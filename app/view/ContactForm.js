Ext.define('SGA.view.ContactForm',{
    extend: 'Ext.form.Panel',
    xtype: 'contactform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        title: 'Contact Us',
        iconCls: 'user',
        url: 'contact.php',
        //standardSubmit: true,
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Contact Us'
            },
            {
                xtype: 'fieldset',
                //title: 'Contact Us',
                instructions: '(email is not required)',
                items: 
                    [
                      {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name'
                      },
                      {
                          xtype: 'emailfield',
                          name: 'email',
                          label: 'Email'
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
                            alert('form submitted successfully.');
                        }
                    });
                }
            }
        ]
    }
});

