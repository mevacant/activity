$.fn.serializeObject = function() {  
    var o = {};  
    var a = this.serializeArray();  
    $.each(a, function() {  
        if (o[this.name]) {  
            if (!o[this.name].push) {  
                o[this.name] = [ o[this.name] ];  
            }  
            o[this.name].push(this.value || '');  
        } else {  
            o[this.name] = this.value || '';  
        }  
    });  
    return o;  
}

function showError(dom,msg){
    dom.css("visibility","visible");
    dom.text(msg)
}


function invoke(path,param,callback){
    var serverUrl = "http://127.0.0.1:8003";
    var url = serverUrl + path
    console.log("request url:%s, param:%s",url,param);
    $.ajax({ 
        url: url, 
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: param, 
        timeout: 6000,
        success: function(res){
            alert(res)
        },
        error: function(err){
            console.log(JSON.stringify(err));
            alert("请求失败，稍后再试");
        }

    });
}