
var $$ = (function(){
    var ajax =  function(type,url,callback){
        var xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.send();
        console.log(url);

        xhr.onreadystatechange = function(){
            if(xhr.status==200&&xhr.readyState==4){
                callback(xhr.responseText)
            }
        }
    }

    return {
        http:ajax
    }
})();

export default $$;