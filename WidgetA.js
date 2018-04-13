Ext.define('Admin.WidgetA', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-a',
    height: 230,

    cls: 'info-card-item shadow',

    containerColor: '',
    data: {
        amount: '',
        type: '',
        icon: ''
    },

    tpl: '<div><h2>{amount}</h2><div>{type}</div><span class="x-fa fa-{icon}"></span></div>',

    initComponent: function(){
        var me = this;

        Ext.apply(me, {
            cls: me.config.containerColor
        });

        me.callParent(arguments);
    }
});