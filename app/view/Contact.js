Ext.define('SGA.view.Contact', {
	extend: 'Ext.navigation.View',
	xtype: 'contactpage',

	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],

	config: {
		title: 'Contact',
		iconCls: 'user',
		url: 'alinawaz_leo@hotmail.com',

        items: [
        {
            title: 'Contact Information',
            xtype: 'panel',
        	styleHtmlContent: true,
        	scrollable: true,
        	cls: 'middle',
            items: [
                {
	        		html: [
	        			'<img src="resources/images/photos/sgaphoto17.png" />',

	    				'<h2>Lincoln Park</h2>',
	    				"<p>Student Involvement Office, Ste. 201 G<br />",
	    				"2250 N. Sheffield Avenue<br />",
	    				"Chicago, IL 60614<br />",
	    				"773-325-7350</p>",

	    				'<h2>Loop</h2>',
	    				"<p>DePaul Center, Rm. 110002<br />",
	    				"1 E. Jackson Blvd<br />",
	    				"Chicago, IL 60604<p>",

	    				"<p>Have questions for your Student Government Association? ",
	    				"Feel free to get in touch with your officers by visiting the ",
	    				"connect page. If you arent sure where to direct your questions, ",
	    				"or for anything else, please use the form below.</p>"
					].join("")
	        	},
				{
					xtype: 'fieldset',
					title: 'Contact Us',
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
					text: 'Send',
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