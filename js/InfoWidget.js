Ext.define('Admin.InfoWidget',{
	extend: 'Ext.panel.Panel',

	alias: 'widget.infowidget',

	cls:'info-card-item',

	//cls:'info-card-item info-card-large-wrap',    //引入css以改变所显示内容的样式


    containerColor: '',

    title: '',

    data: {},

    tpl: '',

    initComponent: function(){
    	var me = this;

    	if (me.containerColor) {
            me.addCls(me.containerColor);
    	}

        me.callParent(arguments);
    }
});