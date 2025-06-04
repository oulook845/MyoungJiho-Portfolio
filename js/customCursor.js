const customCursor = document.getElementById("customCursor");
const followCursor = document.getElementById("followCursor");
const hasLinkElems = document.querySelectorAll("a");

window.addEventListener("mousemove", function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  customCursor.style.left = `${mouseX}px`;
  customCursor.style.top = `${mouseY}px`;
  this.setTimeout(() => {
    followCursor.style.left = `${mouseX}px`;
    followCursor.style.top = `${mouseY}px`;
  }, 70);
});

// a 태그 hover시 스타일 변화
hasLinkElems.forEach((linkElem) => {
  linkElem.addEventListener("mouseenter", function () {
    customCursor.style.width = "3vw";
    customCursor.style.height = "3vw";
    followCursor.style.opacity = 0;
});
linkElem.addEventListener("mouseleave", function () {
    customCursor.style.width = "1vw";
    customCursor.style.height = "1vw";
    followCursor.style.opacity = 1;
  });
});
