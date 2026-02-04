const announcements = [
  "Traffic advisory on Molino Blvd.",
  "Free medical check-up this Friday",
  "City Hall closed on public holiday"
];

const list = document.querySelectorAll("#announcementList");
list.forEach(ul => {
  announcements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    li.onclick = () => openModal(a);
    ul.appendChild(li);
  });
});

function openModal(text) {
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function filterDepartments() {
  let input = document.getElementById("searchDept").value.toLowerCase();
  let items = document.querySelectorAll("#deptList li");
  items.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(input) ? "" : "none";
  });
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    document.getElementById("formMsg").innerText = "Please fill all fields.";
    return false;
  }

  localStorage.setItem("citizenName", name);
  document.getElementById("formMsg").innerText = "Request submitted!";
  return false;
}

function saveFeedback() {
  let name = document.getElementById("citizenName").value;
  localStorage.setItem("feedbackUser", name);
  alert("Feedback saved. Thank you!");
}
