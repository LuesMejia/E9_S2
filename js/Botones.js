
  document.querySelectorAll('a[data-bs-toggle="collapse"]').forEach((btn) => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.collapse.show').forEach((openItem) => {
                if (openItem.id !== this.getAttribute('href').substring(1)) {
                    new bootstrap.Collapse(openItem, { toggle: true });
                }
            });
        });
  });

