
console.log("Script running...");
const hamburger = document.querySelector('.hamburger .ham');
const cross     = document.querySelector('.hamburger .cross');
const sidebar   = document.querySelector('.sidebar');

// Sidebar starts hidden: ensure it has the class
sidebar.classList.add('sidebarGo');

hamburger.addEventListener('click', () => {
  sidebar.classList.remove('sidebarGo');
  hamburger.style.display = 'none';
  cross.style.display     = 'block';
});

cross.addEventListener('click', () => {
  sidebar.classList.add('sidebarGo');
  cross.style.display     = 'none';
  hamburger.style.display = 'block';
});



