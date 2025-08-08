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

  $(function () {
    $('#customFile').on('change', function () {
      const file = this.files[0];
      if (!file) return; 

      $('.file-name').text(file.name);
      $('.clear-file').show();
    });

    $('.clear-file').on('click', function () {
      const $input = $('#customFile');
      $input.val('');
      $('.file-name').text('선택된 파일 없음');
      $(this).hide();
    });
  });



$(function () {
  $.getJSON('js/universities.json', function (data) {
    const names = data.records.map(u => u.학교명);

    const fuse = new Fuse(names, {
      includeScore: true,
      threshold: 0.3
    });

    const $result = $('#result');
    const $search = $('#search');

    // 전체 이름을 먼저 렌더링
    function renderAll() {
      $result.empty();
      names.forEach(name => {
        $('<li>').text(name).appendTo($result);
      });
    }

    // 필터링 함수
    function renderFiltered(keyword) {
      const matches = fuse.search(keyword).map(m => m.item);
      $result.empty();
      matches.forEach(name => {
        $('<li>').text(name).appendTo($result);
      });
    }

    // 초기 전체 목록 출력
    renderAll();

    // 입력 시 필터링 or 전체 다시 표시
    $search.on('input', function () {
      const keyword = $(this).val().trim();
      if (keyword === "") {
        renderAll();
      } else {
        renderFiltered(keyword);
      }
    });

    // 클릭 시 input에 삽입
    $result.on('click', 'li', function () {
      $search.val($(this).text());
    });
  });
});

$(function () {
  $('#univBtn').on('click', function () {
    const val = $('#search').val().trim();
    if (val) {
      $('#affiliation').val(val);
    }
  });
});

$(function () {
  const $trigger = $('#beginnerImmersionInput');
  const $program = $('#programSelect');
  const $subject = $('#subjectSelect');

  const originalProgramOptions = $program.html();
  const originalSubjectOptions = $subject.html();

  $trigger.on('click', function () {
    const isActive = $(this).toggleClass('active').hasClass('active');

    if (isActive) {
      $program.prop('disabled', true).html('<option>-</option>');
      $subject.prop('disabled', true).html('<option>하늘도시</option>');
      $(this).val('초급 몰입형');
    } else {
      $program.prop('disabled', false).html(originalProgramOptions);
      $subject.prop('disabled', false).html(originalSubjectOptions);
      $(this).val('').attr('placeholder', '초급 몰입형 신청시 클릭해주세요');
    }
  });
});

$(function () {
  const $type = $('input[name="type"]'); // 유형
  const $level = $('input[name="type2"]'); // 수준
  const $program = $('#programSelect');
  const $subject = $('#subjectSelect');

  const originalProgramOptions = $program.html();
  const originalSubjectOptions = $subject.html();

  function updateProgramAndSubject() {
    const typeId = $('input[name="type"]:checked').attr('id');
    const levelId = $('input[name="type2"]:checked').attr('id');

    const isImmersionAndBeginner = (typeId === 'type2' && levelId === 'type3');

    if (isImmersionAndBeginner) {
      // 몰입형 + 초급일 때
      $program.prop('disabled', true).html('<option>-</option>');
      $subject.prop('disabled', true).html('<option value="하늘도시">하늘도시</option>');
    } else {
      // 그 외에는 원상복구
      $program.prop('disabled', false).html(originalProgramOptions);
      $subject.prop('disabled', false).html(originalSubjectOptions);
    }
  }

  $type.add($level).on('change', updateProgramAndSubject);
});