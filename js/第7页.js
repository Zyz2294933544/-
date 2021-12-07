var phone = document.getElementById('phone');
var code1 = document.getElementById('code1');
var pass = document.getElementById('pass');
var but = document.getElementsByClassName('but')[0];
phone.onfocus = function () {
    phone.value = '';

}
phone.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    var pvalue = phone.value;
    if (pvalue == '') {
       alert('不能为空');
        return false;
    }else if (pvalue.length < 11) {
        alert('长度不足');
        return false;
    } else if (!reg.test(pvalue)) {
        alert('格式错误');
        return false;
    }
    return true;
}
code1.onfocus = function () {
    code1.value = '';
}
code1.onblur = function () {
    var cvalue = code1.value;
    var reg1 = /^[a-z0-9]+$/i;
    if (cvalue == '') {
        alert('不能为空')
        return false;
    } else if (cvalue.length < 4) {
        alert('太短了');
        return false;
    } else if (!reg1.test(cvalue)) {
        alert('格式错误');
        return false;
    }
    return true;
}
pass.onfocus = function () {
    pass.value = '';
}
pass.onblur = function () {
    var pvalue1 = pass.value;
    var reg2 = /^[a-z0-9]+$/i;
    if (pvalue1 == '') {
        alert('不能为空');
        return false;
    } else if (pvalue1.length < 6) {
        alert('太短了');
        return false;
    } else if (!reg2.test(pvalue1)) {
        alert('格式错误');
        return false;
    }
    pass.type = 'password';
    return true;
}
function sub() {
    if (phone.onblur()  && pass.onblur()  && code1.onblur() ) {
        alert('注册成功');
        phone.value = '';
        pass.value = '';
        code1.value = '';
    }
}