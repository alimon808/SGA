Ext.define('SGA.view.Initiative', {
    extend: 'Ext.Panel',
    xtype: 'initiativepanel',
    requires: [
        'Ext.data.Store','Ext.TitleBar'
    ],
    config: {

        //cls: 'sga-list-events',
        items: [
            {
                xtype: 'list',
                itemTpl: '<div class="list-item-leftdetail" style="font-size: 60%;"> {description} </div>',
                title: 'Upcoming Events',
                store: 'Initiatives',
                grouped: true,
                listeners: {
                    itemtap: function(dv, ix, item, e) {
                            // Delay the selection clear
                            // so they get a nice blue flash for HCI's sake
                            setTimeout(function(){dv.deselect(ix);},0);
                    }
                }//listeners
            }
        ]
    }
});

/*
Ext.define('SGA.view.Initiative', {
    extend: 'Ext.Panel',
    xtype: 'initiativepanel',
    requires: [
        'Ext.data.Store','Ext.TitleBar'
    ],
    config: {

        cls: 'sga-list-events',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Initiatives',
                items: [
                    {
                        xtype:'button',
                        iconCls: 'delete',
                        iconMask: true,
                        align: 'right',
                        listeners: {
                            tap: function(){
                                //setTimeout(Ext.getCmp('initiativeid').hide(),500);
                                Ext.getCmp('initiativeid').hide();
                                Ext.getCmp('initiativeid').destroy();
                                console.log('close inititiveid');
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'list',
                itemTpl: '<div class="list-item-leftdetail"> {description} </div>',
                title: 'Upcoming Event',
                store: 'Initiatives',
                grouped: true,
                listeners: {
                    itemtap: function(dv, ix, item, e) {
                            // Delay the selection clear
                            // so they get a nice blue flash for HCI's sake
                            setTimeout(function(){dv.deselect(ix);},0);
                    }
                }//listeners
            }
        ]
    }
});
*/