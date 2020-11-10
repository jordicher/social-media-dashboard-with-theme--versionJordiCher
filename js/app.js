const toggleDark = document.getElementById("toggleDark");
const nameVarCss = [
  "--bgColor",
  "--bgHeader",
  "--VeryPaleBlue",
  "--bgCartText",
  "--especialText",
  "--normalText",
  "--toggleSwitchStart",
  "--toogleSwitchEnd",
];

const colorsLightScheme = [
  "hsl(0, 0%, 100%)",
  "hsl(225, 100%, 98%)",
  "hsl(225, 100%, 98%)",
  "hsl(227, 47%, 96%)",
  "hsl(228, 12%, 44%)",
  "hsl(230, 17%, 14%)",
  "rgb(160, 154, 154)",
  "rgb(174, 179, 203)",
];

const colorsDarkScheme = [
  "hsl(230, 17%, 14%)",
  "hsl(232, 19%, 15%)",
  "hsl(225, 100%, 98%)",
  "hsl(228, 28%, 20%)",
  "hsl(228, 34%, 66%)",
  "hsl(0, 0%, 100%)",
  "rgb(55, 143, 230)",
  "rgb(62, 218, 130)",
];

window.matchMedia("(prefers-color-scheme: light)").matches
  ? (toggleDark.checked = true)
  : (toggleDark.checked = false);

toggleDark.addEventListener("change", (e) => {
  if (e.target.checked) {
    for (let i = 0; i < nameVarCss.length; i++) {
      document.documentElement.style.setProperty(
        nameVarCss[i],
        colorsLightScheme[i]
      );
    }
  } else {
    for (let i = 0; i < nameVarCss.length; i++) {
      document.documentElement.style.setProperty(
        nameVarCss[i],
        colorsDarkScheme[i]
      );
    }
  }
});
