const mysql = require('mysql')
module.exports = {
    // 数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'exapp',
        password:'dengkanglin1',
        database:'exapp'
    },
    // 链接数据库,使用mysql的连接池连接方式
    // 连接池对象
    sqlConnect:function(sql,sqlArr,callBack){
        var poll = mysql.createPool(this.config)
        poll.getConnection((err,conn)=>{
            console.log('1234');
            if(err){
                console.log("连接失败");
                return
            }
            // 事件驱动回调
            conn.query(sql,sqlArr,callBack);
            // 释放链接
            conn.release();
        })
    }

}