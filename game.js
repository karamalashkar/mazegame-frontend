            var dragValue;

            function move(id){
                var element = document.getElementById('start');
                var end = document.getElementById('end');
                var pos=end.getBoundingClientRect();
                var x=pos.left;
                var y=pos.top;
                console.log(x);
                console.log(y);
            
                element.style.position="absolute";
                element.onmousedown=function(){
                    dragValue=element;
                }
            }

            document.onmouseup=function(e){
                dragValue=null;
            }

            document.onmousemove=function(e){
                var x = e.pageX;
                var y =e.pageY;

                var newposX = x - 450;
                var newposY = y - 150;

                dragValue.style.left= newposX + "px";
                dragValue.style.top= newposY + "px";

                if (x == 751 && y == 331.78125){
                    document.getElementById('status').innerHTML='You win';
                }
            }