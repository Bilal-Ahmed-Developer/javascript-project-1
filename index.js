const item = document.getElementById('item');
const todobox = document.querySelector('todo');

item.addEventListener(
   "keyup",
   function(e){
        if(e.key == "Enter"){
             addtodo(this.value);
             this.value =""
        };
        
   }
)

const addtodo = (i) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `
     ${i}
  <i class="fa-solid fa-xmark"></i>
  `
  listItem.addEventListener(
       "click",
       function () {
            this.classList.toggle("done")
       }
  )
  listItem.querySelector("i").addEventListener(
       "click",
       function () {
            listItem.remove()
       }
)
  todo.appendChild(listItem);

}