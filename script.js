
<script>
function chonMien(mien) {
  document.querySelectorAll('.mien-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.thu-tabs').forEach(tab => tab.style.display = 'none');

  document.getElementById(`thu-tabs-${mien}`).style.display = 'flex';
  document.querySelectorAll(`.mien-btn`).forEach(btn => {
    if (btn.textContent.includes(mien === 'mn' ? 'Nam' : mien === 'mt' ? 'Trung' : 'Bắc')) {
      btn.classList.add('active');
    }
  });

  // Ẩn tất cả bảng kết quả
  document.querySelectorAll('.kqxs').forEach(el => el.style.display = 'none');
}

function chonThu(thu, mien) {
  // Kích hoạt đúng tab ngày
  const tabGroup = document.getElementById(`thu-tabs-${mien}`);
  if (!tabGroup) return;

  tabGroup.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
  const targetBtn = Array.from(tabGroup.querySelectorAll('button')).find(btn => btn.textContent === thu);
  if (targetBtn) targetBtn.classList.add('active');

  // Ẩn tất cả kết quả, hiển thị đúng miền + thứ
  document.querySelectorAll('.kqxs').forEach(el => el.style.display = 'none');
  const resultEl = document.getElementById(`kqxs-${thu}-${mien}`);
  if (resultEl) resultEl.style.display = 'block';
}

// 🧠 Tự động nhảy đúng thứ hôm nay
window.addEventListener('DOMContentLoaded', () => {
  const today = new Date().getDay(); // CN=0, T2=1, ..., T7=6
  const dayMap = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const todayStr = dayMap[today];

  ['mn', 'mt', 'mb'].forEach(mien => {
    chonThu(todayStr, mien);
  });

  // Mặc định hiển thị Miền Nam
  chonMien('mn');
});
</script>
