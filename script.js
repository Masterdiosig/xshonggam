// Chuyển tab miền
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const region = btn.getAttribute('data-region');
    document.querySelectorAll('.region-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(region).classList.add('active');
  });
});

// Chuyển tab đài
document.querySelectorAll('.sub-tabs').forEach(group => {
  const buttons = group.querySelectorAll('.sub-tab');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const regionContent = btn.closest('.region-content');
      regionContent.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      regionContent.querySelectorAll('.result-box').forEach(box => {
        box.classList.remove('active');
      });
      const targetId = btn.getAttribute('data-target');
      regionContent.querySelector(`#${targetId}`).classList.add('active');
    });
  });
});
