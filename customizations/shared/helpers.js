function myHelpers() {

    this.findField = function(cssClass, lable) {
      this.cssClass = cssClass;
      this.lable = lable;
      const fields= document.querySelectorAll(this.cssClass);
      fields.forEach((field) => {
        console.log(field.querySelectorAll('label p')[0].innerText.trim().includes(this.lable))
        if( field.querySelectorAll('label p')[0].innerText.trim().includes(this.lable) ){
          return field;
        }
      });
    }
    return this
  }
  
console.log('myHelpers')
  
  