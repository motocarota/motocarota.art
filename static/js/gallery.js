function viewer(pages) {
  let id = 0;

  function next() {
    if (id >= pages.length - 1) {
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
    const el = document.getElementById('image');
    el.src = pages[id];
  }
  render();

  return {
    prev,
    next,
  }
}