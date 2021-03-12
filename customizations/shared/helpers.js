function myHelpers(elements) {
    this.findField = function(lable) {
      this.lable = lable;
      this.field = null;

      elements.forEach((field) => {
        if( field.querySelectorAll('label p')[0].innerText.trim().includes(this.lable) ){
          this.field = field;
        }
      });
      return this.field;
    }
    return this
  }

  function $$(selector){
    const elements = document.querySelectorAll(selector);
		return new myHelpers(elements);
	}
  
  