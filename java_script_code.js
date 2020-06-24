//Main function
function makeGrid() {

    //Save grid values 
    let storeHeight = document.querySelector('#inputHeight').value;
    let storeWidth = document.querySelector('#inputWidth').value;
    let storeCanvas = document.querySelector('#pixelCanvas');
  
    //Reset grid
    storeCanvas.innerHTML = "";
  
    //Loop for rows
    for (let x = 0; x < storeHeight; x++) {
      let row = pixelCanvas.insertRow(x);
  
      //Loop for cells
      for (let y = 0; y < storeWidth; y++) {
        let cell = row.insertCell(y);
  
        //Click event for color change
        cell.addEventListener('click', function() {
          colorPicker = document.querySelector('#colorPicker').value;
          cell.style.backgroundColor = colorPicker;
        });
      }
    }
  }
  //Click event to submit the input
  sizePicker = document.querySelector('#sizePicker');
  sizePicker.addEventListener('submit', function() {
    event.preventDefault();
    //Call function makeGrid()
    makeGrid();
  });
