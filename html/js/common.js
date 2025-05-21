//alert modal 임시
function showAlert() {
  alert("준비중입니다.");
}

//aos 애니메이션
$(function() {
  AOS.init();
});

//tab
$(function(){
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

//최상단 스크롤
$(function() { 
 $('.topBtn').css('display','none');
 $(window).scroll(function() { if ($(this).scrollTop() > 300) { 
   $('.topBtn').fadeIn();
     } else { 
       $('.topBtn').fadeOut(); 
     } 
 });
 $('.topBtn').click(function(){
   $('html, body').animate({scrollTop:0},500);
 });
});

//메인 슬라이드
$(function(){
  var swiper = new Swiper(".mySwiper", {
     //기본 셋팅 
     loop: true, 
     //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 
     centeredSlides: true, 
     // 페이지 전환효과 slidesPerView효과와 같이 사용 불가 
     // effect: 'fade', 
     //자동 스크를링 
     autoplay: { 
       delay: 2500, 
       disableOnInteraction: false, 
      }, 
      //페이징 
      pagination: { 
        //페이지 기능 
        el: '.swiper-pagination', 
        //클릭 가능여부 
        clickable: true, 
      }, 
        //방향표 
        navigation: { 
        //다음페이지 설정 
        nextEl: '.swiper-button-next', 
        //이전페이지 설정 
        prevEl: '.swiper-button-prev', 
      }, 
    });
});


//bootstrap validation
$(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
});


  $(function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const formatted = `${year}년 ${month}월 ${date}일`;

    $('#todayDate').text(formatted);
  });