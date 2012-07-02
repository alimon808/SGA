Ext.define('SGA.view.Connect', {
    extend: 'Ext.TabPanel',
    xtype: 'connectpage',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Connect',
        iconCls: 'contract',
        tabBar: {layout: {pack:'center'}},
        //cls: 'middle',
        items: [{
            xtype: 'list',
                    showAnimation: 'slideIn',
        hideAnimation: 'slideOut',
        enter: 'top',
        exit: 'bottom',
            onItemDisclosure: true,
            itemTpl: '<div> <b>{name}</b> <br /> {position} </div>',
            title: 'Officers',
            store: 'Officers'
        },
        {
            xtype: 'list',
            itemTpl: '<div> <b>{name}</b> <br /> {college} </div>',
            title: 'Senators',
            store: 'Senators'
        },
        {
            xtype: 'list',
            itemTpl: '<div> <b>{name}</b> <br /> {college} </div>',
            title: 'Liaisons',
            store: 'Liaisons'
        },
        {
            xtype: 'list',
            itemTpl: '<div> <b>{position}</b> <br /> {title} </div>',
            title: 'Vacant',
            store: 'Vacants'
        }
    ]
        /*items: [
        {
            title: 'Connect',
            xtype: 'panel',
            styleHtmlContent: true,
            scrollable: true,
            items: [
                {
                    html: [
                        '<h1>SGA Officers for 2012-2013 Academic Year</h1>',
                        "<strong>Caroline Winsett</strong><br />President<br /><a href=:'mailto:cwinsett@depaul.edu'>cwinsett@depaul.edu</a><br /><br />",
                        "<strong>Casey Clemmons</strong><br />Vice President<br /><a href=:'mailto:cclemmon@depaul.edu'>cclemmon@depaul.edu</a><br /><br />",
                        "<strong>Brandon Davis</strong><br />Treasurer<br /><a href=:'mailto:bdavis36@depaul.edu'>bdavis36@depaul.edu</a><br /><br />",
                        "<strong>Sarah Rens</strong><br />EVP Academic Affairs<br /><a href=:'mailto:sarahrens92@gmail.com'>sarahrens92@gmail.com</a><br /><br />",
                        "<strong>Lauren Maitland</strong><br />EVP Student Affairs<br /><a href=:'mailto:LMAITLAN@DEPAUL.EDU'>LMAITLAN@DEPAUL.EDU</a><br /><br />",
                        "<strong>Matthew C Von Nida</strong><br />EVP Operations<br /><a href=:'mailto:mvonnida@mail.depaul.edu'>mvonnida@mail.depaul.edu</a><br /><br />",
                        "<strong>William Baker</strong><br />Executive Assistant<br /><a href=:'mailto:williambakeriii@me.com'>williambakeriii@me.com</a><br /><br />",
                        "<strong>Sophie Lammers</strong><br />Public Relations Coordinator<br /><a href=:'mailto:sophia.a.lammers@gmail.com'>sophia.a.lammers@gmail.com</a><br /><br />",
                        "<strong>Danielle Prebeck</strong><br />Technology Coordinator<br /><a href=:'mailto:dani.prebeck@gmail.com'>dani.prebeck@gmail.com</a><br /><br />",
                        "<strong>Emily Duddleston</strong><br />Parliamentarian<br /><a href=:'mailto:eduddles@depaul.edu'>eduddles@depaul.edu</a><br /><br />",
                        "<strong>Vacant</strong><br />Senator - College of Liberal Arts and Sciences<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Vacant</strong><br />Senator - College of Liberal Arts and Sciences<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Gregory Zanotti</strong><br />Senator - College of Commerce<br /><a href=:'mailto:GREG.ZANOTTI@GMAIL.COM'>GREG.ZANOTTI@GMAIL.COM</a><br /><br />",
                        "<strong>Veronica Guidi-Louviere</strong><br />Senator - College of Commerce<br /><a href=:'mailto:vguidilou@gmail.com'>vguidilou@gmail.com</a><br /><br />",
                        "<strong>Kevin Newhouse</strong><br />Senator - College of Computing and Digital Media<br /><a href=:'mailto:knewhous@mail.depaul.edu'>knewhous@mail.depaul.edu</a><br /><br />",
                        "<strong>Vacant</strong><br />Senator - College of Computing and Digital Media<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Joe Cunnungham</strong><br />Senator - College of Communication<br /><a href=:'mailto:cunningham_joe@sbcglobal.net'>cunningham_joe@sbcglobal.net</a><br /><br />",
                        "<strong>Malloree Winston</strong><br />Senator - College of Science and Health<br /><a href=:'mailto:strawberry6611@aim.com'>strawberry6611@aim.com</a><br /><br />",
                        "<strong>Allen Brandon</strong><br />Senator - School of Music<br /><a href=:'mailto:blallen22@gmail.com'>blallen22@gmail.com</a><br /><br />",
                        "<strong>Chelsea Robinson</strong><br />Senator - School of Education<br /><a href=:'mailto:CROBIN48@DEPAUL.EDU'>CROBIN48@DEPAUL.EDU</a><br /><br />",
                        "<strong>Vacant</strong><br />Senator - School for New Learning<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Vacant</strong><br />Senator - Theatre School<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Vacant</strong><br />Liaison - Honors Students<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Donn Baca</strong><br />Liaison - Grad, Law, & Adult Students<br /><a href=:'mailto:donnbaca@yahoo.com'>donnbaca@yahoo.com</a><br /><br />",
                        "<strong>Vacant</strong><br />Liaison - Transfer Students<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>John Francis</strong><br />Liaison - Mission and Values<br /><a href=:'mailto:johnrusselfrancis@gmail.com'>johnrusselfrancis@gmail.com</a><br /><br />",
                        "<strong>Vacant</strong><br />Liaison - Commuter Students<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Edward Kim</strong><br />Liaison - Intercultural Students<br /><a href=:'mailto:edkim247@gmail.com'>edkim247@gmail.com</a><br /><br />",
                        "<strong>Cassie Goodpaster</strong><br />Community and Government Relations<br /><a href=:'mailto:cgoodpa2@mail.depaul.edu'>cgoodpa2@mail.depaul.edu</a><br /><br />",
                        "<strong>Vacant</strong><br />Liaison - Office of Student with Disabilities<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Vacant</strong><br />Liaison - First Year Students<br /><a href=:'mailto:'>Vacant</a><br /><br />",
                        "<strong>Connor Lillis</strong><br />Liaison - Second Year Students<br /><a href=:'mailto:connor.lillis@gmail.com'>connor.lillis@gmail.com</a><br /><br />",
                        "<strong>Matthew Martin</strong><br />Liaison - Third Year Students<br /><a href=:'mailto:mmart905@gmail.com'>mmart905@gmail.com</a><br /><br />",
                        "<strong>Joseph Kosin</strong><br />Liaison - Fourth and Fifth Year Students<br /><a href=:'mailto:joekosin123@yahoo.com'>joekosin123@yahoo.com</a><br /><br />",
                        "<strong>Jonathan Eiseman</strong><br />Liaison - Sustainability<br /><a href=:'mailto:jonathan.Eiseman@gmail.com'>jonathan.Eiseman@gmail.com</a><br /><br />"
                    ].join("")
                }
            ]
        }]*/
    }
});