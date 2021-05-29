const headerFunctions = () => {
  // Open Navigation Bar
  const hamburger = document.querySelector(".hero__hamburger");
  hamburger.addEventListener("click", () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.add("side-slide");
  });

  // Close Navigation Bar
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    const navigation = document.querySelector(".navigation");
    navigation.classList.remove("side-slide");
  });

  // Variables for the Buttons
  const aboutBtn = document.querySelector(".about__btn");
  const aboutBtnHgt = aboutBtn.getBoundingClientRect().height;
  const aboutPrt = document.querySelector(".about__inner");
  const aboutCon = document.querySelector(".about__container");
  const aboutBox = document.querySelector(".about__box");
  const aboutBoxHgt = aboutBox.getBoundingClientRect().height;

  const mgtBtn = document.querySelector(".mgt__btn");
  const mgtBtnHgt = mgtBtn.getBoundingClientRect().height;
  const mgtPrt = document.querySelector(".mgt__inner");
  const mgtGrp = document.querySelector(".mgt__group");
  const mgtBody = document.querySelector(".mgt__body");
  const mgtBoxHgt = mgtBody.getBoundingClientRect().height;

  const serviceBtn = document.querySelector(".service__btn");
  const serviceBtnHgt = serviceBtn.getBoundingClientRect().height;
  const servicePrt = document.querySelector(".service__inner");
  const serviceCon = document.querySelector(".service__container");
  const serviceBox = document.querySelector(".service__box");
  const serviceBoxHgt = serviceBox.getBoundingClientRect().height;

  // About Event
  const aboutEvent = () => {
    if (
      mgtGrp.classList.contains("collapse-transition") ||
      mgtGrp.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(mgtPrt, mgtGrp, mgtBoxHgt, mgtBtnHgt);
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutBoxHgt, aboutBtnHgt);
    } else if (
      serviceCon.classList.contains("collapse-transition") ||
      serviceCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(servicePrt, serviceCon, serviceBoxHgt, serviceBtnHgt);
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutBoxHgt, aboutBtnHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutBoxHgt, aboutBtnHgt);
    }
  };
  aboutBtn.addEventListener("click", aboutEvent);

  // School Management Event
  const mgtEvent = () => {
    if (
      aboutCon.classList.contains("collapse-transition") ||
      aboutCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(aboutPrt, aboutCon, aboutBoxHgt, aboutBtnHgt);
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtBoxHgt, mgtBtnHgt);
    } else if (
      serviceCon.classList.contains("collapse-transition") ||
      serviceCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(servicePrt, serviceCon, serviceBoxHgt, serviceBtnHgt);
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtBoxHgt, mgtBtnHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtBoxHgt, mgtBtnHgt);
    }
  };
  mgtBtn.addEventListener("click", mgtEvent);

  // Service Event
  const serviceEvent = () => {
    if (
      aboutCon.classList.contains("collapse-transition") ||
      aboutCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(aboutPrt, aboutCon, aboutBoxHgt, aboutBtnHgt);
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceBoxHgt, serviceBtnHgt);
    } else if (
      mgtGrp.classList.contains("collapse-transition") ||
      mgtGrp.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(mgtPrt, mgtGrp, mgtBoxHgt, mgtBtnHgt);
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceBoxHgt, serviceBtnHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceBoxHgt, serviceBtnHgt);
    }
  };
  serviceBtn.addEventListener("click", serviceEvent);

  // Function for the collapsing links
  const collapseNav = (parent, container, boxHgt, btnHgt) => {
    if (container.classList.contains("dropdown")) {
      dropDown(parent, container, boxHgt, btnHgt);
    } else {
      container.classList.toggle("collapse-transition");
      if (container.classList.contains("collapse-transition")) {
        parent.style.height = `${boxHgt + btnHgt}px`;
      } else {
        parent.style.height = `${btnHgt}px`;
      }
    }
  };

  // Function for the dropdown links
  const dropDown = (parent, container, boxHgt, btnHgt) => {
    if (container.classList.contains("collapse-transition")) {
      collapseNav(parent, container, boxHgt, btnHgt);
    } else {
      container.classList.toggle("dropdown");
    }
  };

  // Responsive Check
  const checkResponsive = (prt, con, boxHgt, btnHgt) => {
    const desktopView = window.matchMedia("(min-width: 981px)");
    const tableView = window.matchMedia(
      "(min-width: 481px) and (max-width: 980px)"
    );

    if (desktopView.matches) {
      console.log("Desktop");
      dropDown(prt, con, boxHgt, btnHgt);
    } else {
      console.log("Mobile");
      collapseNav(prt, con, boxHgt, btnHgt);
    }
  };

  // document.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });
};
headerFunctions();
