const ITEMS_LEVEL = [
    {
        value: 0,
        color: 'bg-dark',
        text: 'Small',
    },
    {
        value: 1,
        color: 'bg-info',
        text: 'Medium',
    },
    {
        value: 2,
        color: 'bg-danger',
        text: 'High',
    },
];

let btnAddTask = document.getElementById('addTask');
let areaForm = document.getElementById('area-form');
let areaListTask = document.getElementById('area-list-task');
let dropDownItem = document.getElementsByClassName('dropdown-item');
let btnSubmit = document.getElementById('btn-submit');
let btnCancel = document.getElementById('btn-cancel');
let inputName = document.getElementById('input-name');
let inputLevel = document.getElementById('input-level');
let inputId = document.getElementById('input-id');
let search = document.getElementById('btn-search');
let sortBy = 'name';
let sortDir = 'asc';


// let items = [
//     {
//         id: makeID(),
//         name: 'task 1',
//         level: 0,
//     },
//     {
//         id: makeID(),
//         name: 'task 2',
//         level: 1,
//     },
//     {
//         id: makeID(),
//         name: 'task 3',
//         level: 2,
//     },
// ];

// localStorage.setItem('TODOS_ITEMS', JSON.stringify(items))
//  saveStorage(items);
let items = loadStorage();
showItems(items);

// EVENTS
btnAddTask.addEventListener('click', function () {
    let isShowForm = areaForm.classList.contains('d-none');
    toggleForm(isShowForm);
    resetInput();
});

dropDownItem.forEach(element => {
element.addEventListener('click', function(){
    sortBy = element.getAttribute('data-sort-by');
    sortDir = element.getAttribute('data-sort-dir');
    showShortDisplay();

    if ( sortBy = 'name' && sortDir == 'asc'){
        sortNameAsc();
    }
    if ( sortBy = 'name' && sortDir == 'desc'){
        sortNameDesc();
    }
    if ( sortBy = 'level' && sortDir == 'asc'){
        sortLevelAsc();
    }
    if ( sortBy = 'level' && sortDir == 'desc'){
        sortLevelDesc();
    }
});   
});



document.getElementById('area-list-task').addEventListener('click', function (e) {
    let element = e.target;
    if (element.classList.contains('btn-delete')){

    let id = element.getAttribute('data-id');
        let items = deleteItem(id);
        showItems(items);
    }

    if (element.classList.contains('btn-edit')){
        let id = element.getAttribute('data-id');
        let item = getItems(id);
        inputName.value = item.name;
        inputLevel.value = item.level;
        inputId.value = item.id;
        toggleForm();
    }
});

btnSubmit.addEventListener('click', function () { 
    if (inputName.value.trim() == '') {
        alert('Vui long nhap task name');
        return;
    }

    let items = [];
    let item = {
        id: inputId.value ? inputId.value : makeID(),
        name: inputName.value,
        level: Number(inputLevel.value)
    };

    if (inputId.value) {
        items = editItem(item);
    } else {
        items = addItem(item);
    }

    resetInput();
    toggleForm(false);
    showItems(items);
});
btnCancel.addEventListener('click', function(){
    toggleForm(false);
    resetInput();

})

search.addEventListener('click', function() {
    
})

// FUNCTIONS
function toggleForm(isShow = true){
    if (isShow) {
        areaForm.classList.remove('d-none');
        btnAddTask.classList.remove('btn-info');
        btnAddTask.classList.add('btn-danger');
        btnAddTask.textContent = 'close';
    } else {
        areaForm.classList.add('d-none');
        btnAddTask.classList.remove('btn-danger');
        btnAddTask.classList.add('btn-info');
        btnAddTask.textContent = 'Add';
    }
}

function showItemLevel(level) {
    let htmlLevel = '';
    let itemLevel = ITEMS_LEVEL.find(element => element.value == level);
    return `<span class="badge ${itemLevel.color}">${itemLevel.text}</span>`;
}

function showShortDisplay(){
    document.getElementById('sort-display').innerHTML =`${sortBy} - ${sortDir}`.toUpperCase();
}



function makeID(length = 5) {
    let result = [];
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
}
function deleteItem(id){
    let items = loadStorage();
    let index = items.findIndex((element) => element.id == id);
    items.splice(index, 1);
    saveStorage(items);
    return items;
}
function editItem(item){
    let items = loadStorage();
    let index = items.findIndex((element) => element.id == item.id);
    items.splice(index, 1, item);
    saveStorage(items);
    return items;
}
 function addItem(item) {
  
    let items = loadStorage();
    items.push(item);
    saveStorage(items);
    return items;
};
function loadStorage() {
    let items = JSON.parse(localStorage.getItem('TODOS_ITEMS'));
    if (items) {
        return items;
    } else {
        return [];
    }
}

function saveStorage(items) {
    localStorage.setItem('TODOS_ITEMS', JSON.stringify(items));
}

function showItems(items) {
    let content = '';
    for (let index = 0; index < items.length; index++) {
        let level = showItemLevel(items[index].level);
        let id = items[index].id;

        content += `
        <tr>
            <td>${id}</td>
            <td>${items[index].name}</td>
            <td>${level}</td>
          
            <td>
                <button class="btn btn-warning btn-edit" data-id= "${id}">Edit</button>
                <button class="btn btn-danger btn-delete" data-id = "${id}">Delete</button>
            </td>
        </tr>`;
    }
    document.getElementById('area-list-task').innerHTML = content;
}

function resetInput(){
    inputName.value = '';
    inputLevel.value = 0;
    inputId.value = '';
}
function getItems(id) {
    let items = loadStorage();
    let item = items.find((element) => element.id == id);
    return item;
}

function sortNameAsc() {
    let sortItems = loadStorage();
    let sortNameAsc = items.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
});
    if (sortItems) {
        saveStorage(sortNameAsc);
        loadStorage();
        showItems(sortNameAsc);
    }
}
