let id = 0;

const addCounter = (id) => id++;

/* create a new row & add to table 
document.getElementById('add').addEventListener('click', () => {
    let createdName = new Name();
    let tbody = document.getElementById('tbody-items');
    let row = tbody.insertRow(0);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    //65.9% sure this is correct
    row.insertCell(1).innerHTML = `${createdName}`
    row.insertCell(2).innerHTML = document.getElementById('phone-number').value;
    row.insertCell(3).innerHTML = document.getElementById('email').value;
    let actions = row.insertCell(4);
    actions.appendChild('');
    document.getElementById('new-contact').value;

});  */

// createDeleteButton(id, elementToDelete) -TW
function createDeleteButton(id) { // (id, elementToDelete) -TW
    let btn = document.createElement('button');

    // actions
    
    // https://bobbyhadz.com/blog/javascript-add-multiple-classes-to-element
    // add Multiple classes, not a space between
    btn.className = 'btn-info'; // class btn-info -TW
    btn.id = `btn${id}`; // // btn+1 <button id="btn1" class="btn btn-primary" onClick=()>Delete</button> // "55" + 5 = // "555" -TW
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

// function createEditButton(id, elementToEdit) { }

//create a new row & add to table
// event listener done correctly -TW
document.getElementById('add').addEventListener('click', () => {
    let createdName = new Name(); // unused var -TW
    let tbody = document.getElementById('tbody-items');
    let row = tbody.insertRow(0);
    let cell = row.insertCell(0); // LOVE THIS!! -TW
    let actions = row.insertCell(3); // add this -TW
    // row id <tr id="row1">

    // cell(0).innerHTML = document.getElementById('name').value; -TW
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('phone-number').value;
    row.insertCell(2).innerHTML = document.getElementById('email').value;

    // this won't work- need to declare 'actions'
    actions.appendChild(createDeleteButton(id));
    // actions.appendChild(createEditButton(id, elementToEdit));
    document.getElementById('name').value = ' ';
    addCounter(id); // $e, e let pushedButton = btn.selectedIndex(e); 
});




/* psudo code 
1. Add name,number,and email 
2. Save into correct row index
3. Update contact info
4. Delete contact 

var contactOne = {
    Name: 'Maxwell Mears',
    email: 'mears123@gmail.com',
    phone: '702 - 123 - 4567',
};

var contactTwo = {
    Name: 'Terence Waters',
    email: 'terence456@gmail.com',
    phone: '619-123-4567',
}; */


