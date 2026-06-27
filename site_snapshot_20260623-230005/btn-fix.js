// Button + Card layout fix - runs after ALL CSS
(function(){
  function fixAll() {
    // 1. Fix category cards (wp-block-cover) inner containers
    var inners = document.querySelectorAll(".wp-block-cover__inner-container");
    for (var i = 0; i < inners.length; i++) {
      var el = inners[i];
      el.style.setProperty("display", "flex", "important");
      el.style.setProperty("flex-direction", "column", "important");
      el.style.setProperty("justify-content", "space-between", "important");
      el.style.setProperty("height", "100%", "important");
    }

    // 2. Push buttons to bottom in cover cards
    var btnWraps = document.querySelectorAll(".wp-block-cover .wp-block-buttons, .wp-block-cover .wp-block-button");
    for (var j = 0; j < btnWraps.length; j++) {
      btnWraps[j].style.setProperty("margin-top", "auto", "important");
    }

    // 3. Constrain all button elements
    var btns = document.querySelectorAll(".wp-block-button__link, .add_to_cart_button, .button, a[class*=button]");
    for (var k = 0; k < btns.length; k++) {
      var b = btns[k];
      b.style.setProperty("padding", "6px 14px", "important");
      b.style.setProperty("font-size", "12px", "important");
      b.style.setProperty("min-height", "auto", "important");
      b.style.setProperty("line-height", "1.3", "important");
      b.style.setProperty("white-space", "nowrap", "important");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixAll);
  } else {
    fixAll();
  }
  // Double-tap after all dynamic content loads
  setTimeout(fixAll, 800);
})();