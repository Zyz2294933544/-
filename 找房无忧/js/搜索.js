    
 var oajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
 //2.
 oajax.open('get','./hot.json',true);
 //3.
 oajax.send();
 //4.
 oajax.onreadystatechange = function() {
     if(oajax.readyState == 4) {
         if(oajax.status == 200) {
             console.log(oajax.responseText);
             var data1 = JSON.parse(oajax.responseText);
            
             render_html(data1);
         }
     }
 }
 function  render_html(data1) {
     
      //字符串拼接
     var str = '';
     for(var i = 0; i < 6;i++) {
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
     
document.getElementById("list").innerHTML = str;
 }