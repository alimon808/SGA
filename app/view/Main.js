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
                xtype: 'homepanel'
            },
            {
                xtype: 'eventlist'
            },
            {
                xtype: 'connectpage'
            },
            {
                xtype: 'linkspage'
            },
            {
                xtype: 'contactpage'
            }
        ]
    }
});