window.onload = function() {
  let mainV = document.querySelector('.main-v');
  let exV = document.querySelector('.exper-v');
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

  function exvideoPlay() {
    setTimeout(function() {
      exV.play();
    },1000);
  }

  function exvideoStop() {
    setTimeout(function() {
      exV.pause();
      exV.currentTime = 0;
    },500);
  }

  let intit1;
  let intit2;
  function activeTit() {
    intit1 = setTimeout(titFadeIn, 500, 'active-t1');
    intit2 = setTimeout(titFadeIn, 10000, 'active-t2');
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
  exV.addEventListener('ended', exvideoPlay);

  let slide8 = document.querySelector('.swiper-slide8 iframe');

  let container = document.querySelector('.container');
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
    if(nowPage === 4) {
      exvideoPlay();
    }
    if(nowPage !== 4) {
      exvideoStop();
    }
    if(nowPage === 8) {
      utvPlay();
    }
    if(nowPage !== 8) {
      utvStop();
    }
    if(nowPage === 12) {
      setTimeout(function() {
        scrollHide();
      },500);
    }
    if(nowPage !== 12) {
      setTimeout(function () {
        scrollActive();
      },500)
    }
  }

  pageCheck();
  function txtMotion(v) {
    container.setAttribute('data-page',v);
  }

  function utvPlay() {
    setTimeout(function() {
      slide8.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    },1000);
  }
  function utvStop() {
    setTimeout(function() {
      slide8.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    },500);
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

  let scrollDown = document.querySelector('.scroll-down');
  scrollDown.addEventListener('click', function() {
    swiper.slideTo(nowPage);
  });

  function scrollActive() {
    scrollDown.classList.add('active');
  }
  function scrollHide() {
    scrollDown.classList.remove('active');
  }
}
