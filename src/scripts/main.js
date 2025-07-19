'use strict';

// write code here

const ulList = document.querySelectorAll('li > ul');

ulList.forEach((ul) => {
  const li = ul.parentElement;
  const textNode = li.firstChild;
  const span = document.createElement('span');

  textNode.replaceWith(span);
  span.textContent = textNode.textContent;
});

const mainUl = document.querySelector('.tree');

mainUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    const span = e.target;
    const nestedUl = span.nextElementSibling;

    if (nestedUl) {
      if (nestedUl.style.display === 'none') {
        nestedUl.style.display = '';
      } else {
        nestedUl.style.display = 'none';
      }
    }
  }
});
