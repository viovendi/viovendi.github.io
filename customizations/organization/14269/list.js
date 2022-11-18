console.log("list.js")

function run(){
    $("li.ng-star-inserted").each(function() {
    var title = $($(this)).find(".event-article__event-info__title").text()
    if(title.includes("Schüler@HORNBACH")){
        var but = $($(this)).find(".button")
        $(but).attr("href","https://prjkt.ly/Schueler-at-HB-Markt");
        $(but).attr("target","_blank");
    }
});
}

var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
 //   console.log("Node has been inserted: ", event.target);    
    run(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
