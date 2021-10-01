window.onload = function() {
  // 영상재생
  let mainV = document.querySelector('.main-v');
  let slide1 = document.querySelector('.swiper-slide1');

  function videoPlay() {
    mainV.play();
    activeTit();
    titFadeOut();
  }
  
  function videoStop() {
    mainV.pause();
    setTimeout(function() {
      mainV.currentTime = 0;
    },500)
    titFadeOut();
  }

  let intit1;
  let intit2;
  function activeTit() {
    intit1 = setTimeout(titFadeIn, 5000, 'active-t1');
    intit2 = setTimeout(titFadeIn, 11000, 'active-t2');
  }

  function titFadeIn(v) {
    slide1.classList.add(v);
    // typeWriter1(v);
    // typeWriter2(v);
  }
  function titFadeOut() {
    setTimeout(function() {
      slide1.classList.remove('active-t1');
      // title1.innerHTML = '';
    },9000);
    setTimeout(function() {
      slide1.classList.remove('active-t2');
      // title2.innerHTML = '';
    },15000);
  }

  function clear() {
    clearTimeout(intit1);
    clearTimeout(intit2);
  }

  mainV.addEventListener('ended', pageCheck);


  let pageSwiper = document.querySelector('.pageSwiper');
  let nowPage = 1;
  swiper.on('slideChange', function() {
    nowPage = swiper.realIndex + 1;
    pageCheck();
    txtMotion(nowPage);
  });
  function pageCheck() {
    if(nowPage !== 1) {
      videoStop();
      clear();
    }
    if(nowPage === 1) {
      videoPlay();
    }
  }

  pageCheck();
  function txtMotion(v) {
    pageSwiper.setAttribute('data-page',v);
  }

  // let i = 0;
  // let txt1 = '#훅가고싶니?';
  // let txt2 = '#설탕을끊자';
  // let spd = 200;
  //
  // let title1 = document.querySelector('.swiper-slide1 .tit1');
  // let title2 = document.querySelector('.swiper-slide1 .tit2');
  //
  // function typeWriter1(v) {
  //   if (v !== 'active-t1') return;
  //   if (i < txt1.length) {
  //     title1.innerHTML += txt1.charAt(i);
  //     i++;
  //     setTimeout(typeWriter1, spd);
  //   }
  // }
  // function typeWriter2(v) {
  //   if(v !== 'active-v2') return;
  //   if (i < txt1.length) {
  //     title2.innerHTML += txt2.charAt(i);
  //     i++;
  //     setTimeout(typeWriter2, spd);
  //   }
  // }

}
