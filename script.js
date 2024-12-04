const inputField = document.querySelectorAll(".code");

inputField[0].focus();
let cnt = 0;

inputField.forEach((ele) => {
  ele.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key >= 0 && e.key <= 9) {
      cnt++;
      e.target.value = e.key;
      if (cnt < 6) e.target.nextElementSibling.focus();
      else cnt = 6;
    }
    if (e.keyCode == 8) {
      const initValue = e.target.id.split("-")[1];
      cnt = parseInt(initValue);
      cnt--;
      e.target.value = "";
      if (cnt > 0) e.target.previousElementSibling.focus();
      else cnt = 0;
    }
  });
});
