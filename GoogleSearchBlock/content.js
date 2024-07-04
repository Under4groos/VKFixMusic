// function EvMutation(mutation) {
//   console.log(mutation);
// }

// if (document.URL.startsWith("https://www.google.com/")) {
//   var search_element = document.getElementById("search");
//   if (search_element) {
//     var mutationObserver = new MutationObserver(function (mutations) {
//       mutations.forEach(EvMutation);
//     });
//     mutationObserver.observe(search_element, {
//       attributes: true,
//       characterData: true,
//       childList: true,
//       subtree: true,
//       attributeOldValue: true,
//       characterDataOldValue: true,
//     });
//   }
// }
function isDiv(nodeName) {
  return nodeName == "DIV";
}
function find_div_domens(){
  var list = [];
  var search_element = document.getElementById("search");
  search_element.childNodes.forEach((element) => {
    if (isDiv(element.nodeName)) {
      element.childNodes.forEach((element2) => {
        if (isDiv(element2.nodeName)) {
          element2.childNodes.forEach((element3) => {
            if (isDiv(element3.nodeName)) {
              if (element3.className != "") {
                console.log(element3);
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
find_div_domens().forEach((div)=>{
  console.log(div)
})

