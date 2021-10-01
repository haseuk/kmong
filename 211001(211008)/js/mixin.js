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
  }
  function titFadeOut() {
    setTimeout(function() {
      slide1.classList.remove('active-t1');
    },9000);
    setTimeout(function() {
      slide1.classList.remove('active-t2');
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

}
