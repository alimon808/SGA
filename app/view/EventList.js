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
                title: 'Upcoming Event',
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
                xtype: 'list',
                ui: 'round',
                itemTpl: '<div class="list-item-title">{name}</div>'+
                    '<div class="list-item-leftdetail">{date} <br /> {time}</div>',
                title: 'Past Event',
                store: 'PastEvents',
                grouped: true,
                onItemDisclosure: true,
                listeners: {
                        itemtap: function(dv, ix, item, e) {
                                setTimeout(function(){dv.deselect(ix);},500);
                        }
                    }//listeners
            }
        ]
    }
});