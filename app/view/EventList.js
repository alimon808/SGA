Ext.define('SGA.view.EventList', {
    extend: 'Ext.tab.Panel',
    xtype: 'eventlist',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store',
        'Ext.carousel.Carousel'
    ],
    config: {
        title: 'Event',
        iconCls: 'calendar2',
        layout: {type:'card',animation:'flip'},
        //fullscreen: true,
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
            //onItemDisclosure: true,
            itemTpl: '<div class="list-item-title">{name}</div><div class="list-item-rightdetail"> {location} </div>',
            title: 'Upcoming Event',
            store: 'Events'   
            },
            {
            xtype: 'list',
            //onItemDisclosure: true,
            itemTpl: '<div class="list-item-title" style="float:left;">{name}</div>' + 
                     '<div style="float:right;">{date}</div><div style="clear:both;"></div><div class="list-item-rightdetail" style="float:left;"> {location} </div><div style="float:right;">{time}</div><div style="clear:both;"></div>',
            title: 'Past Event',
            store: 'Events'
            }
        ]
    }
});