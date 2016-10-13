(function (global) {

  // Some old bad browsers don't give us a console, so we are not going to
  // play with them. And we are not going to tell them.
  if(typeof(document.querySelectorAll) == 'undefined') {
    return;
  }

  // Setup our toolkit.
  var ToolKit = {};

  ToolKit.seek = function (selector) {
    return document.querySelectorAll(selector);
  }

  // Setup our toybox.
  var Toybox = {};

  Toybox.want = function (toy_name) {
    var elem_head =  ToolKit.seek('head')[0];
    var elem_script = document.createElement('script');
    elem_script.type = 'text/javascript';
    elem_script.src = '/?give_me_toy=' + toy_name;
    elem_head.appendChild(elem_script);
  }

  global.login = function () {
    Toybox.want('login');
  }

  global.destory = function () {
    Toybox = 'I ain\'t happy.';
    ToolKit = 'We are done.';
  }

  global.helpless_package = {
    toolKit: ToolKit,
    toybox: Toybox
  };

}).call(window);