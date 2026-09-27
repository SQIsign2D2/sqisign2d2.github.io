(() => {
  const page = document.body.dataset.page;
  document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('.primary-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const target = document.querySelector(button.dataset.copy);
    if (!target) return;
    try { await navigator.clipboard.writeText(target.innerText); button.textContent = '已复制'; }
    catch { button.textContent = '请手动复制'; }
    setTimeout(() => { button.textContent = '复制'; }, 1600);
  }));
  const filter = document.querySelector('#response-filter');
  filter?.addEventListener('change', () => {
    document.querySelectorAll('.response-list details').forEach(item => {
      item.hidden = filter.value !== 'all' && item.dataset.status !== filter.value;
    });
  });
})();
