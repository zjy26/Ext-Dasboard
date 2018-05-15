Ext.define('Admin.WidgetC', {
    extend: 'Ext.panel.Panel',
    xtype: 'widget-c',

    cls: 'shadow',

    items: [
        {
            xtype: 'image',
            cls: 'widget-top-container-first-img',
            height: 66,
            width: 66,
            alt: 'profile-image',
            src: 'profile.png'
        },
        {
            xtype: 'component',
            cls: 'widget-top-first-container postion-class',
            height: 110
        },
        {
            xtype: 'container',
            cls: 'widget-bottom-first-container postion-class',
            height: 165,
            padding: '60 0 0 0',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    cls: 'widget-name-text',
                    html: 'John Doe'
                },
                {
                    xtype: 'label',
                    html: 'Administrator'
                },
                {
                     xtype: 'toolbar',
                     flex: 1,
                     items: [
                         {
                             iconCls: 'x-fa fa-facebook',
                             scale: 'medium'
                         },
                         {
                             iconCls: 'x-fa fa-twitter',
                             scale: 'medium'
                         },
                         {
                             iconCls: 'x-fa fa-google-plus',
                             scale: 'medium'
                         },
                         {
                             iconCls: 'x-fa fa-envelope',
                             scale: 'medium'
                         }
                     ]
                }
            ]
        }
    ]
});
