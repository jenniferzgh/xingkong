window.onload=function(){
     var container=document.getElementById('container');
     var list=document.getElementById('list');
     var rolling_text3=document.getElementById('rolling_text3');
     var rolling_text2=document.getElementById('rolling_text2');
     var rolling_text1=document.getElementById('rolling_text1');
     var pref=document.getElementById('pref');
     var next=document.getElementById('next');
     var index=1;
     var timer;

    
 <!--切换  点击左右箭头时图片更换显示 方法是改变left的值-->
  function animate(offset)
  {
      var newleft=parseInt(list.style.left)+offset ;  
      var time=400;
      var interval=10;
      var speed=offset/(time/interval);
      

      
      function  go(){
          if((speed<0&& parseInt(list.style.left)>newleft)||(speed>0&& parseInt(list.style.left)<newleft))
              {
                   list.style.left=parseInt( list.style.left)+speed+'px';
                   setTimeout(go,interval);
              }
          else{
                  list.style.left=newleft +'px';
                  <!--无限滚动 方法是归位-->
                  if(newleft<-3000){list.style.left=-1000+'px';}
                  if(newleft>-1000){list.style.left=-3000+'px';}
             }
      }



       go();    <!--如果不在这里调用，函数将不会被执行-->
 }
     
    <!--点击事件时触发事件-->
     next.onclick=function () {
      if(index==3){index=1;}
       else{ index += 1;}
      
      animate(-1000);
     }


     pref.onclick=function () { 
       if(index==1){index=3;}
       else{ index -= 1;}
      animate(1000);}

  

 

}  