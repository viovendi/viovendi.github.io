console.log("list.js")

$("li .ng-star-inserted").each(element => {
    var title = $(element).find(".event-article__event-info__title").text()
    if(title.includes("Profi")){
        console.log("Found Profi event")
        console.log(element)
        var but = $(element).find(".button")
        console.log("Found the button with href: "+$(but).attr("href"))
        console.log(but)
    }
});