// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body"),
  colors = ["#82b1ff", "#805acb", "#ffff5a"];

const eventHandler = {
  resize: function () {
    if (200 < window.innerWidth && window.innerWidth < 400) {
      body.style.backgroundColor = colors[0];
    } else if (window.innerWidth > 600) {
      body.style.backgroundColor = colors[1];
    } else {
      body.style.backgroundColor = colors[2];
    }
  }
};

function init() {
  window.addEventListener("resize", eventHandler.resize);
}
init();
