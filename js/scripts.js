/*var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

const animateBox = () => {
  const box = document.querySelector(".box");
  box.style.webkitAnimationPlayState = "running";
  setTimeout(() => {
    box.style.webkitAnimationPlayState = "paused";
  }, 482);
};

const rejectAnimation = () => {
  const rejectBox = document.querySelector(".reject-wrapper");
  rejectBox.classList.add("backtive");
  setTimeout(() => {
    rejectBox.classList.remove("backtive");
  }, 300);
};

document.querySelector(".front .next-arrow").addEventListener("click", () => {
  let value = document.querySelector(".name-input").value;
  if (value) {
    animateBox();
  } else {
    rejectAnimation();
    document.querySelector(".name-input").placeholder =
      "Name field can't be blank";
  }
});

document.querySelector(".left .next-arrow").addEventListener("click", () => {
  const value = document.querySelector(".email-input").value;
  if (/.+@.+\..+$/.test(value)) {
    animateBox();
  } else {
    rejectAnimation();
    document.querySelector(".email-input").placeholder = "Please enter a valid email"
  }
});
document.querySelector(".back .next-arrow").addEventListener("click", () => {
    const value = document.querySelector(".location-input").value;
  if(value){
    animateBox();
  } else{
    rejectAnimation();
    document.querySelector(".location-input").placeholder = "You can't be from nowhere"
  }
});

document
  .querySelector(".right .submit-button")
  .addEventListener("click", () => {
    document.querySelector(".reject-wrapper").classList.add("submit");
  });
