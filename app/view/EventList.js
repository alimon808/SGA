Ext.define('SGA.view.EventList', {
    extend: 'Ext.tab.Panel',
    xtype: 'eventlist',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Event',
        iconCls: 'calendar2',
        cls: 'sga-list-events',
        layout: {type:'card',animation:'flip'},
        tabBar: {
            defaults: {
              flex:1  
            },
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'list',
                ui: 'round',
                cls: 'sga-list',
                itemTpl: '<div class="list-item-title">{name}</div>'+
                    '<div class="list-item-leftdetail"> {date} </div>'+
                    '<div class="list-item-leftdetail">{time} </div>',
                title: 'Upcoming Events',
                store: 'Events',
                grouped: true,
                onItemDisclosure: true,
                listeners: {
                    itemtap: function(dv, ix, item, e) {
                            setTimeout(function(){dv.deselect(ix);},500);
                    }
                }//listeners
            },
            {
                title: 'Past Events',
                xtype: 'carousel',
                cls: 'middle',

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
            /*
            {
                xtype: 'list',
                ui: 'round',
                itemTpl: '<div class="list-item-title">{name}</div>'+
                    '<div class="list-item-leftdetail">{date} <br /> {time}</div>',
                title: 'Past Events',
                store: 'PastEvents',
                grouped: true,
                onItemDisclosure: true,
                listeners: {
                        itemtap: function(dv, ix, item, e) {
                                setTimeout(function(){dv.deselect(ix);},500);
                        }
                    }//listeners
            }
            */
        ]
    }
});