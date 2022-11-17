console.log("list.js")

function run(){
    $("li.ng-star-inserted").each(element => {
        console.log($(element))
    var title = $(element).find(".event-article__event-info__title").text()
    console.log(title)
    if(title.includes("Profi")){
        console.log("Found Profi event")
        console.log(element)
        var but = $(element).find(".button")
        console.log("Found the button with href: "+$(but).attr("href"))
        console.log(but)
    }
});
}

var insertionListener = function(event) {  
  if (event.animationName === "nodeInserted") {    
    console.log("Node has been inserted: ", event.target);    
    run(); 
  }
}
document.addEventListener("animationstart", insertionListener, false); 
// standard + firefox  
document.addEventListener("MSAnimationStart", insertionListener, false); // IE  
document.addEventListener("webkitAnimationStart", insertionListener, false); // 
