(function () {
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.documentElement;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
})();
