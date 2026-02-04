// ===== ANNOUNCEMENTS =====
const announcements = [
  "Traffic advisory on Molino Boulevard",
  "Free medical check-up this Friday",
  "City Hall closed during public holiday"
];

const announcementList = document.getElementById("announcementList");

if (announcementList) {
  announcements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    li.style.cursor = "pointer";
    li.onclick = () => openModal(a);
    announcementList.appendChild(li);
  });
}

// ===== MODAL =====
function openModal(text) {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modalText");

  if (modal && modalText) {
    modalText.innerText = text;
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.style.display = "none";
}

// ===== DEPARTMENT SEARCH =====
function filterDepartments() {
  const search = document.getElementById("searchDept");
  const deptList = document.getElementById("deptList");

  if (!search || !deptList) return;

  const val = search.value.toLowerCase();
  deptList.querySelectorAll("li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(val)
      ? ""
      : "none";
  });
}

// ===== FORM VALIDATION =====
function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const msg = document.getElementById("formMsg");

  if (!name || !email || !msg) return false;

  if (!name.value || !email.value) {
    msg.innerText = "Please complete all fields.";
    msg.style.color = "red";
    return false;
  }

  localStorage.setItem("citizenName", name.value);
  msg.innerText = "Request submitted successfully!";
  msg.style.color = "green";
  return false;
}

// ===== FEEDBACK =====
function saveFeedback() {
  const citizenName = document.getElementById("citizenName");
  if (!citizenName) return;

  localStorage.setItem("feedbackUser", citizenName.value);
  alert("Thank you for your feedback!");
}

