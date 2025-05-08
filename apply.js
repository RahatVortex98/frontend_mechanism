const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

itemList.addEventListener('click',removeItem);



// ADD Submit Event
form.addEventListener('submit',function  addItem(e){

    e.preventDefault();

    // GET input value 
    let newItem = document.getElementById('item').value;

    // Create new li

    let li =document.createElement('li');

    // add class
    li.className = 'list-group-item';


    // add text
    li.appendChild(document.createTextNode(newItem));

    // create delete button

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));


    li.appendChild(deleteBtn);

    itemList.appendChild(li);





});



function removeItem(e){
    if(e.target.classList.contains('delete')){

        if(confirm('are u sure?')){
            let li =  e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}