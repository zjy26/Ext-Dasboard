Ext.define('Admin.DateWidget',{
    extend: 'Admin.InfoWidget',

    alias: 'widget.datewidget',

    timeFormat: 'H:i:s',

    dateFormat: 'Y-m-d D',

    tpl: '<h2>{time}</h2><h3>{date}</h3>',

    initComponent: function(){
        var me = this;

        Ext.TaskManager.start({
            run:function () {
                me.update({
                    time: Ext.Date.format(new Date(), me.timeFormat),
                    date: Ext.Date.format(new Date(), me.dateFormat)
                });
            },
            interval:1000
        });

        me.callParent(arguments);
    }

});
