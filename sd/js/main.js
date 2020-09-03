const indicator = document.querySelector(".element");

let currentState = indicator.dataset.state;

indicator.addEventListener("click", () => {
  let nextState = "";

  if (currentState == "DEFAULT") {
    nextState = "ACTIVE";
  } else if (currentState == "ACTIVE") {
    nextState = "SUCCESS";
  } else if (currentState == "SUCCESS") {
    nextState = "ERROR";
  } else {
    nextState = "DEFAULT";
  }
  
  indicator.dataset.state = nextState;
  currentState = nextState;
});