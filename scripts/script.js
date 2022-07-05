const gridPad = document.querySelector('#grid-pad');
const color = document.querySelector('input[type="color"]');
const numberofDivs = document.querySelector('input[type="range"]');
let widthOfDiv = Math.floor(gridPad.clientWidth / numberofDivs.value);

// file the grid with divs
// gridPad.innerHTML = "";
gridPad.style.cssText = `grid-template-columns: repeat(${numberofDivs.value},${widthOfDiv}px)`;
for(let i=0;i<16;i++) { 
  for(let j=0;j<16;j++) { 
    const div = document.createElement('div');
    div.className = 'grid-element';
    console.log(widthOfDiv);
    div.style.height = widthOfDiv + "px";
    gridPad.appendChild(div);
  }
}

gridPad.addEventListener('mousemove',(e) => { 

    if(e.target.classList[0] ==='grid-element')
    e.target.style.backgroundColor = color.value;
  });

  const clearButton = document.querySelector('#clearButton');

  clearButton.addEventListener('click',()=> { 
    const divs  =document.querySelectorAll('.grid-element');
    divs.forEach(div => { 
      div.style.backgroundColor = 'white';
    });
});
numberofDivs.addEventListener('change',()=> { 
  gridPad.innerHTML = "";
  widthOfDiv = Math.floor(gridPad.clientWidth / numberofDivs.value);
  gridPad.style.cssText = `grid-template-columns: repeat(${numberofDivs.value},${widthOfDiv}px)`;
  for(let i=0;i<numberofDivs.value;i++) { 
    for(let j=0;j<numberofDivs.value;j++) { 
      const div = document.createElement('div');
      div.className = 'grid-element';
      console.log(widthOfDiv);
      div.style.height = widthOfDiv + "px";
      gridPad.appendChild(div);
    }
  }
})