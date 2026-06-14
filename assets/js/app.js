function removeItem(button) {
  const item = button.closest('.group');
  if (!item) return;
  item.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    item.remove();
    checkEmptyState();
  }, 300);
}

function checkEmptyState() {
  const container = document.getElementById('favorites-container');
  const emptyState = document.getElementById('empty-state');
  if (!container || !emptyState) return;
  if (container.children.length === 0) {
    container.classList.add('hidden');
    emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.parentElement.classList.add('scale-[1.02]');
    });
    searchInput.addEventListener('blur', () => {
      searchInput.parentElement.classList.remove('scale-[1.02]');
    });
  }

  document.querySelectorAll('.material-symbols-outlined').forEach(btn => {
    if (btn.textContent.trim() === 'volume_up') {
      btn.addEventListener('click', function () {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => this.style.transform = 'scale(1)', 200);
      });
    }
  });

  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('Keluar')) {
      btn.addEventListener('click', () => {
        if (confirm('Apakah Anda yakin ingin keluar?')) {
          console.log('User logging out...');
        }
      });
    }
  });

  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-sm');
      } else {
        header.classList.remove('shadow-sm');
      }
    });
  }

  document.querySelectorAll('.group').forEach(item => {
    item.addEventListener('touchstart', () => {
      item.classList.add('bg-surface-container-low');
    });
    item.addEventListener('touchend', () => {
      item.classList.remove('bg-surface-container-low');
    });
  });
});
