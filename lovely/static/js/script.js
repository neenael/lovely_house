var hero_swiper = new Swiper(".hero__swiper", {
  effect: "cards",
  grabCursor: true,
  navigation: {
      nextEl: ".hero__swiper .swiper-button-next",
      prevEl: ".hero__swiper .swiper-button-prev",
  },
});


const swiper = new Swiper('.feedback__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  slidesPerGroup: 2,

  // If we need pagination
  pagination: {
      el: '.feedback__swiper__arrows .swiper-pagination',
      dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.feedback__swiper__arrows .swiper-button-next',
      prevEl: '.feedback__swiper__arrows .swiper-button-prev',
  },


  breakpoints: {

    768:{
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },


});




const copyButton = document.getElementById("copy_telephone");
copyButton.addEventListener("click", function () {
  var textToCopy = document.getElementById("telephone").innerText;
  copyToClipboard(textToCopy);
});

function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  console.log(text)
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
copyButton.addEventListener("click", function () {
  copyButton.classList.add("copied")
})


window.addEventListener("DOMContentLoaded", () => {
  const btn = copyButton;
  var doneTimeout = null,
      resetTimeout = null;

  if (btn) {
      btn.addEventListener("click", function () {
          const runClass = "btn--running";
          const doneClass = "btn--done";
          // `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
          const submitDuration = 0;
          const resetDuration = 1500;

          // fake the submission
          this.disabled = true;
          this.classList.add(runClass);

          clearTimeout(doneTimeout);
          clearTimeout(resetTimeout);

          doneTimeout = setTimeout(() => {
              this.classList.remove(runClass);
              this.classList.add(doneClass);


          }, submitDuration);
      });
  }
});






















const copyEmailButton = document.getElementById("copy_email");
copyEmailButton.addEventListener("click", function () {
  var textToCopy = document.getElementById("email").innerText;
  copyToClipboard(textToCopy);
});
function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  console.log(text)
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
copyEmailButton.addEventListener("click", function () {
  copyEmailButton.classList.add("copied")
})

window.addEventListener("DOMContentLoaded", () => {
  const btn = copyEmailButton;
  var doneTimeout = null,
      resetTimeout = null;

  if (btn) {
      btn.addEventListener("click", function () {
          const runClass = "btn--running";
          const doneClass = "btn--done";
          const submitDuration = 0;
          const resetDuration = 1500;

          this.disabled = true;
          this.classList.add(runClass);

          clearTimeout(doneTimeout);
          clearTimeout(resetTimeout);

          doneTimeout = setTimeout(() => {
              this.classList.remove(runClass);
              this.classList.add(doneClass);


          }, submitDuration);
      });
  }
});