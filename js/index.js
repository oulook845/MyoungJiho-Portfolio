import nonLinkEvent from "./common.js";
nonLinkEvent(); // 링크 없는 a태그에 기본 이벤트 제거

/* dom 요소 변수로 지정 */
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

/* .bgTrans = createCoding, cloneCoding, learning */
const bgTransElems = document.querySelectorAll(".bgTrans");

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
  clone_txts = clone_pageNumber.querySelectorAll(".txt span");
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

/* visual GSAP 영역 #################### */
// 글자 차례대로 올라오기
splitTextElem.forEach((text, idx) => {
  gsap.to(text, {
    duration: 0.75,
    y: 0,
    delay: idx * 0.1,
  });
});
// scrollTrigger ( font-size )
gsap.to(logoElem, {
  scrollTrigger: {
    trigger: visualElem,
    start: " top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    // markers: true,
  },
  fontSize: "140px",
  marginBottom: "50px",
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

bgTransElems.forEach((item) => {
  create_tl.to(item, { opacity: 1 }, 0); // 0은 timeline의 시작점에 동시에 실행
});
create_tl.to(bgWrapElem, { backgroundColor: "#fff" }, 0);
create_tl.to(bgImgElem, { opacity: 0 }, 0);

/* Scroll Event 영역 #################### */
window.addEventListener("scroll", function () {
  let currentScroll = Math.floor(window.scrollY);
  //   console.log(currentScroll);

  /* 현재 스크롤이 0 이 아닐경우 */
  if (currentScroll > 0) {
    introElem.style.height = "70px";
  } else {
    introElem.style.height = 0;
  }

  /* aboutMe 영역 애니메이션 */
  if (aboutElem && currentScroll >= aboutElem.offsetTop - window.innerHeight / 2) {
    /* about me 영역이 화면에 들어왔을 때 */
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
    this.setTimeout(() => {
      skillList.forEach((list, idx) => {
        list.style.opacity = 1;
        list.style.transitionDelay = `${idx * 0.25}s`;
      });
    }, 700);
  }

  /* create coding 영역이 script #################### */
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
  /* Learning 영역 Page Number script #################### */
  if (learnElem && currentScroll >= learnElem.offsetTop - window.innerHeight / 3) {
    /* Learning 영역이 화면에 들어왔을 때 */
    learn_num.style.transform = "translateY(-100%)";
    learn_txts.forEach((txt, idx) => {
      txt.style.transitionDelay = `${idx * 0.05}s`;
      txt.style.transform = "translateY(0)";
    });
  }
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
  if (footerElem && currentScroll >= footerElem.offsetTop - 100) {
    footer_txts.forEach((txt, idx) => {
      txt.style.transitionDelay = `${idx * 0.1}s`;
      txt.style.opacity = 1;
    });
  }
});
