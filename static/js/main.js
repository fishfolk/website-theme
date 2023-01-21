// Set darkmode
document.getElementById('mode').addEventListener('click', () => {

    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  
});
  
// default to dark theme, and only do the light theme if they have explicitly set the theme by
// clicking the button.
if (localStorage.getItem('theme') !== 'light') {
  document.body.classList.add('dark');
}
