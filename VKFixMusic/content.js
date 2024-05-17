window.addEventListener("load", (event) => {
  var contr = document.getElementById("l_aud");
  if(contr){
    contr = contr.children[0];
    contr.href = contr.href + "?section=all";
  
    var contr = document.getElementById("content");
    var parent_ = contr.children[0];
    var child = parent_.children[1];
  
    parent_.removeChild(child);
  }


  //// remove
  var elements__ = document.getElementsByClassName(
    "CatalogSection CatalogSection--divided CatalogSection__my"
  );
  Array.prototype.forEach.call(elements__, function (el) {
    Array.prototype.forEach.call(el.children, function (el2) {
      var _el_remove = el2.children[1];
      if (_el_remove) {
        var atr = _el_remove.getAttribute("data-type");

        if (atr == "links" || atr == "music_audios") {
          el.removeChild(el2);
          console.log(atr);
        }
      }
    });
  });
});
