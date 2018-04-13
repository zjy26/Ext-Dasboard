    var t = null;
    t = setTimeout(time,1000);//開始运行
    function time()
    {
        clearTimeout(t);//清除定时器
        dt = new Date();
        var h=dt.getHours();//获取时
        var m=dt.getMinutes();//获取分
        if(m<10){
           m="0"+m;
        }
        var s=dt.getSeconds();//获取秒

        document.getElementById("showTime").innerHTML =  h + ":" + m;
        t = setTimeout(time,1000); //设定定时器，循环运行
    };


var HomePanel = Ext.Container({
        layout: {
            type: 'hbox',
        },

        items: [
               {
            xtype: 'widget-a',
            width: 150,
            height: 150,
            margin: 20,
            containerColor: 'green',
            items: [{
                xtype: 'component',
                id: 'showTime'
            }, {
                xtype: 'label',
                text: (new Date()).toLocaleDateString() + '  周' + "日一二三四五六".charAt(new Date().getDay())
            }],
        },
         {
            xtype: 'widget-b',
            width: 200,
            margin: 20,
            containerColor: 'red',
            data: {
                amount: 244,
                type: 'Files',
                icon: 'file-text'
            }
        }, {
            xtype: 'wizardform',
            cls: 'wizardform shadow',
            margin: 20,
            width: 520
        }]
});