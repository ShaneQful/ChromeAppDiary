var title = document.getElementById('title');

addEvent(title, 'blur', function () {
  // lame that we're hooking the blur event
  localStorage.setItem('title', this.innerHTML);
  document.designMode = 'off';
});

addEvent(title, 'focus', function () {
  document.designMode = 'on';
});

addEvent(document.getElementById('clear'), 'click', function () {
  localStorage.clear();
  window.location = window.location; // refresh
});

if (localStorage.getItem('title')) {
  title.innerHTML = localStorage.getItem('title');
}
var xtyui = null;