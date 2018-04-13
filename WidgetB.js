Ext.define('Admin.WidgetB', {
    extend: 'Admin.WidgetA',
    xtype: 'widget-b',

    cls:'info-card-item info-card-large-wrap shadow',

    tpl: '<div><span class="x-fa fa-{icon}"></span><h2>{amount}</h2><div class="infodiv">{type}</div></div>'
});
