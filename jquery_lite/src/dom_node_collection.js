class DOMNodeCollection {
  constructor(array) {
    this.array = array; 
  }

  append(content) { 
    for (let i = 0; i < content.length || i < this.array.length; i++) { 
      this.array[i].innerHTML = content[i].outerHTML; 
    } 
  } 

  empty() {
    this.array.forEach( el => {
      el.html = "";
    })
  };

  attr(name, value) {
    // determine when this is a getter and when this is a setter 
    // when value is present then it will be a setter 
    // add the attribute to an element and set it to the value 
    if (value) { 
      this.array[0].setAttribute(name, value); 
    } else {
      this.array[0].getAttribute(name); 
    }
  };
  
  addClass(className) {
    for (let i = 0; i < this.array.length; i++) {
      // iterate through className if mutli args
      let currentAttrValues = this.array[i].getAttribute('class'); 
      currentAttrValues += ` ${className}`;
      console.log(this.array[i]);
      this.array[i].setAttribute('class', currentAttrValues);
    }
  };
  
  removeClass(className) { 
    // if 1 className is provided, remove only that name
    // if no className, remove all classes 
    // get classes first and split and the join after removing said class 
    for (let i = 0; i < this.array.length; i++) { 
      let currentAttrValues = this.array[i].getAttribute('class').split(' '); 

      if (currentAttrValues.includes(className)) { 
        // we can use .filter() 
        let newAttrValues = currentAttrValues.filter(el => el !== className); 
        this.array[i].setAttribute('class', newAttrValues); 
      } else {
        this.array[i].setAttribute('class', ''); 
      }
    } 
  }; 
  
  find() {};

  parent() {
    let adults = [];
    for (let i = 0; i < this.array.length; i++) {
      let current = this.array[i].parentNode; 
      if (!adults.includes(current)) { adults.push(current); } 
    } 
    let result = new DOMNodeCollection(adults); 
    return result; 
  };
  
  children() { 
    let kids = [];
    for (let i = 0; i < this.array.length; i++) {
      let current = Array.from(this.array[i].children);
      kids = kids.concat(current); 
    } 
    let result = new DOMNodeCollection(kids); 
    return result;
  };
  
  remote() {};

  html(content) {
    let firstHTML = this.array[0].innerHTML;
    if (!content) return firstHTML;

    // if array is undefined. check logic
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].innerHTML = content;
    }
  };
};

module.exports = DOMNodeCollection; 