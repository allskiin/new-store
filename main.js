const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width: ", tabsList.scrollWidth);
  console.log("client width: ", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);

let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});



// produtos
const tabs1 = document.querySelectorAll(".produto a");
const rightArrow1 = document.querySelector(
  ".produto .right-arrow svg"
);
const leftArrow1 = document.querySelector(
  ".produto .left-arrow svg"
);
const tabsList1 = document.querySelector(".produto ul");
const leftArrowContainer1 = document.querySelector(
  ".produto .left-arrow"
);
const rightArrowContainer1 = document.querySelector(
  ".produto .right-arrow"
);

const removeAllActiveClasses1 = () => {
  tabs1.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs1.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons1 = () => {
  if (tabsList1.scrollLeft >= 20) {
    leftArrowContainer1.classList.add("active");
  } else {
    leftArrowContainer1.classList.remove("active");
  }

  let maxScrollValue = tabsList1.scrollWidth - tabsList1.clientWidth - 20;
  console.log("scroll width: ", tabsList1.scrollWidth);
  console.log("client width: ", tabsList1.clientWidth);

  if (tabsList1.scrollLeft >= maxScrollValue) {
    rightArrowContainer1.classList.remove("active");
  } else {
    rightArrowContainer1.classList.add("active");
  }
};

rightArrow1.addEventListener("click", () => {
  tabsList1.scrollLeft += 200;
  manageIcons1();
});

leftArrow1.addEventListener("click", () => {
  tabsList1.scrollLeft -= 200;
  manageIcons1();
});

tabsList1.addEventListener("scroll", manageIcons1);

let dragging1 = false;

const drag1 = (e) => {
  if (!dragging1) return;
  tabsList1.classList.add("dragging");
  tabsList1.scrollLeft -= e.movementX;
};

tabsList1.addEventListener("mousedown", () => {
  dragging1 = true;
});

tabsList1.addEventListener("mousemove", drag1);

document.addEventListener("mouseup", () => {
  dragging1 = false;
  tabsList1.classList.remove("dragging");
});

//shoes
const tabs2 = document.querySelectorAll(".shoes-produto a");
const rightArrow2 = document.querySelector(
  ".shoes-produto .right-arrow svg"
);
const leftArrow2 = document.querySelector(
  ".shoes-produto .left-arrow svg"
);
const tabsList2 = document.querySelector(".shoes-produto ul");
const leftArrowContainer2 = document.querySelector(
  ".shoes-produto .left-arrow"
);
const rightArrowContainer2 = document.querySelector(
  ".shoes-produto .right-arrow"
);

const removeAllActiveClasses2 = () => {
  tabs2.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs2.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses2();
    tab.classList.add("active");
  });
});

const manageIcons2 = () => {
  if (tabsList2.scrollLeft >= 20) {
    leftArrowContainer2.classList.add("active");
  } else {
    leftArrowContainer2.classList.remove("active");
  }

  let maxScrollValue = tabsList2.scrollWidth - tabsList2.clientWidth - 20;
  console.log("scroll width: ", tabsList2.scrollWidth);
  console.log("client width: ", tabsList2.clientWidth);

  if (tabsList2.scrollLeft >= maxScrollValue) {
    rightArrowContainer2.classList.remove("active");
  } else {
    rightArrowContainer2.classList.add("active");
  }
};

rightArrow2.addEventListener("click", () => {
  tabsList2.scrollLeft += 200;
  manageIcons2();
});

leftArrow2.addEventListener("click", () => {
  tabsList2.scrollLeft -= 200;
  manageIcons2();
});

tabsList2.addEventListener("scroll", manageIcons2);

let dragging2 = false;

const drag2 = (e) => {
  if (!dragging2) return;
  tabsList2.classList.add("dragging");
  tabsList2.scrollLeft -= e.movementX;
};

tabsList2.addEventListener("mousedown", () => {
  dragging2 = true;
});

tabsList2.addEventListener("mousemove", drag2);

document.addEventListener("mouseup", () => {
  dragging2 = false;
  tabsList2.classList.remove("dragging");
});

//joias
const tabs3 = document.querySelectorAll(".joias-ice-produto a");
const rightArrow3 = document.querySelector(
  ".joias-ice-produto .right-arrow svg"
);
const leftArrow3 = document.querySelector(
  ".joias-ice-produto .left-arrow svg"
);
const tabsList3 = document.querySelector(".joias-ice-produto ul");
const leftArrowContainer3 = document.querySelector(
  ".joias-ice-produto .left-arrow"
);
const rightArrowContainer3 = document.querySelector(
  ".joias-ice-produto .right-arrow"
);

const removeAllActiveClasses3 = () => {
  tabs3.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs3.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses3();
    tab.classList.add("active");
  });
});

const manageIcons3 = () => {
  if (tabsList3.scrollLeft >= 20) {
    leftArrowContainer3.classList.add("active");
  } else {
    leftArrowContainer3.classList.remove("active");
  }

  let maxScrollValue = tabsList3.scrollWidth - tabsList3.clientWidth - 20;
  console.log("scroll width: ", tabsList3.scrollWidth);
  console.log("client width: ", tabsList3.clientWidth);

  if (tabsList3.scrollLeft >= maxScrollValue) {
    rightArrowContainer3.classList.remove("active");
  } else {
    rightArrowContainer3.classList.add("active");
  }
};

rightArrow3.addEventListener("click", () => {
  tabsList3.scrollLeft += 200;
  manageIcons3();
});

leftArrow3.addEventListener("click", () => {
  tabsList3.scrollLeft -= 200;
  manageIcons3();
});

tabsList3.addEventListener("scroll", manageIcons3);

let dragging3 = false;

const drag3 = (e) => {
  if (!dragging3) return;
  tabsList3.classList.add("dragging");
  tabsList3.scrollLeft -= e.movementX;
};

tabsList3.addEventListener("mousedown", () => {
  dragging3 = true;
});

tabsList3.addEventListener("mousemove", drag3);

document.addEventListener("mouseup", () => {
  dragging3 = false;
  tabsList3.classList.remove("dragging");
});