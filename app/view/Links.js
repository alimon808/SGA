Ext.define('SGA.view.Links', {
    extend: 'Ext.TabPanel',
    xtype: 'linkspage',

    config: {
        title: 'Links',
        iconCls: 'link1',
        cls: 'middle',
 
        defaults: {
            styleHtmlContent: true,
            scrollable: true
        },

        items: [
            {
                title: 'Initiatives',
                html: [
                    '<img src="resources/images/photos/sgaphoto16.png" />',

                    '<h2>1. TRANSPARENCY:</h2>',
                    "<p>Work to enhance methods by which the student voice can be effectively ",
                    "incorporated into critical university administrative decisions, particularly Budget and Tuition Pricing ",
                    "Processes. We are committed to advocating on behalf of students.</p>",

                    '<h2>2. EDUCATIONAL ACCESSIBILITY:</h2>',
                    "<p>Support practices by which education, particularly in regards ",
                    "to aid and scholarships, can remain affordable. Strive to maintain and expand existing financial ",
                    "aid opportunities throughout the larger university and government. Similarly, work to make ",
                    "educational tools less costly.</p>",

                    '<h2>3. SGA as an ADVOCATE:</h2>',
                    "<p>Seek to further the role of SGA as an informed liaison so that student ",
                    "interests may be appropriately relayed to the administration. As the representative body for ",
                    "DePaul students, we believe this to be absolutely essential.</p>",

                    '<h2>4. CIVIC ENGAGEMENT:</h2>',
                    "<p>Foster a greater sense of interconnectedness between students and ",
                    "municipal, state, and federal governments and organizations. This focus will work to solidify ",
                    "DePaul University as Chicago’s anchor institution.</p>",

                    '<h2>5. SUSTAINABILITY:</h2>',
                    "<p>Recognize that the concept of sustainability is multifaceted, spanning to ",
                    "include social, environmental, and economic realms and should be continually improved upon.</p>",

                    '<h2>6. TENURE:</h2>',
                    "<p>Ensure that student involvement with the faculty tenure process continues to exist.</p>",

                    '<h2>7. COURSE EVALUATIONS:</h2>',
                    "<p>Further the pursuit of making course evaluations public to DePaul ",
                    "students. We believe that this institutional effort will work to increase the quality of education ",
                    "overall.</p>",

                    '<h2>8. ADVISING:</h2>',
                    "<p>Continue to ensure that strong advising systems are effective in addressing the ",
                    "academic needs of all DePaul students.</p>",

                    '<h2>9. STUDENT WELL-BEING:</h2>',
                    "<p>Promote initiatives that address campus safety and student health ",
                    "concerns by collaborating with students, faculty, staff, and administration.</p>",

                    '<h2>10. INCLUSIVITY:</h2>', 
                    "<p>Collaborate within our diverse community so that students of every racial, ",
                    "ethnic, gender, religious, cultural, sexual orientation, and socioeconomic background feel a part ",
                    "of the greater university.</p>",

                    '<h2>11. VINCENTIAN IDENTITY:</h2>',
                    "<p>Enhance the alignment between DePaul University and our Vincentian ",
                    "mission. We recognize the significance of our Vincentian tradition and will work to continue to ",
                    "extend this to students.</p>",

                    '<h2>12. CAMPUS AFFINITY:</h2>',
                    "<p>Instill a sense of school pride throughout the student body and on both ",
                    "the Lincoln Park and Loop campuses. Promote a sense of community throughout the university ",
                    "as a whole.</p>"
                ].join("")
            },
            {
                title: 'Election News',
                html: [
                    '<img src="resources/images/photos/sgaphoto19.png" />',

                    '<h2>DePaul Election News</h2>',
                    "<p>SGA holds elections at the end of every academic year during the month of May. ",
                    "Please click ",
                    '<a hfref="https://wa.is.depaul.edu//sgavoting/login.aspx?">here</a> ',
                    "to cast your vote.</p>",

                    '<h2>Illinois Election News</h2>',
                    "<p>For information on the elctions and voting information happening in the state ", 
                    "of Illinois please click ",
                    '<a hfref="http://elections.illinois.gov/">here</a>',
                    ".</p>"
                ].join("")
            }
        ]
    }
});
