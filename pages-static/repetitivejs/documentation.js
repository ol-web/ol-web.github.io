document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('menu-search').oninput = function (e) {
    ;[].slice
      .call(document.querySelectorAll('.menu li'))
      .forEach(function (item) {
        if (
          !item.firstChild.textContent.match(new RegExp(e.target.value, 'gi'))
        ) {
          item.style.display = 'none'
        } else {
          item.style.display = 'block'
        }
      })
  }
})
