import _ from 'lodash';
function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
console.log("Hello world nimade!");

document.body.appendChild(component());