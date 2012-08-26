Ext.define('SGA.view.Connect', {
    extend: 'Ext.TabPanel',
    xtype: 'connectpage',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Officers',
        iconCls: 'contract',
        
        tabBar:  {id: 'ConnectTabBar',layout: {pack:'center',align:'center'}},
        id: 'officersList',
        items: [{
            xtype: 'list',
            onItemDisclosure: true,
            itemTpl: '<div class="list-item-title">{name} </div><div class="list-item-rightdetail"> {position} </div>',
            title: 'Officer',
            store: 'Officers'
        },
        {
            xtype: 'list',
            itemTpl: '<div class="list-item-title">{name} </div> <div class="list-item-rightdetail">{college} </div>',
            title: 'Senator',
            store: 'Senators'
        },
        {
            xtype: 'list',
            itemTpl: '<div class="list-item-title">{name}</div> <div class="list-item-rightdetail"> {college} </div>',
            title: 'Liaison',
            store: 'Liaisons'
        },
        {
            xtype: 'list',
            itemTpl: '<div class="list-item-title">{position}</div> <div class="list-item-rightdetail"> {title} </div>',
            title: 'Vacant',
            store: 'Vacants'
        }
    ]
    }
});