!(function () {
  'use strict'
  document.addEventListener('DOMContentLoaded', function () {
    var e = window.URL || window.webkitURL,
      t = document.querySelector('video'),
      n = document.querySelector('.cinema-mode'),
      a = document.querySelector('#input-file-video'),
      i = document.querySelector('#input-file-subtitles'),
      r = function (e) {
        e.target.classList.add('has-focus')
      },
      o = function (e) {
        e.target.classList.remove('has-focus')
      }
    t.addEventListener('play', function () {
      n.style.height = '100%'
    }),
      n.addEventListener('click', function () {
        n.style.height = 0
      }),
      i.addEventListener('focus', r),
      i.addEventListener('blur', o),
      a.addEventListener('focus', r),
      a.addEventListener('blur', o),
      i.addEventListener('change', function (e) {
        var a = e.target.files[0]
        if (a) {
          var r = new FileReader()
          ;(r.onload = function (e) {
            var a = i.value.split('\\').pop()
            ;(document.querySelector(
              '#input-file-subtitles+label'
            ).textContent = a),
              (function (e, n) {
                var a = e.split('\n'),
                  i = /\{([\w]+?)\}/g,
                  r = null,
                  o = t.addTextTrack('subtitles', n)
                ;(o.mode = 'showing'),
                  (o.default = !0),
                  (r = i.test(a[0]) ? i : /\[([\w]+?)\]/g),
                  a.forEach(function (e) {
                    if (e) {
                      var t = void 0,
                        n = e.match(r),
                        a = e.replace(r, '')
                      ;-1 != (a = a.replace('|', '\n')).indexOf('/') &&
                        (a = '<i>' + (a = a.replace(/\//g, '')) + '</i>'),
                        (t = window.VTTCue
                          ? new VTTCue(
                              n[0].replace(/\D/g, '') / 10,
                              n[1].replace(/\D/g, '') / 10,
                              a
                            )
                          : new TextTrackCue(
                              n[0].replace(/\D/g, '') / 10,
                              n[1].replace(/\D/g, '') / 10,
                              a
                            )),
                        o.addCue(t)
                    }
                  })
              })(e.target.result, a),
              t.paused || (n.style.height = '100%')
          }),
            r.readAsText(a)
        } else alert('Nie udało się załadować napisów!')
      }),
      a.addEventListener('change', function (n) {
        var i = n.target.files[0]
        i
          ? t.canPlayType(i.type)
            ? ((document.querySelector('#input-file-video+label').textContent =
                a.value.split('\\').pop()),
              (t.src = e.createObjectURL(i)))
            : alert(
                'Podany przez Ciebie plik nie może zostać odtworzony przez przeglądarkę!'
              )
          : alert('Nie udało się załadować wideo!')
      })
  })
})()
