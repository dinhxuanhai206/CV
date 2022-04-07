let btnAddTask = document.getElementById('btn-add-task');
let areaForm = document.getElementById('area-form');

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

// localStorage.setItem('LIST_TASK', JSON.stringify(items));

let items = localStorage.getItem('LIST_TASK');

// Duyet qua items do danh sach cac item ra table
let content = '';

for (let index = 0; index < items.length; index++) {
    let level = showItemLevel(items[index].level);
    content += `
    <tr>
        <td>${items[index].id}</td>
        <td>${items[index].name}</td>
        <td>${level}</td>
        <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
        </td>
    </tr>
    `;
}

document.getElementById('area-list-task').innerHTML = content;

// EVENTS
btnAddTask.addEventListener('click', function () {
    let isShowForm = areaForm.classList.contains('d-none');
    toggleForm(isShowForm);
});

// FUNCTIONS
function toggleForm(isShow) {
    if (isShow) {
        areaForm.classList.remove('d-none');
        btnAddTask.classList.remove('btn-info');
        btnAddTask.classList.add('btn-danger');
        btnAddTask.textContent = 'Close';
    } else {
        areaForm.classList.add('d-none');
        btnAddTask.classList.remove('btn-danger');
        btnAddTask.classList.add('btn-info');
        btnAddTask.textContent = 'Add';
    }
}

function showItemLevel(level) {
    // Xử lý để trả về level phù hợp
    return `<span class="badge bg-info">Medium</span>`;
}

function makeID(length = 5) {
    // trả về chuỗi có độ dài {length} ký tự ngẫu nhiên A-Za-z0-9
}
