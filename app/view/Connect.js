Ext.define('SGA.view.Connect', {
    extend: 'Ext.navigation.View',
    xtype: 'connectpage',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        title: 'Connect',
        iconCls: 'contract',
        cls: 'sga-list',
        id: 'officersList',
        items: [
            {
                xtype: 'list',
                //itemTpl: '<div class="avatar" style="background-image: url("resources/icons/icon.png");"></div><div class="list-item-title">{name} </div><div class="list-item-leftdetail"> {title} </div>',
                //itemTpl: '<div class="list-item-title">{name} </div><div class="list-item-leftdetail"> {title} </div>',
                itemTpl: [
                    '<div class="officer-pic" style="float:left;background-image: url(resources/images/profile_blank_40.gif);"></div>',
                    '<div style="float:left;">',
                    '<div class="list-item-title">{name} </div>',
                    '<div class="list-item-leftdetail"> {title}</div>',
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