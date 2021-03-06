Ext.define('SGA.view.Connect', {
    extend: 'Ext.navigation.View',
    xtype: 'connectpage',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Officers',
        iconCls: 'user3',
        cls: 'sga-list',
        id: 'officersList',
        items: [
            {
                xtype: 'list',
                itemTpl: [
                    '<div class="officer-pic" style="float:left;background-image: url(resources/images/{pic});"></div>',
                    '<div style="float:left; width: 75%;">',
                    '<div class="list-item-title">{name} </div>',
                    '<div class="list-item-leftdetail""> {title}</div>',
                    '</div>',
                    '<div style="clear:both;"></div>',
                ],
                title: 'SGA Officers',
                store: 'Connects',
                grouped: true,
                onItemDisclosure: false,
                disableSelection: true,
                ui: 'round',
                listeners: {
                    itemtap: function(dv, ix, item, e) {
                            // Delay the selection clear
                            // so they get a nice blue flash for HCI's sake
                            setTimeout(function(){dv.deselect(ix);},100);
                    }
                }//listeners
            }
        ]
    }
});