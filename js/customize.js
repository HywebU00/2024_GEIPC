// -----  基本功能開關   ---------------------------------------------------
window.addEventListener('load', () => {
  topNav(); // 手機版顯示nav選單
  navSticky(); // 捲動時固定主選單
  xSlider('.language button', '.language ul'); //語系
  // fontSize(); // 全站字體
  fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  webSearch();

  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });

  // 手風琴功能
  // accordionFunction({
  //   target: '.accordion',
  //   openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
  //   autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
  //   openSwitch: true, // 是否可開合
  //   index: 0, // 預設開啟第幾個
  //   info: {
  //     open: '展開', // 收合時顯示
  //     close: '收合', // 展開時顯示
  //   },
  // });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    // autoplay: {
    //   delay: 5000,
    //   stopOnLastSlide: false,
    //   disableOnInteraction: true,
    // },
    // 切換點
    // pagination: {
    //   el: '.mpSlider .swiperDots',
    //   bulletElement: 'button',
    //   clickable: true,
    //   renderBullet: function (index, className) {
    //     return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
    //   },
    // },
    // 切換箭頭
    // navigation: {
    //   nextEl: '.mpSlider .nextSlider', //自行設定樣式
    //   prevEl: '.mpSlider .prevSlider', //自行設定樣式
    //   disabledClass: 'swiperArrow-disabled', //不可點選樣式
    // },

    on: {
      slideChangeTransitionStart: function () {
        let index = this.realIndex;
        const bannerInfo = document.querySelectorAll('.bannerInfo .info');
        const siblings = Array.prototype.filter.call(bannerInfo[index].parentNode.parentNode.children, (child) => {
          return child !== bannerInfo[index].parentNode;
        });
        siblings.forEach((content) => jsSlideUp(content.querySelector('.info')));
        jsSlideDown(bannerInfo[index]);

        siblings.forEach((content) => content.classList.remove('active'));
        bannerInfo[index].parentNode.classList.add('active');
      },
    },
  });

  const resourcesBox = new Swiper('.resourcesBox .swiper', {
    slidesPerView: 2.55, //顯示張數
    spaceBetween: 30,
    // 切換箭頭
    navigation: {
      nextEl: '.resourcesBox .next', //自行設定樣式
      prevEl: '.resourcesBox .prev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 2.55,
      },
    },
  });

  const cardBox = new Swiper('.cardBox .swiper', {
    slidesPerView: 2.55, //顯示張數
    spaceBetween: 30,
    // 切換箭頭
    navigation: {
      nextEl: '.cardBox .next', //自行設定樣式
      prevEl: '.cardBox .prev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 2.55,
      },
    },
  });

  const videoBox = new Swiper('.videoBox .swiper', {
    slidesPerView: 2.55, //顯示張數
    spaceBetween: 30,
    // 切換箭頭
    navigation: {
      nextEl: '.videoBox .next', //自行設定樣式
      prevEl: '.videoBox .prev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 2.55,
      },
    },
  });

  const projectBox = new Swiper('.projectBox .col .swiper', {
    slidesPerView: 2.55, //顯示張數
    spaceBetween: 30,
    // 切換箭頭
    navigation: {
      nextEl: '.projectBox .next', //自行設定樣式
      prevEl: '.projectBox .prev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1.3,
      },
      767: {
        slidesPerView: 2.3,
      },
      1000: {
        slidesPerView: 2.55,
      },
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 3,
    loop: false,
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .next', //自行設定樣式
      prevEl: '.adSlider .prev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    navigation: {
      nextEl: '.sliderFor .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.sliderFor .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });

  // banner切換
  const bannerInfo = document.querySelector('.bannerInfo');
  const bannerInfoBtn = document.querySelectorAll('.bannerInfo button');
  if (bannerInfo) {
    let bannerItem = document.querySelectorAll('.bannerInfo .item');
    jsSlideDown(bannerItem[0].querySelector('.info'));
    bannerItem[0].classList.add('active');
    bannerInfoBtn.forEach((item) => {
      item.addEventListener('click', () => {
        const siblings = Array.prototype.filter.call(item.parentNode.parentNode.children, (child) => {
          return child !== item.parentNode;
        });
        siblings.forEach((content) => jsSlideUp(content.querySelector('.info')));
        jsSlideDown(item.parentNode.querySelector('.info'));
        mpSlider.slideTo([...bannerItem].indexOf(item.parentNode));

        siblings.forEach((content) => content.classList.remove('active'));
        item.parentNode.classList.add('active');
      });
    });
  }

  // 地圖-計畫現況
  const mapBox = document.querySelector('.mapBox');
  const mapBoxI = document.querySelectorAll('.mapBox g');
  const mapBoxEl = document.querySelectorAll('.mapBox .mapInfo .el');
  const mapBoxA = document.querySelectorAll('.mapBox svg a');
  const islandsData = document.querySelectorAll('.islands .item');
  const cityData = document.querySelectorAll('.cityBox li');
  if (mapBox) {
    function mouseEvent(e, classInfo) {
      e.preventDefault();
      let className = e.target.parentNode.dataset.class;
      let mainData = document.querySelector(`.mapBox svg [data-class*="${className}"]`);
      let infoData = document.querySelector(`.mapBox .mapInfo [data-class*="${className}"]`);
      let islandsInfoData = document.querySelector(`.mapBox .islands [data-class*="${className}"]`);
      let cityInfoData = document.querySelector(`.mapBox .cityBox [data-class*="${className}"]`);
      //main
      if (infoData) {
        const siblings = Array.prototype.filter.call(infoData.parentNode.children, (child) => {
          return child !== infoData;
        });
        siblings.forEach((content) => content.classList.remove(classInfo));
        infoData.classList.toggle(classInfo);

        const siblingsMap = Array.prototype.filter.call(mainData.parentNode.children, (child) => {
          return child !== mainData;
        });
        siblingsMap.forEach((content) => content.classList.remove(classInfo));
        mainData.classList.toggle(classInfo);
      }

      //islands
      if (islandsInfoData) {
        const islandsOther = Array.prototype.filter.call(islandsInfoData.parentNode.children, (child) => {
          return child !== islandsInfoData;
        });
        islandsOther.forEach((content) => content.classList.remove(classInfo));
        islandsInfoData.classList.toggle(classInfo);
      }

      //city
      if (cityData) {
        const cityOther = Array.prototype.filter.call(cityInfoData.parentNode.children, (child) => {
          return child !== cityInfoData;
        });
        cityOther.forEach((content) => content.classList.remove(classInfo));
        cityInfoData.classList.toggle(classInfo);
      }
      //other
      const other = Array.prototype.filter.call(e.target.parentNode.parentNode.children, (child) => {
        return child !== e.target.parentNode;
      });

      other.forEach((content) => content.classList.remove(classInfo));
    }

    // 外島
    islandsData.forEach((item) => {
      item.addEventListener('click', (e) => {
        mouseEvent(e, 'clickActive');
        mapBoxA.forEach((content) => content.classList.remove('clickActive'));
        mapBoxEl.forEach((content) => content.classList.remove('clickActive'));
      });
      item.addEventListener('mouseover', (e) => {
        mouseEvent(e, 'active');
      });
      item.addEventListener('mouseleave', (e) => {
        mapBox.querySelectorAll('.active').forEach((content) => content.classList.remove('active'));
      });
    });

    //本島
    mapBoxA.forEach((item) => {
      item.addEventListener('click', (e) => {
        mouseEvent(e, 'clickActive');
        islandsData.forEach((content) => content.classList.remove('clickActive'));
      });
      item.addEventListener('mouseover', (e) => {
        mouseEvent(e, 'active');
      });
      item.addEventListener('mouseleave', (e) => {
        mapBox.querySelectorAll('.active').forEach((content) => content.classList.remove('active'));
      });
    });

    // 地圖-計畫現況-縣市
    cityData.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        let checkAll = mapBox.querySelectorAll('.clickActive').length;
        index > 0 && mouseEvent(e, 'clickActive');
        if (index === 0 && checkAll <= 3) {
          mapBoxI.forEach((content) => content.classList.add('clickActive'));
          mapBoxEl.forEach((content) => content.classList.add('clickActive'));
          cityData.forEach((content) => content.classList.add('clickActive'));
          islandsData.forEach((content) => content.classList.add('clickActive'));
        } else if (index === 0 && checkAll > 3) {
          mapBoxI.forEach((content) => content.classList.remove('clickActive'));
          mapBoxEl.forEach((content) => content.classList.remove('clickActive'));
          cityData.forEach((content) => content.classList.remove('clickActive'));
          islandsData.forEach((content) => content.classList.remove('clickActive'));
        }
      });
      item.addEventListener('mouseover', (e) => {
        index > 0 && mouseEvent(e, 'active');
      });
      item.addEventListener('mouseleave', (e) => {
        mapBox.querySelectorAll('.active').forEach((content) => content.classList.remove('active'));
      });
    });

    mapBox.addEventListener('mouseleave', (e) => {
      mapBox.querySelectorAll('.active').forEach((content) => content.classList.remove('active'));
    });
  }

  function checkData() {}
  cityData.forEach((item) => {
    item.addEventListener('click', (e) => {
      checkData();
    });
  });
})();
