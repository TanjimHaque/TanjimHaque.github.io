document.addEventListener('DOMContentLoaded', () => {

  const heading3 = document.querySelector('h3');
  if (!heading3) return;
  const section = heading3.parentElement;


  const btn = document.createElement('button');
  btn.textContent = 'Toggle Coding Journey';
  btn.className = 'btn btn-secondary mb-3';


  section.parentNode.insertBefore(btn, section);

 
  btn.addEventListener('click', () => {
    section.style.display = section.style.display === 'none' ? '' : 'none';
  });
});
