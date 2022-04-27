$(document).ready(function(){
    // for(var i=1;i<=9;i++){
    //   $("body").load("hangman/"+i+".png");
    //   }
      var ran; 
      var string;
      var str =[];var str_sp=[];
      //TỪ ẨN
      var kq='';
      //MISS KEY
      var key_miss="";
      //SỐ LẦN SAI
      var sls=0;
      var kt=false;
      var t=false;
    function img_hm(){
      $('.zz').attr('src','hangman\\'+sls+'.png');
    }
    function print_info(){
    $('#KI_TU').text(kq);
    $('#quest').text(CD[ran]);
    $('#key_miss').text(key_miss);
    img_hm();
    }
    
    function game_lost(){
      $('#saiyori_hm').show();
      $('.end_game').show();
      $('.lost').show();
      ms.pause();
      ms.currentTime=0;
      end.play();
      
    }
    
    function xl_chuoi(){
      ran = Math.floor(Math.random() * SCD.length);
      string = SCD[ran];
      //TỪ ẨN
      kq='';
      //MISS KEY
      key_miss="";
      //SỐ LẦN SAI
      sls=0;
      kt=false;
      t=false;
      //CẮT CHUỖI
      str = string.split('');
      
      //ADMIN MỚI BIẾT
      for(var i=0;i<str.length;i++){
        str_sp[i]="_";
        kq+='_';
      }
   }
    function run(){
      var inp= $('#sx').val();
      if((inp!==''&&inp!==' '&&sls<9)||t==false&&sls<9){
        //KIỂM TRA INP CÓ CÂU NÀO GIỐNG KO
        for(var i = 0;i < str.length ; i++){
          if(inp==str[i]){
            str_sp[i]=str[i];
            kt=true;
          }
        }
        //ADMIN MỚI BIẾT
        kq='';
        for(var j = 0;j < str.length ; j++){
          kq+=str_sp[j];
        }
        
        //NẾU KO CÓ TỪ ĐÓ
        if(kt===false){
          key_miss+=inp;
          sls++;
        }
        //ADMIN CŨNG KO HIỂU
        print_info();
        //TRẢ KT BẰNG FALSE
        kt=false;
        
        //NẾU GHI ĐÚNG CÁC TỪ ẨN
        if(kq==string){
          $('.end_game').show();
          $('.finished').show();
          t=true;
        }
        //NẾU QUÁ NGU
        img_hm();
        if(sls>=8){
          kq=string;
          print_info();
          setTimeout(function(){ game_lost(); }, 800);
          
          // $('.back-han').css('z-index','-1');
        }
        $('#sx').val('');
      }
    }
    
    //NHẠC SAYORI CHẾT
    var end = new Audio();
    end.src="https://cdn.fbsbx.com/v/t59.3654-21/28274795_2036476066631983_967604360253014016_n.mp3/SayonaraDokiDokiLiteratureClubOST-VA-5250876.mp3?_nc_cat=103&_nc_ohc=vWNM45RWe8MAX-ZC6k4&_nc_ht=cdn.fbsbx.com&oh=681fe7b6421709ab69ad4c1ece3e5b3b&oe=5E3F66E6&dl=1&fbclid=IwAR3DMldkGurHWq9g-VhXKf1j0TUK3BnkBfrrxHl74usGfWj4mlrkaCq8_sA";
    end.type="audio/mp3";
    //NHẠC MỞ ĐẦu
    var ms = new Audio();
    ms.src="https://l.facebook.com/l.php?u=https%3A%2F%2Fcdn.fbsbx.com%2Fv%2Ft59.3654-21%2F23173719_371406616636849_6897071076208017408_n.mp3%2FDokiDokiLiteratureClubDokiDokiLiteratureClubOST-VA-5249498.mp3%3F_nc_cat%3D110%26_nc_ohc%3DrIha9G_GMqUAX8OSq1g%26_nc_ht%3Dcdn.fbsbx.com%26oh%3D40c627fa28cc70504ac4173dbc03aa8a%26oe%3D5E451D9E%26dl%3D1%26fbclid%3DIwAR0p5V023D3yK0Meocfkm4MZJmajPSqUlsaZ9JLLMpTrC-QIDVflrdfNOSY&h=AT2eMjVHMxmtyP77y6mQ8S2bbVdJU80SXfqAw_w2HFGdPbE2R8y_DBKzZ8cxxfI5f2Nhjk07qbut5RZrGLRhDB-llJlgTklFpW9t6EI8NZa2Q3CRwwAhR3m0qcVdB3HQIENZqCAQqQVQeBQ";
    ms.type="audio/mp3";
    ms.loop=true;
    
    //PHẦN JS CHẠY
      //MỞ NHẠC
      ms.play();
    xl_chuoi();
    print_info();
      //XL EVENT
    $('#sxx').click(function(){
      run();
    });
    $('#sx').on('keypress', function (e) {
       if(e.which === 13){
         run();
       }
    });
    //THÔNG BÁO KHI THẮNG HOẶC THUA
    $('#bt_ok').click(function(){
      $('#saiyori_hm').hide();
      $('.g_text').hide();
      $('.end_game').hide();
      $('.thong_bao').show(); 
    });
    //THÔNG BÁO CỦA LỜI NÓI ĐẦU
    $('#bt').click(function(){
        $('.loi_noi_dau').hide();
      });
      //PHẦN CONTINUTE
      $('#choose_yes').click(function(){
      $('.thong_bao').hide(); 
      xl_chuoi();
      print_info();
      //RESET NHẠC END
      end.pause();
      end.currentTime=0;
      ms.play();
    });
    $('#choose_no').click(function(){
      $('body').hide(); 
    });
    //TẮT NHẠC
     $("#off_music").click(function() {
        var x = document.getElementById("cc").checked;
         if( x===true) {
          ms.volume=0;
          end.volume=0;
          }else{
          ms.volume=1;
          end.volume=1;
             }
      });
  });