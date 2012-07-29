Ext.define('SGA.store.Initiatives', {
   extend: 'Ext.data.Store',
   config: {
       model: 'SGA.model.Initiative',
       //sorters: 'name',
        grouper: {
            groupFn: function(item){
                return item.get('name');
            }
        },
       data: [
           {
               name: 'Transparency',
               description: 'Work to enhance methods by which the student voice can be effectively incorporated into critical university administrative decisions, particularly Budget and Tuition Pricing Processes. We are committed to advocating on behalf of students.'
           },
           {
               name: 'Educational Accessibility',
               description: 'Support practices by which education, particularly in regards to aid and scholarships, can remain affordable. Strive to maintain and expand existing financial aid opportunities throughout the larger university and government. Similarly, work to make educational tools less costly.'
           },
           {
               name: 'SGA as an Advocate',
               description: 'Seek to further the role of SGA as an informed liaison so that student interests may be appropriately relayed to the administration. As the representative body for DePaul students, we believe this to be absolutely essential.'
           },
           {
               name: 'Civic Engagement',
               description: "Foster a greater sense of interconnectedness between students and municipal, state, and federal governments and organizations. This focus will work to solidify DePaul University as Chicago's anchor institution."
           },
           {
               name: 'Sustainability',
               description: 'Recognize that the concept of sustainability is multifaceted, spanning to include social, environmental, and economic realms and should be continually improved upon.'
           },
           {
               name: 'Tenure',
               description: 'Ensure that student involvement with the faculty tenure process continues to exist.'
           },
           {
               name: 'Course Evaluations',
               description: 'Further the pursuit of making course evaluations public to DePaul students. We believe that this institutional effort will work to increase the quality of education overall.'
           },
           {
               name: 'Advising',
               description: 'Continue to ensure that strong advising systems are effective in addressing the academic needs of all DePaul students.'
           },
           {
               name: 'Student Well-Being',
               description: 'Promote initiatives that address campus safety and student health concerns by collaborating with students, faculty, staff, and administration.'
           },
           {
               name: 'Inclusivity',
               description: 'Collaborate within our diverse community so that students of every racial, ethnic, gender, religious, cultural, sexual orientation, and socioeconomic background feel a part of the greater university.'
           },
           {
               name: 'Vicentian Identity',
               description: 'Enhance the alignment between DePaul University and our Vincentian mission. We recognize the significance of our Vincentian tradition and will work to continue to extend this to students.'
           },
           {
               name: 'Campus Affinity',
               description: 'Instill a sense of school pride throughout the student body and on both the Lincoln Park and Loop campuses. Promote a sense of community throughout the university as a whole.'
           }
           
       ]//data
   }//config
});