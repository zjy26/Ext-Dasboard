var HeaderBar = Ext.create({
    xtype: 'toolbar',
    height: 64,
    id: 'headerBar',
    border: 1,
    items: [{
        xtype: 'component',
        itemId: 'logo',
        cls: 'sencha-logo',
        html: '<div class="logo"><img src="company-logo.png">Sencha</div>',
        width: 250
    }, {
        margin: '0 0 0 8',
        iconCls:'x-fa fa-bars',
        handler:function(){
            var collasping = !TreelistMenu.getMicro();
            var wrapContainer = Ext.getCmp('wrapcontainer');
            var new_width = collasping ? 64 : 250;
            if(!collasping) {
                TreelistMenu.setMicro(false);
            }
            TreelistMenu.width = new_width;
            wrapContainer.updateLayout({isRoot: true});
            Ext.getCmp('headerBar').getComponent('logo').animate({dynamic: true, to: {width: new_width}});

            if(collasping) {
                TreelistMenu.on({
                    afterlayoutanimation: function () {
                        TreelistMenu.setMicro(true);
                    },
                    single: true
                });
            }
        }
    },
    '->',
    {
        xtype: 'segmentedbutton',
        margin: '0 16 0 0',
        items: [{
            iconCls: 'x-fa fa-desktop',
            pressed: true
        }, {
            iconCls: 'x-fa fa-tablet',
            handler: '',
            tooltip: 'Switch to modern toolkit'
        }]
    }, {
        iconCls: 'x-fa fa-user',
        handler: function() {
            Ext.create('Ext.window.Window', {
                monitorResize: false,
                items: [{
                    xtype: 'widget-c',
                    width: 500
                }]
            }).show();
        }
    }, {
        iconCls: 'x-fa fa-edit',
        handler: function(){
           var editWindow = Ext.create('Ext.window.Window', {
                title: '新建入库单',
                overflowY: 'scroll',
                height: 600,
                width: 1200,
                layout: 'auto',
                items: [{
                    xtype: 'form',
                    bodyPadding: '0 0 20 0',
                    layout: 'column',
                    defaults: {
                        xtype: 'textfield',
                        labelAlign: 'right',
                        labelPad:10
                    },
                    title: '资产基本信息',
                    iconCls: 'x-fa fa-copy',
                    items: [{
                        fieldLabel: '资产编码'
                    }, {
                        fieldLabel: '资产类别'
                    }, {
                        fieldLabel: '入库时间'
                    }, {
                        fieldLabel: '资产名称'
                    }]
                }, {
                    xtype: 'form',
                    layout: 'column',
                    title: '资产采购信息',
                    bodyPadding: '0 0 20 0',
                    defaults: {
                        xtype: 'textfield',
                        labelAlign: 'right',
                        labelPad:10
                    },
                    cls: 'wrap',
                    iconCls: 'x-fa fa-shopping-cart',
                    items: [{
                        fieldLabel: '来源',
                    }, {
                        fieldLabel: '品牌',
                    }, {
                        fieldLabel: '渠道',
                    }, {
                        fieldLabel: '金额',
                    }]
                }, {
                    xtype: 'panel',
                    title: '配置',
                    bodyPadding: '0 0 20 0',
                    iconCls: 'x-fa fa-cogs',
                    cls: 'wrap',
                    items: [{
                        xtype: 'textarea',
                        margin: '0 0 0 40',
                        grow: true,
                        width: 500,
                        height: 100
                    }]
                }, {
                    xtype: 'panel',
                    cls: 'wrap',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        text: '图片上传',
                        margin: '10 0 0 40'
                    }, {
                        xtype: 'panel',
                        margin: '10 0 0 40',
                        items: [{
                            xtype:'box',
                            id: 'box_picture',
                            width: 100,
                            height: 100,
                            autoEl: {
                                tag: 'img',
                                src: 'profile.png'
                            }
                        }, {
                            xtype: 'filefield',
                            id: 'id_filefield',
                            buttonText: '选择文件',
                            listeners: {

                            }
                        }, {
                            xtype: 'label',
                            html: '温馨提示：图片格式仅支持.jpg,.png,.jpeg;图片大小最大为3M'
                        }]
                    }]
                }],
                buttons: [{
                    text: '确定'
                }, {
                    text: '取消',
                    handler: function() {
                        editWindow.close();
                    }
                }]
            }).show()
        }
    }]
});