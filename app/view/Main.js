Ext.define("SGA.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        cls: 'sga',
        layout: {
            type: 'card',
            animation: {
                type: 'fade'
            }
        },

        items: [
            {xtype: 'home2'},
            {
                xtype: 'panel',
                layout: 'card',
                title: 'Events',
                iconCls: 'calendar2',
                id: 'eventcard',
                items: [
                    {
                        xtype: 'eventlist'
                    },
                    {
                        xtype: 'eventdetail'
                    }
                ]
                
            },
            {
                xtype: 'connectpage'
            },
            {
                xtype: 'contactpage'
            }
        ]
    }
});