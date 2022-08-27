function viewer({ pages, isDouble }) {
  let id = 0;
  const pageList = (isDouble)
    ? toDouble(pages)
    : pages;

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
    id++;
    render();
  }

  function prev() {
    if (id <= 0) {
      return;
    }
    id--;
    render();
  }

  function render() {
    if (isDouble) {
      const el_0 = document.getElementById('image_0');
      const el_1 = document.getElementById('image_1');
      el_0.src = pageList[id][0];
      el_1.src = pageList[id][1];
    } else {
      const el = document.getElementById('image');
      el.src = pageList[id];
    }
  }
  render();

  return {
    prev,
    next,
  }
}