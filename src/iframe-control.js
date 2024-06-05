const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", onSubmit);

function onSubmit(event) {
  window.top.postMessage("hello", "*");
}
