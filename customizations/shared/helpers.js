function myHelpers() {

    this.findField = function(cssClass, lable) {
      this.cssClass = cssClass;
      this.lable = lable;
      const field = document.querySelectorAll(this.cssClass);
      field.forEach((field) => {
        field.querySelectorAll('label p')
      });
      return this
    }
    return this
  }
  
console.log('myHelpers')
  
  