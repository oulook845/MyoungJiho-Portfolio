import nonLinkEvent from "./common.js";
nonLinkEvent(); // 링크 없는 a태그에 기본 이벤트 제거

/* media */
const tablet_mediaQuery = 1440;
const mobile_mediaQuery = 596;

/* dom 요소 변수로 지정 */
const headerElem = document.getElementById("header"),
  gnbElem = document.getElementById("gnb"),
  gnb_UlElem = document.getElementById("gnb-ul"),
  gnb_UlList = gnb_UlElem.querySelectorAll("li");

const bgWrapElem = document.getElementById("bgWrap"),
  bgImgElem = bgWrapElem.querySelector(".bgImg");

/* visual element */
const visualElem = document.getElementById("visual"),
  logoElem = document.getElementById("logo"),
  splitTextElem = logoElem.querySelectorAll("span"),
  introElem = visualElem.querySelector(".intro");
/* about me element */
const aboutElem = document.getElementById("aboutMe"),
  titleElem = aboutElem.querySelector(".title"),
  titleSpanElem = titleElem.querySelectorAll("span"),
  nameElem = aboutElem.querySelector(".name"),
  nameSpanElem = nameElem.querySelector("span"),
  lineElem = aboutElem.querySelector(".line"),
  descElem = aboutElem.querySelector(".desc"),
  descSpanElem = descElem.querySelector("span"),
  skillWrapElem = document.getElementById("skillWrap"),
  skillList = skillWrapElem.querySelectorAll(".skillList");

/* create coding element */
const createElem = document.getElementById("createCoding"),
  creat_txtSpan = createElem.querySelectorAll(".txtBox span"),
  creat_pageNumber = createElem.querySelector(".pageNumber_wrap"),
  creat_num = creat_pageNumber.querySelector(".transNum"),
  creat_txts = creat_pageNumber.querySelectorAll(".txt span");
/* clone coding element */
const cloneElem = document.getElementById("cloneCoding"),
  clone_pageNumber = cloneElem.querySelector(".pageNumber_wrap"),
  clone_num = clone_pageNumber.querySelector(".transNum"),
  clone_txts = clone_pageNumber.querySelectorAll(".txt span"),
  clone_codeWrap = document.getElementById("cloneCode_wrap"),
  clone_codeList = clone_codeWrap.querySelectorAll("li");
/* learning list coding element */
const learnElem = document.getElementById("learningList"),
  learn_pageNumber = learnElem.querySelector(".pageNumber_wrap"),
  learn_num = learn_pageNumber.querySelector(".transNum"),
  learn_txts = learn_pageNumber.querySelectorAll(".txt span"),
  learning_wrap = document.getElementById("leaningList"),
  learning_list = learning_wrap.querySelectorAll("li");
/* footer element */
const footerElem = document.getElementById("footer"),
  footer_title = footerElem.querySelector(".title"),
  footer_titleSpans = footer_title.querySelectorAll("span"),
  footer_txtBox = footerElem.querySelector(".txtBox"),
  footer_txts = footer_txtBox.querySelectorAll("p");

