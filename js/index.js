window.onload = function () {


    // 1. 准备一套位置的配置数据，然后进行加载
    var config = [
        {
            "width": 200,
            height: 80,
            "top": 20,
            "left": -50,
            "opacity": 0.2,
            "zIndex": 2
        },
        {
            "width": 280,
            height: 112,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },
        {
            "width": 360,
            height: 144,
            "top": 100,
            "left": 150,
            "opacity": 1,
            "zIndex": 4
        },
        {
            width: 280,
            height: 112,
            top: 70,
            left: 390,
            opacity: 0.8,
            zIndex: 3
        },
        {
            "width": 200,
            height: 80,
            "top": 20,
            "left": 520,
            "opacity": 0.2,
            "zIndex": 2
        }
    ];
    render()
   function render(){
    var lis = document.querySelectorAll('ul li')
    lis.onclick = function(){
        console.log(100);
    }
    config.forEach(function(item,index){
        // console.log(lis[index]);
        $(lis[index]).animate(item,function(){
            // console.log(item);
            flag = true
        })
    })
   }

   var leftBox = document.querySelector('.arrow a:first-child')
   var rightBox = document.querySelector('.arrow a:last-child')
   var container = document.querySelector('.container')

   container.onmouseenter = function(){
    leftBox.style.display = 'block'
    rightBox.style.display = 'block'
   }

   container.onmouseleave = function(){
    leftBox.style.display = 'none'
    rightBox.style.display = 'none'
   }

   var flag = true
   rightBox.onclick = function(){
        if(flag){
            flag = false
            config.unshift(config.pop())
            render()
        }
   }
   leftBox.onclick =function(){
    if(flag){
        flag = false
        config.push(config.shift())
        render()
    }
   }
}