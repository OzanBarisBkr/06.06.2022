$(document).ready(function(){


    $(".search-bar").mouseenter(function(){
        $(".s-icon").css("color","#a3a3a3");
        $(".s-icon").css("background-color","inherit");  
    });

    $(".search-bar").mouseleave(function(){
        $(".s-icon").css("color","#000");    
    });
    
    let degbefore = 135;
    let degafter = 45;
    $(".test-link").mouseenter(function(){
        $(this).find("span").css({transform: 'rotate(' + degbefore + 'deg)'});
    });
    $(".test-link").mouseleave(function(){
        $(this).find("span").css({transform: 'rotate(' + degafter + 'deg)'});
    });

    $(".none-bar").click(function(){
        $(".none-navi").fadeIn(600);
    });
    $(".close-button").click(function(){
        $(".none-navi").css("display","none");
    });


    function sorulariGetir(param){
        $.getJSON('./test.json', {}, function(data) {
            var soruAdeti = data.sorular.length;
            console.log(soruAdeti);
            if(i < soruAdeti){
                var soru = data.sorular[i];
                var cevaplar = "";
                $(".soruCumlesi").html(soru.soru);

                $.each(soru.cevaplar, function(index, element){
                    cevaplar += '<div class="item">';
                    cevaplar += '<input type="radio" id="cevap'+index+'" name="cevap" value="'+index+'">';
                    cevaplar += '<label for="cevap'+index+'">'+element+'</label>';
                    cevaplar += '</div>';
                });
                $(".answers").html(cevaplar);
                i++;
            }else{
                $("#bitir").removeClass("d-none");
                $("#gec").addClass("d-none");
            };
        });
    };

    i=0;
    $(".test-link").click(function(){
        i=0;
        sorulariGetir();
        $("#bolum-3").addClass("d-none");
        $(".testKismi").removeClass("d-none");
        $("#bitir").addClass("d-none");
    });

    $("#gec").click(function(){
        sorulariGetir();
    });

    $("#bitir").click(function(){
        if(i>=3){
            i=0;
        };
        $("#bitir").addClass("d-none");
        $("#gec").removeClass("d-none");
        $("#bolum-3").removeClass("d-none");
        $(".testKismi").addClass("d-none");
    });



}); //document.ready-End
