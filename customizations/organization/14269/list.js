console.log("list.js")

function run(){
    $("li.ng-star-inserted").each(function() {
    var title = $($(this)).find(".event-article__event-info__title").text()
    if(title.includes("Schüler@HORNBACH")){
        if($('#464413').length == 0){
        var but = $($(this)).find(".button:not(#464413)");
        $(but).after('<a class="button" id="464413" target="_blank" href="https://jobs.hornbach.com/Germany/content/Schueler-bei-HORNBACH/?locale=de_DE">Mehr Infos</a>');
        $(but).hide();
        }
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
