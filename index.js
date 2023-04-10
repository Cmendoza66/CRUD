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

function createDeleteButton(id) {
    let btn = document.createElement('button');

    // actions
    btn.className = 'btn btn-info'; 
    btn.id = `btn+${id}`; // <button id="btn1" class="btn btn-primary" onClick=()>Delete</button>
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

//create a new row & add to table
document.getElementById('add').addEventListener('click', () => {
    let createdName = new Name();
    let tbody = document.getElementById('tbody-items');
    let row = tbody.insertRow(0);
    let cell = row.insertCell(0);

    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('phone-number').value;
    row.insertCell(2).innerHTML = document.getElementById('email').value;


    actions.appendChild(createDeleteButton(id));
    document.getElementById('name').value = ' ';
    addCounter(id);

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


