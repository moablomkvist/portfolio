
//GRADIENT CANVAS - Granim.js//
const granimInstance = new Granim({
  name: 'titel',
  element: '#canvas-basic',
  direction: 'top-bottom',
  isPausedWhenNotInView: true, //the animation always pause when changing tab//
  states : {
      "default-state": {
          gradients: [
              ['#e3b198', '#b48687'],
              ['#7dce9d', '#95b2d0'],
              ['#e1eec3', '#d88587']
          ]
      }
  }
});

