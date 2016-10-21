require.config({
    baseUrl:"js/",
    paths:{
        sp:"swiper",
        sa:"swiper.animate1.0.2.min",
        sat:"swiper.animate-twice.min",
        tc:"touch"
    },
    shim:{
        'sp':{
            export:"sp"
        },
        'sa':{
            desp:["sp"],
            exports:"sa"
        },
        'sat':{
            desp:["sp"],
            exports:"sat"
        },
        'tc':{
            exports:"tc"
        }
    }
});

require(["sp","sa","sat","tc"],function (a,b,c,d) {
    var swiper =new a(".swiper-container",{
        direction:"vertical",
        loop:true,
        pagination:".swiper-pagination",
//                effect:"coverflow",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });

    var music = document.querySelector(".music");
    var musicC = document.querySelector(".control");
    var musicNote = document.querySelector(".control-after");
    var audio = document.querySelector("audio");
    music.className = "music stopped";
    musicC.addEventListener("click",function () {
        if(audio.paused){
            audio.play();
            music.className = "music";
            musicC.style.animationPlayState = "running";
        }else {
            audio.pause();
            music.className = "music stopped";
            musicC.style.animationPlayState = "paused";
        }
    })
})
