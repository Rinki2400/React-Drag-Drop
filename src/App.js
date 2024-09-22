
import './App.css';

function App() {

const lists = document.getElementsByClassName("list");
const rightBox = document.getElementsByClassName("right");
const leftBox = document.getElementsByClassName("left");

    for(lists of list){
        lists.addEvenListener("dragstart",function(e){
        let selected = e.target;

        rightBox.addEvenListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEvenListener("drop",function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
    })
}
  return (
    <div className="App">
      <div class="drag">
            <div id="left">
                <div class="list" draggable="true"><img src="./drag_drop_icon.png"/>List 1</div>
                <div class="list" draggable="true"><img src="./drag_drop_icon.png"/>List 2</div>
                <div class="list" draggable="true"><img src="./drag_drop_icon.png"/>List 3</div>
                <div class="list" draggable="true"><img src="./drag_drop_icon.png"/>List 4</div>
            </div>
            <div id="right"></div>
        </div>
    </div>
  );
}

export default App;
