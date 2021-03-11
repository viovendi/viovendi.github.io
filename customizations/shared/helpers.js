function myHelpers() {
    this.findField = function(cssClass, lable) {
      this.cssClass = cssClass;
      this.lable = lable;
      const fields = document.querySelectorAll(this.cssClass);
      fields.forEach((field) => {
        if( field.querySelectorAll('label p')[0].innerText.trim().includes(this.lable) ){
          this.field = field;
        }
      });
      return this.field;
    }
     this.hide = function (elem) {
      elem.style.display = 'none';
    };
    return this
  }
  
  