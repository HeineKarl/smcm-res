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
  const aboutPrt = document.querySelector(".about__inner");
  const aboutCon = document.querySelector(".about__container");
  const aboutBox = document.querySelector(".about__box");
  const aboutHgt = aboutBox.getBoundingClientRect().height;

  const mgtBtn = document.querySelector(".mgt__btn");
  const mgtPrt = document.querySelector(".mgt__inner");
  const mgtGrp = document.querySelector(".mgt__group");
  const mgtBody = document.querySelector(".mgt__body");
  const mgtHgt = mgtBody.getBoundingClientRect().height;

  const serviceBtn = document.querySelector(".service__btn");
  const servicePrt = document.querySelector(".service__inner");
  const serviceCon = document.querySelector(".service__container");
  const serviceBox = document.querySelector(".service__box");
  const serviceHgt = serviceBox.getBoundingClientRect().height;

  // About Event
  const aboutEvent = () => {
    if (
      mgtGrp.classList.contains("collapse-transition") ||
      mgtGrp.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(mgtPrt, mgtGrp, mgtHgt);
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutHgt);
    } else if (
      serviceCon.classList.contains("collapse-transition") ||
      serviceCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(servicePrt, serviceCon, serviceHgt);
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(aboutPrt, aboutCon, aboutHgt);
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
      checkResponsive(aboutPrt, aboutCon, aboutHgt);
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtHgt);
    } else if (
      serviceCon.classList.contains("collapse-transition") ||
      serviceCon.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(servicePrt, serviceCon, serviceHgt);
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(mgtPrt, mgtGrp, mgtHgt);
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
      checkResponsive(aboutPrt, aboutCon, aboutHgt);
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceHgt);
    } else if (
      mgtGrp.classList.contains("collapse-transition") ||
      mgtGrp.classList.contains("dropdown")
    ) {
      // Removes the class and Collapse Back
      checkResponsive(mgtPrt, mgtGrp, mgtHgt);
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceHgt);
    } else {
      // Add the class and Collapse In
      checkResponsive(servicePrt, serviceCon, serviceHgt);
    }
  };
  serviceBtn.addEventListener("click", serviceEvent);

  // Function for the collapsing links
  const collapseNav = (parent, container, height) => {
    if (container.classList.contains("dropdown")) {
      dropDown(parent, container, height);
    } else {
      container.classList.toggle("collapse-transition");
      if (container.classList.contains("collapse-transition")) {
        parent.style.height = `${height + 68}px`;
      } else {
        parent.style.height = `${68}px`;
      }
    }
  };

  // Function for the dropdown links
  const dropDown = (parent, container, height) => {
    if (container.classList.contains("collapse-transition")) {
      collapseNav(parent, container, height);
    } else {
      container.classList.toggle("dropdown");
    }
  };

  // Responsive Check
  const checkResponsive = (prt, con, hgt) => {
    const desktopView = window.matchMedia("(min-width: 981px)");
    const tableView = window.matchMedia(
      "(min-width: 481px) and (max-width: 980px)"
    );

    if (desktopView.matches) {
      console.log("Desktop");
      dropDown(prt, con, hgt);
    } else {
      console.log("Mobile");
      collapseNav(prt, con, hgt);
    }
  };

  // document.addEventListener("click", (e) => {
  //   console.log(e.target);
  // });
};
headerFunctions();
