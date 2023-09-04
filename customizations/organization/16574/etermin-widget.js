
let isMembership = false;
  dmAPI.getLoggedInMember().then(result  => {
    const email = result.memberInfo.email;
    const first_name = result.memberInfo.firstname;
    const last_name = result.memberInfo.lastname;
    if(email){
        isMembership = true;
        addScript(first_name, last_name, email);
    }else{
        addScript();   
    }
  });

function addScript(first_name, last_name, email){
    console.log('addScript runs');
    var urlParams = `servicegroupid=147654&calendarid=167153`;
    if(isMembership){
       urlParams = urlParams+`&firstname=${first_name}&lastname=${last_name}&email=${email}`; 
    }
    var frameElement = document.createElement("iframe");
    console.log(urlParams);
    frameElement.classList.add("etermin-frame");
    frameElement.setAttribute("id","1923963275");
    frameElement.setAttribute("height","1600px");
    frameElement.setAttribute("width","100%");
    frameElement.setAttribute("scrolling","no");
    frameElement.setAttribute("frameborder","0");
    frameElement.setAttribute("src","https://www.eTermin.net/Asmodee-events?"+urlParams+"");
    document.getElementById('eterminWrapper').appendChild(frameElement);
}
