// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
pagination: {                       //ページネーション（ドット）
            el: '.swiper-pagination',
        },
        navigation: {                       //ナビゲーション（矢印）
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }});





// スムーズなスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 100;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}