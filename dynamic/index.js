const sections = [...document.querySelectorAll(".content main .section")],
      navList = document.querySelector("aside .nav-list");
let dataIcon = [
  "fa-regular fa-chart-bar fa-fw",
  "fa-solid fa-gear fa-fw",
  "fa-regular fa-user fa-fw",
  "fa-solid fa-diagram-project fa-fw",
  "fa-solid fa-graduation-cap fa-fw",
  "fa-regular fa-circle-user fa-fw",
  "fa-regular fa-file fa-fw",
  "fa-regular fa-credit-card fa-fw"
];

createNav();
function createNav() {
  for (let i = 0; i < sections.length; i++) {
    // create li element
    const navItem = document.createElement("li");

    // create button element
    const navBtn = document.createElement("button");
    navBtn.classList.add("nav-btn");
    navItem.appendChild(navBtn);

    // create i element
    const navIcon = document.createElement("i");
    navIcon.setAttribute("class", dataIcon[i]);
    navBtn.appendChild(navIcon);

    // create span element
    const navText = document.createElement("span");
    navText.textContent = sections[i].dataset.nav;
    navBtn.appendChild(navText);

    // print on page
    navList.appendChild(navItem);
  };
  handleBtns();
};

function handleBtns() {
  const navBtns = [...document.querySelectorAll("aside .nav-list .nav-btn")];

  // on window load as default
  activeContent(0);

  // active content depends on clicked button (index)
  navBtns.forEach((btn, index) => {
    btn.addEventListener("click", _ => {
      activeContent(index);
    });
  });

  // active btn and its content by (index)
  function activeContent(i) {
    unactiveContent();
    navBtns[i].classList.add("active");
    sections[i].classList.add("active");
  };

  // un active all btns and sections
  function unactiveContent() {
    navBtns.forEach((btn, index) => {
      btn.classList.remove("active");
      sections[index].classList.remove("active");
    });
  };
};