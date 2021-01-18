$(function(){
    // main layout
    $("header nav #gnb li button").click(function(){
        var anchor_loc = $(this).parent('li').index();
        if(anchor_loc == 0){
            $("html,body").animate({
                scrollTop : $(".index2").offset().top
            }, 300);
        }
        if(anchor_loc == 1){
            $("html,body").animate({
                scrollTop : $(".index3").offset().top
            }, 300);
        }
        if(anchor_loc == 2){
            $("html,body").animate({
                scrollTop : $(".index4").offset().top + 100
            }, 300);
        }
        if(anchor_loc == 3){
            $("html,body").animate({
                scrollTop : $(".index5").offset().top - 100
            }, 300);
        }
    });

    $('.goContact').click(function(){
        $("html,body").animate({
            scrollTop : $(".index5").offset().top - 100
        }, 380);
    })

    // business
    $('.index3 .contsVisual').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        fade: true,
        speed: 1500,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1041,
                settings: {
                    speed:800
                }
            }
        ]
    });


    // popup
    $('.pop_wrap .popLayout .btn_popClose').click(function(){
        $('.pop_wrap').css('display','none');
        $('#dim').removeClass('on');
    })

    $(window).bind('resize load', function(){
        $(".pop_wrap .popInner").css({
            "max-height": $(window).height() * 0.7 - $(".popTit").height() 
        });
    });


    $('.btn_consulting').click(function(){
        $('#dim').addClass('on');
        $('.pop_consuslting').css('display','block');
    });

    $('.btn_untact').click(function(){
        $('#dim').addClass('on');
        $('.pop_untact').css('display','block');
    });

    $('.btn_hrd').click(function(){
        $('#dim').addClass('on');
        $('.pop_hrd').css('display','block');
    });

    $('.btn_industry').click(function(){
        $('#dim').addClass('on');
        $('.pop_industry').css('display','block');
    });

    // animation
    

    $(window).scroll(function(){
        var viewP = $(window).outerHeight();
        var scrollT = $(window).scrollTop();
        var bottomP = viewP + scrollT ;
        var index3_t = $('.index3').offset().top;
        var index4_t1 = $('.index4 .tit').offset().top;
        var index4_t2 = $('.index4 .client_list>li.list1').offset().top;
        var index4_t3 = $('.index4 .client_list>li.list2').offset().top;
        var index4_t4 = $('.index4 .client_list>li.list3').offset().top;
        var index5_t = $('.index5').offset().top;
        var index6_t = $('.section6').offset().top;

        console.log(bottomP)

        if(bottomP > index3_t + 70){
            $('.index3').addClass('ani');
            $('.index3 .contsVisual .unit .visual_txt .inner').addClass('ani');
        }

        if(bottomP > index4_t1 + 100){
            $('.index4 .tit').addClass('ani');
        }

        if(bottomP > index4_t2 + 70){
            $('.index4 .client_list>li.list1').addClass('ani');
        }

        if(bottomP > index4_t3 + 70){
            $('.index4 .client_list>li.list2').addClass('ani');
        }

        if(bottomP > index4_t4 + 70){
            $('.index4 .client_list>li.list3').addClass('ani');
        }

        if(bottomP > index5_t + 100){
            $('.index5 .inner').addClass('ani');
            $('.index5 .mapArea').addClass('ani');
        } 

        if(bottomP > index6_t + 90){
            $('.section6 .inner').addClass('ani');
        } 
    });
})



