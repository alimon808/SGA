Ext.define('SGA.view.Events', {
	extend: 'Ext.TabPanel',
	xtype: 'eventspage',
        requires: ['Ext.carousel.Carousel'],
	config: {
		title: 'Events',
		iconCls: 'calendar2',
        cls: 'middle',

        items: [
        	{
                title: 'Upcoming',
                styleHtmlContent: true,
                scrollable: true,
                html: [
                    '<h2>SGA General Body Meeting</h2>',
                    "<p>DATE: Sep 6, 2012 TIME: 6pm-8pm<br />",
                    "LOCATION: Office of Student Involvement Conference Room, Lincoln Park.<br />",
                    "DESCRIPTION: Catch up on all the things SGA is upto this quarter.<br />", 
                    '<a href="https://orgsync.com/37659/events/379277" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>Lincoln Park Involvement Fair</h2>',
                    "<p>DATE: Sep 9, 2012 TIME: 12pm-1pm<br />",
                    "LOCATION: Lincoln Park Quad<br />",
                    "DESCRIPTION: Meet SGA and all the other great student organizations on campus.<br />", 
                    '<a href="https://orgsync.com/37659/events/379275" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>Loop Involvement Fair</h2>',
                    "<p>DATE: Sep 12, 2012 TIME: 12pm-1pm<br />",
                    "LOCATION: Lewis Center<br />",
                    "DESCRIPTION: Meet SGA and all the other great student organizations on campus.<br />", 
                    '<a href="https://orgsync.com/37659/events/379276" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>Mix n Mingle with SGA</h2>',
                    "<p>DATE: Sep 24, 2012 TIME: 11am-4pm<br />",
                    "LOCATION: Lincoln Park Student Center Atrium<br />",
                    "DESCRIPTION: Come connect with SGA.<br />", 
                    '<a href="https://orgsync.com/37659/events/379278" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>SGA Student Leader Roundtable</h2>',
                    "<p>DATE: Oct 19, 2012 TIME: 11am-1pm<br />",
                    "LOCATION: Cortelyou Commons<br />",
                    "DESCRIPTION: Share your needs with SGA and connect with other student leaders.<br />", 
                    '<a href="https://orgsync.com/37659/events/379281" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

					'<h2>SGA Gets Out the Vote!</h2>',
					"<p>DATE: Nov 6, 2012 TIME: 11am-4pm<br />",
                    "LOCATION: Lincoln Park Student Center Media Table<br />",
                    "DESCRIPTION: Participat in shaping your future with SGA.<br />", 
                    '<a href="https://orgsync.com/37659/events/379282" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>Mix n Mingle with SGA</h2>',
                    "<p>DATE: Feb 18, 2013 TIME: 11am-4pm<br />",
                    "LOCATION: Lincoln Park Student Center Atrium<br />",
                    "DESCRIPTION: Come connect with SGA.<br />", 
                    '<a href="https://orgsync.com/37659/events/379279" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>",

                    '<h2>Mix n Mingle with SGA</h2>',
                    "<p>DATE: Apr 8, 2013 TIME: 11am-4pm<br />",
                    "LOCATION: Lincoln Park Student Center Atrium<br />",
                    "DESCRIPTION: Come connect with SGA.<br />", 
                    '<a href="https://orgsync.com/37659/events/379280" target="_blank">Click for more details and RSVP!</a>',
                    "<br /><hr /></p>"
                ].join("")
            },
            {
                title: 'Past',
                xtype: 'carousel',

                defaults: {
                    styleHtmlContent: true,
                },

                items: [
                    {
                        html : '<img src="resources/images/photos/sgaphoto3.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto4.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto5.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto6.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto7.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto8.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto9.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto10.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto11.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto12.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto13.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto14.png" />'
                    },
                    {
                        html : '<img src="resources/images/photos/sgaphoto15.png" />'
                    }
                ]
            }
        ]
	}
});