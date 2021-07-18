!(function () {
  'use strict'
  window.onload = function () {
    var t = document.getElementById('mail'),
      n = document.getElementById('input-email-icon'),
      e = document.getElementById('mail-form')
    ;(t.onfocus = function () {
      n.style.opacity = '0'
    }),
      (t.onblur = function () {
        t.value || (n.style.opacity = '1')
      }),
      (e.onsubmit = function () {
        return alert("Actually, there isn't any newsletter here!"), !1
      })
  }
})()
