var HomePanel = Ext.Container({
        layout: {
            type: 'hbox',
        },

        items: [
        {
            xtype: 'datewidget',
            margin: 20,
            containerColor: 'green'
        },
         {
            xtype: 'infowidget',
            margin: 20,
            containerColor: 'red',
            data: {
                amount: 244,
                type: 'Files',
                icon: 'x-fa fa-envelope'
            },
            tpl: '<h2>{amount}</h2><div>{type}</div><span class="{icon}"></span>'
        },
        {
            xtype: 'wizardform',
            cls: 'wizardform shadow',
            margin: 20,
            width: 520
        }]
});