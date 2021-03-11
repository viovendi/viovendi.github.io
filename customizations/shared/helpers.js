function myHelpers() {

    this.findField = function(cssClass, lable) {
      this.cssClass = cssClass;
      this.lable = lable;
      const field = document.querySelectorAll(cssClass);
      field.forEach((field) => {
       console.log(field)
      });
      return this
    }
    return this
  }
  
  hp = new myHelpers()
  
  