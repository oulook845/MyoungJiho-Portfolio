export default function nonLinkEvent() {
  const noneLink = document.querySelectorAll("a[href='#");
  noneLink.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
}