/* gnb 클릭시 페이지 이동 */
gnb_UlList.forEach((liElem) => {
  liElem.addEventListener("click", function (e) {
    e.preventDefault();
    lenis.stop();
    setTimeout(function () {
      lenis.start(); // Lenis 스크롤 재시작
    }, 100); // 1초 후 재시작 (원하는 시간으로 조절)

    let link = this.querySelector("a").getAttribute("href");
    let targetElem = document.querySelector(link);
    if (targetElem) {
      targetElem.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* GSAP script 시작 #################### */
gsap.registerPlugin(ScrollTrigger);
/* main GSAP 영역 #################### */
// bgImg 크기, 각도 변화
let bgImg_transfrom = "translate(-50%, -50%)";
bgImgElem.style.transform = `${bgImg_transfrom} rotate(140deg)`;
bgImgElem.style.width = "400%";
bgImgElem.style.height = "400vh";

/* visual GSAP 영역 #################### */
//  logo scrollTrigger ( font-size )
let visual_logo = gsap.matchMedia();
visual_logo.add("(min-width: 1440px)", () => {
  const visual_tl = gsap.timeline({
    scrollTrigger: {
      trigger: visualElem,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  });
  visual_tl.to(logoElem, {
    fontSize: "8.75rem",
    marginBottom: "3.25rem",
  });
});

// 글자 차례대로 올라오기
splitTextElem.forEach((text, idx) => {
  gsap.to(text, {
    duration: 0.75,
    y: 0,
    delay: idx * 0.1,
  });
});

/* createCoding GSAP 영역 #################### */
let innerHeight_half = window.innerHeight / 2;

const create_tl = gsap.timeline({
  scrollTrigger: {
    trigger: createElem,
    start: `top ${innerHeight_half}`,
    end: "top top",
    scrub: true,
  },
});

create_tl.to(bgWrapElem, { backgroundColor: "#fff" }, 0);
create_tl.to(bgImgElem, { opacity: 0 }, 0);

/* reize Event 영역 #################### */
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  // 리사이즈가 끝난 후에만 실행
  resizeTimer = setTimeout(function () {
    location.reload(); // 새로고침
  }, 200); // 200ms 후 실행
});

/* Scroll Event 영역 #################### */
/* 디바이스 구분 */
let deviceMedie = window.outerWidth;
if (deviceMedie > tablet_mediaQuery) {
  // 데스크탑(PC) 전용 스크롤 이벤트
  window.addEventListener("scroll", function () {
    let currentScroll = Math.floor(window.scrollY);
    /* 현재 스크롤이 0 일 경우 */
    if (currentScroll <= 0) {
      introElem.style.height = 0;
      bgImgElem.style.top = "50%";
      bgImgElem.style.left = "50%";
      bgImgElem.style.transform = `${bgImg_transfrom} rotate(140deg)`;
    }
    /* 현재 스크롤이 0 이 아닐경우 */
    if (currentScroll > 0) {
      introElem.style.height = "70px";
      bgImgElem.style.width = "400%";
      bgImgElem.style.height = "400vh";
      bgImgElem.style.top = "50%";
      bgImgElem.style.left = 0;
      bgImgElem.style.transform = `${bgImg_transfrom} rotate(0deg)`;
    }

    /* aboutMe 영역 애니메이션 #################### */
    if (aboutElem && currentScroll >= aboutElem.offsetTop - window.innerHeight / 2) {
      // #bgWrap 요소
      bgImgElem.style.left = "50%";
      bgImgElem.style.top = "120%";
      bgImgElem.style.transform = `${bgImg_transfrom} rotate(-90deg)`;
      bgImgElem.style.width = "200%";
      bgImgElem.style.height = "200vh";
    }
  });
} else {
  // 모바일(터치 디바이스) 전용 스크롤 이벤트
  window.addEventListener("scroll", function () {});
}

/* 스크롤 이벤트 */
let lastScrollTime = 0;
const throttleDelay = 100; // 100ms마다 한 번씩만 실행
let lastScrollY = Number();
window.addEventListener("scroll", function () {
  const now = Date.now();
  // scroll 일정 시간마다 감지
  if (now - lastScrollTime > throttleDelay) {
    lastScrollTime = now;
    let currentScroll = Math.floor(window.scrollY);
    // console.log(currentScroll);

    /* 스크롤 방향 event */
    if (currentScroll > lastScrollY) {
      // 아래로 스크롤 (Scroll Down)
      gnbElem.style.transform = "translateY(-100%)";
    } else if (currentScroll < lastScrollY) {
      // 위로 스크롤 (Scroll Up)
      gnbElem.style.transform = "translateY(0%)";
    }
    lastScrollY = currentScroll;

    /* aboutMe 영역 애니메이션 #################### */
    if (aboutElem && currentScroll >= aboutElem.offsetTop - window.innerHeight / 2) {
      /* about me 영역이 화면에 들어왔을 때 */
      // .txtBox 요소
      titleSpanElem.forEach((span, idx) => {
        span.style.transitionDelay = `${idx * 0.1}s`;
        span.style.transform = "translateY(0)";
      });
      lineElem.style.width = "100%";
      lineElem.style.transitionDelay = `0.5s`;
      nameSpanElem.style.transform = "translateY(0)";
      nameSpanElem.style.transitionDelay = `0.3s`;
      descSpanElem.style.transform = "translateY(0)";
      descSpanElem.style.transitionDelay = `0.5s`;
      // #skillWrap 요소
      this.setTimeout(() => {
        skillList.forEach((list, idx) => {
          list.style.opacity = 1;
          list.style.transitionDelay = `${idx * 0.25}s`;
        });
      }, 700);
    }

    /* create coding 영역 script #################### */
    if (createElem && currentScroll >= createElem.offsetTop - window.innerHeight / 4) {
      /* create coding 영역이 화면에 들어왔을 때 */
      creat_txtSpan.forEach((span, idx) => {
        span.style.opacity = 1;
        span.style.transitionDelay = `${idx * 0.25}s`;
      });
    }
    /* CreateCoding 영역 Page Number 애니메이션 */
    if (createElem && currentScroll >= createElem.offsetTop + window.innerHeight / 3) {
      creat_num.style.transform = "translateY(-100%)";
      creat_txts.forEach((txt, idx) => {
        txt.style.transitionDelay = `${idx * 0.05}s`;
        txt.style.transform = "translateY(0)";
      });
    }

    /* CloneCoding 영역 Page Number script #################### */
    if (cloneElem && currentScroll >= cloneElem.offsetTop - window.innerHeight / 3) {
      /* CloneCoding 영역이 화면에 들어왔을 때 */
      clone_num.style.transform = "translateY(-100%)";
      clone_txts.forEach((txt, idx) => {
        txt.style.transitionDelay = `${idx * 0.05}s`;
        txt.style.transform = "translateY(0)";
      });
    }
    // cloneCoding list 하나씩 보이기
    if (cloneElem && currentScroll >= cloneElem.offsetTop) {
      clone_codeList.forEach((liElem, idx) => {
        liElem.style.transitionDelay = `${idx * 0.25}s`;
        liElem.style.opacity = 1;
      });
    }

    /* Learning 영역 Page Number script #################### */
    if (learnElem && currentScroll >= learnElem.offsetTop - window.innerHeight / 3) {
      /* Learning 영역이 화면에 들어왔을 때 */
      learn_num.style.transform = "translateY(-100%)";
      learn_txts.forEach((txt, idx) => {
        txt.style.transitionDelay = `${idx * 0.05}s`;
        txt.style.transform = "translateY(0)";
      });
    }
    // learning list 하나씩 보이기
    if (learnElem && currentScroll >= learnElem.offsetTop) {
      learning_list.forEach((liElem, idx) => {
        liElem.style.transitionDelay = `${idx * 0.25}s`;
        liElem.style.opacity = 1;
      });
    }

    /* footer script #################### */
    if (footerElem && currentScroll >= footerElem.offsetTop - window.innerHeight / 2) {
      /* footer 영역이 화면에 들어왔을 때 */
      footer_titleSpans.forEach((span, idx) => {
        span.style.transitionDelay = `${idx * 0.1}s`;
        span.style.opacity = 1;
      });
    }
    // footer contact 정보 하나씩 보이기
    if (footerElem && currentScroll >= footerElem.offsetTop - 100) {
      footer_txts.forEach((txt, idx) => {
        txt.style.transitionDelay = `${idx * 0.1}s`;
        txt.style.opacity = 1;
      });
    }
  }
});
