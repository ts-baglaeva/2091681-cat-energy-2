const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});

function getTextNodesIn(elem, opt_fnFilter) {
  let textNodes = [];
  if (elem) {
    for (let nodes = elem.childNodes, i = nodes.length; i--;) {
      const node = nodes[i], nodeType = node.nodeType; if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          if (node.data.trim() !== '') {
            textNodes.push(node.data.trim() !== '' ? node : '');
          }
        }
      } else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

getTextNodesIn(document.body).forEach((item) => {
  item.textContent = 'У меня есть несколько клиентов, которые записались ко мне на стрижку, не успев даже зайти в салон.';
});

/*const li = document.querySelectorAll('li');
li.forEach((item) => {
  const clone = item.cloneNode(true);
  item.before(clone);
});*/
