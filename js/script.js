let filterButton = document.querySelectorAll('.filter');
let images = document.querySelectorAll('.happymomentsimage');
console.log(images);
console.log(filterButton);

function clearFilter () {
  for (let i = 0; i < filterButton.length; i++) {
    filterButton[i].classList.remove('filter-active');
  }
}

for(let i=0;i<filterButton.length;i++) {
  filterButton[i].onclick = function(){
    for (let j = 0; j < images.length; j++) {
      if (filterButton[i].textContent==="All") {
        images[j].classList.remove('grayimage');
      }
      else {
        if (filterButton[i].textContent!==images[j].dataset.filter) {
          images[j].classList.add('grayimage');
        }
        else {
          images[j].classList.remove('grayimage');
        }
      }
    }
    clearFilter();
    filterButton[i].classList.toggle('filter-active');
  }
}
