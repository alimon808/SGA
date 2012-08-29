Ext.define('SGA.view.Election',{
   extend: 'Ext.Panel',
   xtype: 'electionpanel',
   config: {
       title: 'Election',
       styleHtmlContent: true,
       layout: 'fit',
       scrollable: true,
       html: [
           '<center><img src="resources/images/photos/sgaphoto17.png" /></center>',
           "<h2 style='font-size:1.4em'>Fall 2012</h2>",
           "<ul style='font-size:1.4em'>",
           "<li>September 5",
           "<ul><li>9am: Packets available (download online, pickup at OSI Loop or LPC)</li></ul>",
           "</li>",
           "<li>September 13",
           "<ul><li>5pm: Candidate Info Session @ LPC OSI Conference Room</li></ul>",
           "</li>",
           "<li>September 26",
           "<ul><li>12pm: Candidate Info Session @ LPC OSI Conference Room</li><li>4:30pm: Meet the Candidates @ TBD</li><li>5pm, Packets due (drop off to OSI office or submit online to EOB)</li></ul>",
           "</li>",
           "<li>October 1",
           "<ul><li>12:01am: Election begins @ ",
           '<a href="sga.depaul.edu">sga.depaul.edu</a>',
           "</li><li>11am-4pm: Polling stations open @ LPSC Atrium, DePaul Center 11th floor</li></ul>",
           "</li>",
           "<li>October 2",
           "<ul><li>11am-4pm: Polling stations open @ LPSC Atrium, DePaul Center 11th floor</li></ul>",
           "</li>",
           "<li>October 3",
           "<ul><li>9am-12pm: Polling stations open @ LPSC Atrium</li><li>12pm: Election ends</li><li>5pm: Election results annouced to Candidates in LPC OSI</li></ul>",
           "</li>",
           "<li>October 4",
           "<ul><li>6pm: Senators installed</li></ul>",
           "</li>",
           "</ul>"
       ].join("")
   }
});

