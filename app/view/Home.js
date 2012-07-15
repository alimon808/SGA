Ext.define('SGA.view.Home', {
	extend: 'Ext.TabPanel',
	xtype: 'homepanel',

	config: {
		title: 'Home',
		iconCls: 'home',
        cls: 'middle',
 
        defaults: {
            styleHtmlContent: true,
            scrollable: true
        },
        fullscreen: true,
        items: [
            {
                title: 'Mission',
                html: [
                    '<img src="resources/images/sga_logo1.png" />',
                    '<h1>Welcome!</h1>',

                    "<p>The Student Government Association (SGA) is the official representative ", 
                    "body for students attending DePaul University. As such, SGA is committed to ", 
                    "promoting and advocating the student voice and opinion. Our mission might be ",
                    "best summed up in the phrase, \"We are interested students working for student ",
                    "interests!\"</p>",

                    '<img src="resources/images/photos/sgaphoto2.png" />',

                    '<h1><center>Connect with us!</center></h1>',
                    '<a href="http://www.facebook.com/depaulsga" target="_blank"><img src="resources/images/fb.png" /></a>',
                    '<a href="http://www.twitter.com/depaulsga" target="_blank"><img src="resources/images/twitter.png" /></a>',
                    '<a href="https://login.depaul.edu/cas/login?service=https%3A%2F%2Forgsync.com%2Fcas%2Fdepaul-university" target="_blank"><img src="resources/images/orgsync.png" /></a>',
                    '<a href="https://wwww.facebook.com/depauldmat" target="_blank"><img src="resources/images/dmat.png" /></a>'
                ].join("")
            },
            {
                title: 'About',
                html: [
                    '<h1>What is SGA all about?</h1>',

                    "<p>We are a 35-member student organization, which includes an 11-person executive ",
                    "branch and 24 senators and liaisons from each of DePaul's 10 colleges. In the past, ",
                    "SGA has led the charge in a number of key issue areas, including fighting for financial ",
                    "aid for Illinois college students, securing university funding and support for campus-wide ",
                    "environmental initiatives and promoting institutional diversity and student wellbeing. ",
                    "This regularly brings us face-to-face with University administrators and state and local ",
                    "officials.</p>",

                    '<img src="resources/images/photos/sgaphoto1.png" />'
                ].join("")
            }
        ]
	}
});