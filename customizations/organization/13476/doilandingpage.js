console.log('Start working, Google Tag Manager DOI Page');
  var insertionListener = function(event) {
  if (event.animationName === "nodeInserted") {
    console.log("Node has been inserted: ", event.target);
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
  if(ua.indexOf("MSIE ") >= 0){
       // logo
      document.querySelector(".newsletter-verification__logo").innerHTML ="<img src='https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Wealthcap/WealthCap-mit-Byline+(1).png'>";

  document.querySelector(".newsletter-verification__logo").href = "https://www.wealthcap.com";
  
  // image
  document.querySelector(".newsletter-verification__image").src = "https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Wealthcap/Image-Dreiklang-2020+(1).jpg";

  
   document.querySelector('.newsletter-verification__message').textContent = '';
  document.querySelector('.newsletter-verification__message').innerHTML = 'Vielen Dank für Ihre Bestätigung. <br> Wir wünschen Ihnen eine angenehme und erfolgreiche Zeit.'
  
  document.querySelector(".newsletter-verification__goto a").href = "https://www.wealthcap.com";
  document.querySelector(".newsletter-verification__goto a").textContent = 'www.wealthcap.com'
  document.querySelector('.newsletter-verification__goto a').href = 'https://www.wealthcap.com';
  }else{
      $('.newsletter-verification__logo').append('<img src="https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Wealthcap/WealthCap-mit-Byline+(1).png">')
    $('.newsletter-verification__logo').attr('href', 'https://www.wealthcap.com');
  // image
      $('.newsletter-verification__image').attr('src', 'https://doo-product-consulting-uploads.s3.eu-central-1.amazonaws.com/Wealthcap/Image-Dreiklang-2020+(1).jpg');
  $('.newsletter-verification__message').text('');
  $('.newsletter-verification__message').append('Vielen Dank für Ihre Bestätigung. <br> Wir wünschen Ihnen eine angenehme und erfolgreiche Zeit.')
  $('.newsletter-verification__goto a').text('www.wealthcap.com');
  $('.newsletter-verification__goto a').attr('href', 'https://www.wealthcap.com');
  }
     setTimeout(document.querySelector('.newsletter-verification').style.opacity = 1, 2000);

  }
}
  

document.addEventListener("animationstart", insertionListener, false); // standard + firefox
document.addEventListener("MSAnimationStart", insertionListener, false); // IE
document.addEventListener("webkitAnimationStart", insertionListener, false); // Chrome + Safari

 
   
