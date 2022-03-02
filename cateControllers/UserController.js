// 模拟验证码发送接口
function rand(min,max){
    return Math.floor(Math.random()*(max-min)) + min
}
validatePhoneCode = [];

let = sendCodep = (phone) => {
    for(var item of validatePhoneCode){
        if(phone == item.phone){
            return true
        }
    }
    return false
}
sendCode = (req,res) => {
    let phone = req.query.phone;
    if(sendCodeP(phone)){
        res.send({
            'code':400,
            'msg':'已经发送过验证码,请稍后再发'
        })
    }
    let code = rand(1000,9999);
    validatePhoneCode.push({
        'phone':phone,
        'code':code
    })
    console.log(validatePhoneCode);
    res.send({
        'code' : 200,
        'msg' : '发送成功'
    })
    console.log(code);
}
module.exports = {
    sendCode
}