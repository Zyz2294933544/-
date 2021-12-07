function show() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('MicrosoftXMLHTTP');
    ajax_.open('get','./hot.json',true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if(ajax_.readyState == 4) {
            if(ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                showData(data);
            }
        } else {
            console.log('失败');
        }
    }
}
function showData(data1) {
    var str = '';
    for (var i = 0; i < 6;i++) {
        console.log(data1.Hot[i]);
        str += '<li>';

        str += '<div>';

        str += '<div class ="img">';
        str += '<img src="'+data1.Hot[i].img+'">';
        str += '</div>';

        str += '<div class ="text">';
        str += '<h3>'+data1.Hot[i].introduce+'</h3>';
        str += '<p>'+data1.Hot[i].house-type;
        str += '<strong>'+data1.Hot[i].total-prices+'</strong>';
        str += '</p>';
        str += '<p>'+data1.Hot[i].name;
        str += '<span>'+data1.Hot[i].price+'</span>';
        str += '</p>';
        str += '<p>';
        str += '<a href="#">'+data1.Hot[i].characteristic_1+'</a>';
        str += '</p>';
        str += '</div>';

        str += '</div>';
        str += '<span>'+'</span>';
        str += '<p>'+data1.Hot[i].recommend+'</p>';
        str += '</li>';
    }
    var ul = document.getElementById('list');
    ul.innerHTML = str;
}
show();