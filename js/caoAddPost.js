const baseUrl = "https://zany-skitter-caper.glitch.me/experiences";

const formEl = document.getElementById("form");
console.log("formEl===", formEl);

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("js is in control");

  const newEntry = {};
  const members = ["companyName", "position", "description", "startYear", "finishYear"];
  members.forEach((memb) => {
    newEntry[memb] = formEl.elements[memb].value;
  });
  createEntry(newEntry);
});

async function createEntry(newPostData) {
  const resp = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPostData),
  });
  const atsInJs = await resp.json();
  console.log("atsInJs===", atsInJs);
  if (atsInJs.success === false) {
    // turim klaidu masyva atsInJs.error
    handleErrors(atsInJs.error);
  }
  if (atsInJs.success === true) {
    // post sukurtas
    window.location.href = "posts.html";
  }
  console.log("atsInJs ===", atsInJs);
}
