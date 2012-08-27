Ext.define('SGA.view.SuggestionForm',{
    extend: 'Ext.form.Panel',
    xtype: 'suggestionform',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    config: {
        title: 'Suggestion',
        url: 'contact.php?f=2',
        id: 'suggestionForm',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Suggestion Box',
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
                xtype: 'fieldset',
                items: 
                    [
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
                        success: function(form, result){
                            Ext.Msg.alert('Success', 'Suggestion submitted successfully.');
                        },
                        failure: function(form, result) {
                            Ext.Msg.alert('Error', result.error);
                            //console.log(result);
                            //console.log(form);
                        }
                    });
                }
            }
        ]
    }
});

