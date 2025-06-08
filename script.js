
const today = new Date().getDay(); // 0 = CN, 6 = Thứ 7
const showThu = 'thu' + (today === 0 ? 8 : today); // 1 -> 7, CN = 8
document.querySelectorAll('.kqxs').forEach(el => {
  el.style.display = el.classList.contains(showThu) ? 'block' : 'none';
});

