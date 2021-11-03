const toggleButton = document.getElementById("toggle");
const circle = document.getElementById("circle");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

toggleButton.onclick = () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
};
