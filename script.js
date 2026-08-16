const startButton =
  document.getElementById("startButton");

const learnButton =
  document.getElementById("learnButton");

const aboutButton =
  document.getElementById("aboutButton");

const modal =
  document.getElementById("modal");

const closeModal =
  document.getElementById("closeModal");

const modalStart =
  document.getElementById("modalStart");


/* =========================
   MODAL
========================= */

function openModal() {
  modal.classList.add("active");
}


function close() {
  modal.classList.remove("active");
}


aboutButton.addEventListener(
  "click",
  openModal
);


learnButton.addEventListener(
  "click",
  openModal
);


closeModal.addEventListener(
  "click",
  close
);


modal.addEventListener(
  "click",
  (event) => {

    if (event.target === modal) {
      close();
    }

  }
);


/* =========================
   ROXYRUN START
========================= */

function startRoxyRun() {

  console.log(
    "RoxyRun started!"
  );

  /*
    Put the real RoxyRun
    functionality here.
  */

}


startButton.addEventListener(
  "click",
  startRoxyRun
);


modalStart.addEventListener(
  "click",
  () => {

    close();

    startRoxyRun();

  }
);


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key === "Escape") {
      close();
    }

  }
);
 
