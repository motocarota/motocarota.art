function viewer({ pages, double }) {
  let id = 0;
  let isDouble = double;
  let pageList = (isDouble)
    ? toDouble(pages)
    : pages;

  const REF = {
    body: document.getElementsByTagName('body')[0],
    container: document.getElementById('container'),
    selector: document.getElementById('selector'),
    page_0: document.getElementById('image_0'),
    page_1: document.getElementById('image_1'),
  }

  function toDouble(arr) {
    let res = [];
    arr.forEach(
        (a, index) => {
            if (index % 2 == 0) {
                res.push([a]);
            } else {
                res[res.length -1].push(a);
            }
        }
    )
    return res;
  }

  function next() {
    if (id >= pageList.length - 1) {
      return;
    }
    goto(id + 1);
  }

  function prev() {
    if (id <= 0) {
      return;
    }
    goto(id - 1);
  }

  function goto(dest) {
    id = dest;
    updatePage();
    REF.selector.value = dest;
    // scroll to show the page element
    REF.page_0.scrollIntoView();
  }

  function updatePage() {
    REF.page_1.style.display = (isDouble) 
      ? "block"
      : "none";

    if (isDouble) {
      const [first, second] = pageList[id];
      REF.page_0.src = first;
      REF.page_1.src = second;
    } else {
      REF.page_0.src = pageList[id];
    }
  }

  function toggleDouble() {
    // invert the value
    isDouble = !isDouble;
    // update page index
    id = (isDouble)
      ? Math.floor(id/2)
      : id*2;
    // change page list data structure
    pageList = (isDouble)
      ? toDouble(pages)
      : pages;

    // adds fullscreen class
    if (isDouble) {
      REF.container.classList.add('double');
    } else {
      REF.container.classList.remove('double');
    }

    // refresh the page
    init();
  }

  function updateSelector() {
    const options = pageList.map(
      (p, index) => `<option value="${index}"> pagina ${index} </option>`
    )
    REF.selector.innerHTML = options;
  }

  function bindEventsListeners() {
    REF.body.onkeyup = function(evt) {
      evt = evt || window.event;
      switch (evt.key) {
        case 'ArrowLeft': {
          return prev();
        }
        case 'ArrowRight': {
          return next();
        }
        default: {
          return;
        }
      }
    };
  }
  
  function init () {
    updatePage();
    updateSelector();
    bindEventsListeners();
  }

  init();
  
  return {
    prev,
    next,
    goto,
    toggleDouble,
  }
}