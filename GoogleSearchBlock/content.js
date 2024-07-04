function isDiv(nodeName) {
  return nodeName == "DIV";
}
var block_ = [
  "https://education.yandex.ru",
  "https://znanierussia.ru",
  "https://blog.skillfactory.ru",
  "https://skillfactory.ru",
  "https://skillbox.ru",
  "https://otus.ru",
  "https://www.sravni.ru"
];
var search_element = document.getElementById("search");
function find_div_domens() {
  var list = [];
  search_element.childNodes.forEach((element) => {
    if (isDiv(element.nodeName)) {
      element.childNodes.forEach((element2) => {
        if (isDiv(element2.nodeName)) {
          element2.childNodes.forEach((element3) => {
            if (isDiv(element3.nodeName)) {
              if (element3.className != "") {
                
                list.push(element3);
              } else {
                element3.childNodes.forEach((div__) => {
                  if (isDiv(div__.nodeName) && div__.className != "") {
                    list.push(div__);
                  }
                });
              }
            }
          });
        }
      });
    }
  });
  return list;
}

function valid(chi, i, action) {
  if (chi) {
    var chll_ = chi.childNodes;
    if (chll_.length > 0) {
      action(chll_[i]);
    }
  }
}

function isblock(link) {
  for (let index = 0; index < block_.length; index++) {
    if (link.startsWith(block_[index])) return true;
  }

  return false;
}

find_div_domens().forEach((div) => {
  valid(div, 0, (el) => {
    valid(el, 0, (el2) => {
      valid(el2, 0, (el3) => {
        valid(el3, 0, (el4) => {
          valid(el4, 0, (el5) => {
            valid(el5, 0, (el6) => {
              valid(el6, 0, (el7) => {
                if (el7.href != null) {
                  if (isblock(el7.href)) {
                    console.log(el7.href);
                    div.style.display = "none";
                  }
                } else {
                  valid(el7, 0, (el8) => {
                    if (el7.href != null) {
                      if (isblock(el8.href)) {
                        console.log(el8.href);
                        div.style.display = "none";
                      }
                    }
                  });
                }
              });
            });
          });
        });
      });
    });
  });
});
