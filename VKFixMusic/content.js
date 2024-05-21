function __replace_music_button_href() {
  if (__isvk_music()) {
    var contr = document.getElementById("l_aud");
    if (contr) {
      contr = contr.children[0];
      if (contr.href.endsWith("section=all")) return;
      contr.href = contr.href + "?section=all";
    }
  }
}

function __remove_em() {
  if (!__isvk_music()) return;
  var content = document.getElementById("content");
  if (!content) return;

  var ch_base__ = content.children[0];
  if (!ch_base__) return;
  var ch__ = ch_base__.children[1];
  if (!ch__) return;

  var art = ch__.getAttribute("class");
  if (art.startsWith("CatalogSection CatalogSection--header_section"))
    ch_base__.removeChild(ch__);
}
function replace_ui_gallery() {
  var chh__ = document.getElementsByClassName(
    "CatalogSection CatalogSection--divided CatalogSection__my"
  );
  if (chh__) var __c = chh__[0];
  if( __c.children.length >= 3)
  for (let index = 0; index < __c.children.length; index++) {
    const __elll = __c.children[index];

    if(index == 0){
      // __c.removeChild(__elll);
      if (__elll)
        for (let index = 0; index < __elll.children.length; index++) {
          const element = __elll.children[index];
          element.style["display"] = "none";
        }
    } 
    if(index == 1 ){
      __c.removeChild(__elll);
    }
  }

  // var chh__ = document.getElementsByClassName("ui_gallery__inner_cont");
  // if (chh__) {
  //   var item_1 = chh__[0];
  //   if (!item_1) return;
  //   //ch_base__.removeChild(ch__);

  //   //item_1.style["white-space"] = "normal";

  // }
}

function _remove_() {
  __replace_music_button_href();
  __remove_em();
  replace_ui_gallery();
  // var elements__ = document.getElementsByClassName(
  //   "CatalogSection CatalogSection--divided CatalogSection__my"
  // );
  // Array.prototype.forEach.call(elements__, function (el) {
  //   Array.prototype.forEach.call(el.children, function (el2) {
  //     var _el_remove = el2.children[1];
  //     if (_el_remove) {
  //       var atr = _el_remove.getAttribute("data-type");

  //       if (atr == "links" || atr == "music_audios") {
  //         el.removeChild(el2);
  //         console.log(atr);
  //       }
  //     }
  //   });
  // });
}

function geturl() {
  return document.URL;
}
function __isvk_music() {
  return geturl().startsWith("https://vk.com/audios");
}

setInterval(() => {
  if (!__isvk_music()) return;

  _remove_();
}, 500);

// window.addEventListener("reset", (event) => {

//   _remove_();
// });
// window.addEventListener("click", (event) => {

//   _remove_();
// });
// window.addEventListener("mouseenter", (event) => {

//   _remove_();
// });
// window.addEventListener("load", (event) => {
//   _remove_();
// });
