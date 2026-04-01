const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");

let formData = {
  email: "",
  message: "",
};

function loadFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  formData = JSON.parse(saved);
  formEl.querySelector("input[name='email']").value = formData.email;
  formEl.querySelector("textarea[name='message']").value = formData.message;
}

function onInput(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Please fill in all fields.");
    return;
  }

  console.log(formData);

  formData = { email: "", message: "" };
  localStorage.removeItem(STORAGE_KEY);
  formEl.reset();
}

loadFromStorage();
formEl.addEventListener("input", onInput);
formEl.addEventListener("submit", onSubmit);
