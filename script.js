// Xử lý tab chọn miền
const regionTabs = document.querySelectorAll(".tab");
const regionContents = document.querySelectorAll(".region-content");

regionTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    regionTabs.forEach(t => t.classList.remove("active"));
    regionContents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.region).classList.add("active");
  });
});

// Xử lý tab chọn thứ trong mỗi miền
const dayTabs = document.querySelectorAll(".day-tab");
const dayContents = document.querySelectorAll(".day-content");

dayTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const parent = tab.closest(".region-content");

    const days = parent.querySelectorAll(".day-tab");
    const contents = parent.querySelectorAll(".day-content");

    days.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    parent.querySelector(`#${tab.dataset.day}`).classList.add("active");
  });
});
