!(function () {
  'use strict'
  document.addEventListener('DOMContentLoaded', function () {
    var e = document.getElementById('btn-picture'),
      t = document.getElementById('btn-picture-flip'),
      c = document.getElementById('picture-gallery'),
      n = !1,
      a = !1
    function i() {
      Webcam.set('constraints', { optional: [{ minWidth: 600 }] }),
        Webcam.set({ force_flash: !1 }),
        Webcam.attach('#webcam')
    }
    i(),
      (e.onclick = function () {
        Webcam.snap(function (e) {
          var t = document.createElement('img')
          ;(t.src = e), (t.className = 'gallery__picture'), c.appendChild(t)
        })
      }),
      (t.onclick = function () {
        ;(a = !a), Webcam.reset(), Webcam.set({ flip_horiz: a }), i()
      }),
      (c.onclick = function (e) {
        'IMG' === e.target.nodeName &&
          (e.target.classList.contains('gallery__picture_full')
            ? (e.target.classList.remove('gallery__picture_full'), (n = !1))
            : n || (e.target.classList.add('gallery__picture_full'), (n = !0)))
      })
  })
})()
