Ext.define('SGA.view.Contact', {
	extend: 'Ext.navigation.View',
	xtype: 'contactpage',

	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],

	config: {
		title: 'Contact Us',
		iconCls: 'user',
		url: 'contact.php',

        items: [
        {
            title: 'Send Message',
            xtype: 'panel',
        	styleHtmlContent: true,
        	scrollable: true,
        	cls: 'middle',
            items: [
				{
					xtype: 'fieldset',
					//title: 'Contact Us',
					instructions: '(email is not required)',

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
					margin: 20,
					text: 'Submit',
					ui: 'confirm',
					handler: function() {
						this.up('contactform').submit();
					}
				},
				{
					html: [
						'<h1>Connect with Us!</h1>',
						'<a href="http://www.facebook.com/depaulsga" target="_blank"><img src="resources/images/fb.png" /></a>',
	                    '<a href="http://www.twitter.com/depaulsga" target="_blank"><img src="resources/images/twitter.png" /></a>',
	                    '<a href="https://login.depaul.edu/cas/login?service=https%3A%2F%2Forgsync.com%2Fcas%2Fdepaul-university" target="_blank"><img src="resources/images/orgsync.png" /></a>',
	                    '<a href="https://wwww.facebook.com/depauldmat" target="_blank"><img src="resources/images/dmat.png" /></a>'
					].join("")
				}
            ]
        }]
	}
});