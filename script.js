var count = getCookie('count');
        var arr = [];
        arr[0]='messages';
        for (var i=1; i <= count; i++){
            var work = getCookie('messages['+i+']');
            arr[i] = work.split(',');
        }
        for (var i=1; i<=count; i++)
            print_msg(arr[i][0],arr[i][1],arr[i][2]);
        function decodeURIComponentX( str ) {
            var out = '', arr, i = 0, l, x;
            arr = str.split(/(%(?:D0|D1)%.{2})/);
            for ( l = arr.length; i < l; i++ ) {
                try {
                    x = decodeURIComponent( arr[i] );
                } catch (e) {
                    x = arr[i];
                }
                out += x;
            }
            return out
        }
        function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponentX(matches[1]) : undefined;
        }
        /*if (document.cookie!=''){
            var loaded = document.getElementById("chat").innerHTML;
            document.getElementById("chat").innerHTML += getCookie('messages');
        }*/
        function setCookie (name, value, expires, path, domain, secure) {
            document.cookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        }
        function print_msg(time, nick, text){
            var chat_messages = document.getElementById("chat").innerHTML;
            var new_mes = '<div class="message"><span class="you">'+time+' <a href="#">'+nick+'</a>: </span>'+text+'</div>';
            document.getElementById("chat").innerHTML = chat_messages + new_mes;
            var objectDiv = document.getElementById("chat");
            objectDiv.scrollTop = objectDiv.scrollHeight;
        }
        function send(){
            var now = new Date();
            var ch = Number(now.getMonth())+1;
            dt = now.getFullYear()+'-'+ch+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
            var msg_text = document.getElementById("msg_text").value;
            var nick = document.getElementById("nickname").value;
            print_msg(dt,nick,msg_text);
            document.getElementById("msg_text").value = '';
            var count = +Number(getCookie('count'));
            count += 1;
            setCookie('count',count);
            setCookie('messages['+Number(count)+']',dt+','+nick+','+msg_text); 
        }       