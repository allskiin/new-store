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

