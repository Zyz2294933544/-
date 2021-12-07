var phone = document.getElementById('phone');
var pass  = document.getElementById('pass');

phone.onblur = function(){
    var pvalue = phone.value;
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if(pvalue == ''){
        alert('手机号码不能为空');   
        return false;
    }else if(pvalue.length <11){
        alert('你太短了');
        return false;
    }else if(!reg.test(pvalue)){
        alert('格式错误');
        return false;
    }
    return true;
}
pass.onblur = function(){
    var svalue = pass.value;
    var reg1 = /^[a-z0-9]+$/i;
    if(svalue == ''){
        alert('密码不能为空');
        return false;
    }else if(svalue.length <6){
        alert('你太短了');
        return false;
    }else if(!reg1.test(svalue)){
        alert('格式错误');
        return false;
    }
return true;
}

