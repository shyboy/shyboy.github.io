var title = document.title;
    var tme;
    document.addEventListener('visibilitychange', function () {
      var sct = Math.floor($(window).scrollTop() / ($(document).height() - $(window).height()) * 100);
      if ($(document).height() - $(window).height() === 0) sct = 100;
      if (document.hidden) {
        clearTimeout(tme);
        document.title = 'Read ' + sct + '% · ' + title;
      } else {
        document.title = 'Welcome Back · ' + title;
        tme = setTimeout(function () {
          document.title = title;
        }, 3000);
      }
    });