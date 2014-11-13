class Slicer {
  constructor(element, slices, orientation = 'vertical') {
    this.element = element;
    
    this.innerHTML = this.element.innerHTML;
    this.element.style.width = window.getComputedStyle(this.element).width;
    this.element.style.height = window.getComputedStyle(this.element).height;
    
    this.orientation = orientation;
    this.slices = slices;
  }
  
  get slices() {
    return this._slices;
  }
  
  set slices(slices) {
    this._slices = slices;
    this.slice();
  }
  
  slice () {
    var sliceSize = 100 / this.slices;
    
    var span = document.createElement('span');
    span.appendChild(document.createElement('span'));
    span.children[0].innerHTML = this.innerHTML;
    
    if (this.orientation === 'vertical') {
      span.style.width = sliceSize + '%';
      span.style.height = '100%';
    }
    else {
      span.style.width = '100%';
      span.style.height = sliceSize + '%';
    }
    
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
    
    this.element.appendChild(span);
    
    var newSpan;
    for (var i = 1; i < this.slices; ++i) {
      newSpan = span.cloneNode(true);
      
      if (this.orientation === 'vertical') {
        newSpan.children[0].style.left = -i * this.slices * sliceSize + '%';
      }
      else {
        newSpan.children[0].style.top = -i * this.slices * sliceSize + '%';
      }

      this.element.appendChild(newSpan);
    }
  }
};

var slicer = new Slicer(document.querySelector('h1'), 116);

var gui = new dat.GUI();
gui.add(slicer, 'slices', 10, 500);

var animate = function () {
  var tl = new TimelineMax();

  tl.staggerFromTo('h1 > span:nth-child(even)', 0.2, {
    y: -20,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.1, 'letter');
  
  tl.staggerFromTo('h1 > span:nth-child(odd)', 0.2, {
    y: 20,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.1, 'letter');
};

var button = {
  animate: animate
};
gui.add(button, 'animate');

animate();