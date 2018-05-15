var TreelistMenu = Ext.create({
    xtype: 'treelist',
    itemId: 'treelistmenu',
    width: 250,
    store: {
        root: {
            expanded: true,
            children: [{
                text: '系统管理',
                iconCls: 'x-fa fa-cogs',
                expanded: true,
                children: [{
                    text: '组织',
                    leaf: true,
                    iconCls: 'x-fa fa-cog'
                }, {
                    text: '用户',
                    leaf: true,
                    iconCls: 'x-fa fa-user-plus'
                }, {
                    text: '工种',
                    leaf: true,
                    iconCls: 'x-fa fa-venus-double'
                }, {
                    text: '角色',
                    leaf: true,
                    iconCls: 'x-fa fa-adjust'
                }, {
                    text: '员工',
                    leaf: true,
                    iconCls: 'x-fa fa-adjust'
                }]
            }, {
                text: '流程管理',
                expanded: true,
                iconCls: 'x-fa fa-list',
                children: [{
                    text: '部署包',
                    leaf: true
                }, {
                    text: '流程定义',
                    leaf: true
                }, {
                    text: '流程实例',
                    leaf: true
                }]
            }, {
                text: '我的流程',
                expanded: false,
                iconCls: 'x-fa fa-indent',
                children: [{
                    text: '发起流程',
                    leaf: true
                }, {
                    text: '流程查询',
                    leaf: true
                }, {
                    text: '我的任务',
                    leaf: true
                }]
            }, {
                text: '平台开发',
                expanded: false,
                iconCls: 'x-fa fa-cloud',
                children: [{
                    text: '模板',
                    leaf: true
                }, {
                    text: '服务器脚本',
                    leaf: true
                }, {
                    text: '表单',
                    leaf: true
                }]
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment',
                children: [{
                    text: '新消息',
                    leaf: true
                }, {
                    text: '发件箱',
                    leaf: true
                }, {
                    text: '收件箱',
                    leaf: true
                }]
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            } ,{
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            }, {
                text: '消息管理',
                expanded: false,
                iconCls: 'x-fa fa-comment'
            }]
        }
    }
});