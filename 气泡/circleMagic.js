<!-- ;(function ($) {
  $.fn.circleMagic = function (options) {

    var width, height, canvas, ctx, animateHeader = true;
    var circles = [];

    var settings = $.extend({
      color: 'rgba(255,255,255,.5)',
      radius: 10,
      density: 0.3,
      clearOffset: 0.2
    }, options);

    //  Main

    var container = this['0'];
    initContainer();
    addListeners();

    function initContainer() {
      width = container.offsetWidth;
      height = container.offsetHeight;

      //  create canvas element

      initCanvas();
      canvas = document.getElementById('homeTopCanvas');
      canvas.width = width;
      canvas.height = height;
      canvas.style.position = 'absolute';
      canvas.style.left = '0';
      canvas.style.bottom = '0';
      ctx = canvas.getContext('2d');

      //  create circles
      for (var x = 0; x < width * settings.density; x++) {
        var c = new Circle();
        circles.push(c);
      }
      animate();
    }

    //Init canvas element
    function initCanvas() {
      var canvasElement = document.createElement('canvas');
      canvasElement.id = 'homeTopCanvas';
      container.appendChild(canvasElement);
      canvasElement.parentElement.style.overflow = 'hidden';

    }

    // Event handling
    function addListeners() {
      window.addEventListener('scroll', scrollCheck, false);
      window.addEventListener('resize', resize, false);
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) {
        animateHeader = false;
      }
      else {
        animateHeader = true;
      }
    }

    function resize() {
      width = container.clientWidth;
      height = container.clientHeight;
      container.height = height + 'px';
      canvas.width = width;
      canvas.height = height;
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in circles) {
          circles[i].draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function randomColor() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var alpha = Math.random().toPrecision(2);
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }

    //  Canvas manipulation

    function Circle() {
      var that = this;

      // constructor
      (function () {
        that.pos = {};
        init();
      })();

      function init() {
        that.pos.x = Math.random() * width;
        that.pos.y = height + Math.random() * 100;
        that.alpha = 0.1 + Math.random() * settings.clearOffset;
        that.scale = 0.1 + Math.random() * 0.3;
        that.speed = Math.random();
        if (settings.color === 'random') {
          that.color = randomColor();
        }
        else {
          that.color = settings.color;
        }
      }

      this.draw = function () {
        if (that.alpha <= 0) {
          init();
        }
        that.pos.y -= that.speed;
        that.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(that.pos.x, that.pos.y, that.scale * settings.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = that.color;
        ctx.fill();
        ctx.closePath();
      };
    }
  }
})(jQuery); -->

!function(t) {
    t.fn.circleMagic = function(o) {
        var e, a, n, r, i = !0, l = [], d = t.extend({
            color: "rgba(255,255,255,.5)",
            radius: 10,
            density: .3,
            clearOffset: .2
        }, o), s = this[0];
        function h() {
            i = !(document.body.scrollTop > a)
        }
        function c() {
            e = s.clientWidth,
            a = s.clientHeight,
            s.height = a + "px",
            n.width = e,
            n.height = a
        }
        function f() {
            if (i)
                for (var t in r.clearRect(0, 0, e, a),
                l)
                    l[t].draw();
            requestAnimationFrame(f)
        }
        function m() {
            var t = this;
            function o() {
                t.pos.x = Math.random() * e,
                t.pos.y = a + 100 * Math.random(),
                t.alpha = .1 + Math.random() * d.clearOffset,
                t.scale = .1 + .3 * Math.random(),
                t.speed = Math.random(),
                "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(255 * Math.random()) + ", " + Math.floor(255 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color
            }
            t.pos = {},
            o(),
            this.draw = function() {
                t.alpha <= 0 && o(),
                t.pos.y -= t.speed,
                t.alpha -= 5e-4,
                r.beginPath(),
                r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1),
                r.fillStyle = t.color,
                r.fill(),
                r.closePath()
            }
        }
        !function() {
            e = s.offsetWidth,
            a = s.offsetHeight,
            t = document.createElement("canvas"),
            t.id = "homeTopCanvas",
            s.appendChild(t),
            t.parentElement.style.overflow = "hidden",
            (n = document.getElementById("homeTopCanvas")).width = e,
            n.height = a,
            n.style.position = "absolute",
            n.style.left = "0",
            n.style.bottom = "0",
            r = n.getContext("2d");
            var t;
            for (var o = 0; o < e * d.density; o++) {
                var i = new m;
                l.push(i)
            }
            f()
        }(),
        window.addEventListener("scroll", h, !1),
        window.addEventListener("resize", c, !1)
    }
}(jQuery);