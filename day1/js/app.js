addEventListener('DOMContentLoaded' , function () {
  const action = document.getElementById('action');
  const elementColor = document.getElementById('color');
  changeColor(color);

  action.addEventListener('click', function(ev) {
    changeColor(elementColor);
  })
})

const getColorRandom = () => "#" + ((1<<24)*Math.random() | 0).toString(16); 

const changeColor = (elementColor) => {
  let newColor = getColorRandom();
  document.body.style.background = newColor;
  elementColor.innerHTML = newColor; 
}
