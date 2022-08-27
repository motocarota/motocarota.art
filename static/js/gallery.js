function viewer(pages) {
  let id = 0;

  function next() {
    if (id >= pages.length - 1) {
      return;
    }
    id++;
    setImage();
  }

  function prev() {
    if (id <= 0) {
      return;
    }
    id--;
    setImage();
  }

  function setImage() {
    const el = document.getElementById('image');
    el.src = pages[id];
  }
  setImage();

  return {
    prev,
    next,
  }
}