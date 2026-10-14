(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const root = document.documentElement;
  const safeGet = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } };
  const safeRemove = (key) => { try { localStorage.removeItem(key); return true; } catch { return false; } };

  // Welcome screen: first impression on every page visit, keyboard accessible.
  const welcomeScreen = $('#welcomeScreen');
  const welcomeSkip = $('#welcomeSkip');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let welcomeDone = false;
  let welcomeTimer;
  function closeWelcome() {
    if (welcomeDone) return;
    welcomeDone = true;
    clearTimeout(welcomeTimer);
    welcomeScreen.classList.add('is-leaving');
    welcomeScreen.setAttribute('aria-hidden', 'true');
    welcomeScreen.removeAttribute('aria-modal');
    welcomeScreen.removeAttribute('role');
    welcomeSkip.setAttribute('tabindex', '-1');
    if (document.activeElement === welcomeSkip) $('#mainNav a').focus();
  }
  welcomeSkip.addEventListener('click', closeWelcome);
  welcomeTimer = setTimeout(closeWelcome, prefersReducedMotion ? 350 : 2850);

  const themeToggle = $('#themeToggle');
  const savedTheme = safeGet('quangduy-theme');
  if (savedTheme === 'light') root.dataset.theme = 'light';
  function refreshThemeLabel() {
    themeToggle.setAttribute('aria-label', root.dataset.theme === 'light' ? 'Bật giao diện tối' : 'Bật giao diện sáng');
  }
  refreshThemeLabel();
  themeToggle.addEventListener('click', () => {
    const newTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = newTheme;
    safeSet('quangduy-theme', newTheme);
    refreshThemeLabel();
  });

  const menuToggle = $('#menuToggle');
  const mainNav = $('#mainNav');
  const setMenu = (isOpen) => {
    mainNav.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Đóng menu' : 'Mở menu');
  };
  menuToggle.addEventListener('click', () => setMenu(!mainNav.classList.contains('is-open')));
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  const progress = $('#readingProgress');
  let isTicking = false;
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 100) + '%';
    isTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!isTicking) { requestAnimationFrame(updateProgress); isTicking = true; }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // Keep only one expanded card at a time so the article layout stays tidy.
  const chapterCards = [...document.querySelectorAll('.chapter-card')];
  chapterCards.forEach(card => card.addEventListener('toggle', () => {
    if (card.open) chapterCards.forEach(other => { if (other !== card) other.open = false; });
  }));

  const quotations = [
    'Đừng để cách người khác đối xử với bạn quyết định con người mà bạn sẽ trở thành.',
    'Một người tử tế không cần hoàn hảo. Họ chỉ cần biết khi nào mình đã làm người khác đau.',
    'Không phải mọi sự im lặng đều vô cảm. Nhưng đôi khi, sự quan tâm cần được nói thành lời.',
    'Càng hiểu những góc tối, càng nên giữ cho mình một khoảng sáng.',
    'Thắng người khác có thể khiến ta tự hào. Thắng được lòng tham của mình mới khiến ta bình yên.'
  ];
  let quoteIndex = 0;
  const quoteText = $('#quoteText');
  const quoteCounter = $('#quoteCounter');
  const renderQuote = () => {
    quoteText.textContent = quotations[quoteIndex];
    quoteCounter.textContent = `${String(quoteIndex + 1).padStart(2, '0')} / ${String(quotations.length).padStart(2, '0')}`;
  };
  $('#prevQuote').addEventListener('click', () => { quoteIndex = (quoteIndex - 1 + quotations.length) % quotations.length; renderQuote(); });
  $('#nextQuote').addEventListener('click', () => { quoteIndex = (quoteIndex + 1) % quotations.length; renderQuote(); });

  const toast = $('#toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }
  $('#copyQuote').addEventListener('click', async () => {
    const text = `“${quotations[quoteIndex]}” — Quang Duy`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const field = document.createElement('textarea');
        field.value = text;
        field.style.position = 'fixed'; field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand('copy');
        field.remove();
        if (!ok) throw new Error('Copy unsupported');
      }
      showToast('Đã sao chép câu suy ngẫm.');
    } catch { showToast('Không thể sao chép tự động trên trình duyệt này.'); }
  });

  const journal = $('#journal');
  const charCount = $('#charCount');
  const journalStatus = $('#journalStatus');
  const journalKey = 'quangduy-private-journal-v1';
  journal.value = safeGet(journalKey) || '';
  const updateCount = () => { charCount.textContent = `${journal.value.length} / 1000`; };
  journal.addEventListener('input', () => { updateCount(); journalStatus.textContent = ''; });
  updateCount();
  $('#saveJournal').addEventListener('click', () => {
    const text = journal.value.trim();
    if (!text) { journalStatus.textContent = 'Hãy viết một dòng trước khi lưu nhé.'; return; }
    const saved = safeSet(journalKey, text);
    journalStatus.textContent = saved ? 'Đã lưu trên trình duyệt này. Bạn có thể mở lại để đọc.' : 'Trình duyệt đang chặn lưu trữ. Bạn có thể sao chép ghi chú để giữ lại.';
    if (saved) showToast('Đã lưu ghi chú của bạn.');
  });
  $('#clearJournal').addEventListener('click', () => {
    if (!journal.value && !safeGet(journalKey)) return;
    if (!window.confirm('Bạn có muốn xóa ghi chú đã lưu trên trình duyệt này?')) return;
    if (safeRemove(journalKey)) {
      journal.value = ''; updateCount();
      journalStatus.textContent = 'Đã xóa ghi chú trên trình duyệt này.';
    } else { journalStatus.textContent = 'Không thể xóa dữ liệu lưu trữ tự động. Hãy kiểm tra quyền riêng tư của trình duyệt.'; }
  });

  $('#year').textContent = new Date().getFullYear();
})();
