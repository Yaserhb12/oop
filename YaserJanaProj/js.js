

const users = [
    {
    
        "username": "Yaser Habarat ",
        "phone": "050-3443181",
        "email":"yaser@gmail.com",
        "photo": "images/id23.png" 
    },
    {
        "id": "2235537",
        "username":"jana khalile"  ,
        "email":"jana@gmail.com",
        "phone": "050-8531114",
           "photo": "images/id23.png"
    },
    {
       
        "username":" Also bonde ",
        "email":"also@gmail.com",
        "phone": "050-1234567",
        "photo": "images/id23.png"
    },

  
  ];
  
  const list = document.querySelector(".list");
  
  function loadContacts() {
    list.innerHTML = '';
    users.forEach((elem, ind) => {
        const item = document.createElement('li');
        item.className = "item";
        item.innerHTML = `
            <img src="${elem.photo}" alt="Contact Photo" style="width:50px;height:50px;">
            <span>${elem.username}</span>
            <button onclick="editContact(${ind})"><img src="images/edit.png" ></button>
            <button onclick="showContactInfo(${ind})"><img src="images/information.png"></button>
            <button onclick="deleteContact(${ind})"><img src="images/delete (3).png" "></button>
        `;
        list.append(item);
    });
    updatePeopleCount();
  }
  
  function openPopup() {
    document.getElementById('popupTitle').innerText = 'Add Contact';
    document.getElementById('contactIndex').value = '';
    document.getElementById('inputUserName').value = '';
    document.getElementById('inputUserPhone').value = '';
    document.getElementById('inputUserPhoto').value = '';
    document.getElementById('myModal').style.display = 'flex';
  }
  
  function closeModal(event) {
    if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
        document.getElementById('myModal').style.display = 'none';
    }
  }
  
  function saveContact() {
    const index = document.getElementById('contactIndex').value;
    const name = document.getElementById('inputUserName').value;
    const phone = document.getElementById('inputUserPhone').value;
    const photoInput = document.getElementById('inputUserPhoto');
    let photo = '';
  
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            photo = e.target.result;
            if (index === '') {
                users.push({ id: Date.now().toString(), username: name, phone: phone, photo: photo });
            } else {
                users[index] = { ...users[index], username: name, phone: phone, photo: photo };
            }
            closeModal({ target: document.getElementById('myModal') });
            loadContacts();
        }
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        if (index === '') {
            users.push({ id: Date.now().toString(), username: name, phone: phone, photo: 'images/default.jpg' });
        } else {
            users[index] = { ...users[index], username: name, phone: phone };
        }
        closeModal({ target: document.getElementById('myModal') });
        loadContacts();
    }
  }
  
  function editContact(index) {
    document.getElementById('popupTitle').innerText = 'Edit Contact';
    document.getElementById('contactIndex').value = index;
    document.getElementById('inputUserName').value = users[index].username;
    document.getElementById('inputUserPhone').value = users[index].phone;
    document.getElementById('myModal').style.display = 'flex';
  }
  
  function deleteContact(index) {
    users.splice(index, 1);
    updatePeopleCount();
    loadContacts();
  }
  
  function deleteAllContacts() {
    users.length = 0;
    updatePeopleCount();
    loadContacts();
  }
  
  function showContactInfo(index) {
    const user = users[index];
    document.getElementById('infoName').textContent = `Name: ${user.username}`;
    document.getElementById('infoPhone').textContent = `Phone: ${user.phone}`;
    document.getElementById('infoAddress').textContent = `Address: ${user.address}`;
    document.getElementById('infoEmail').textContent = `Email: ${user.email}`;
    document.getElementById('infoModal').style.display = 'flex';
  }
  
  function closeInfoPopup() {
    document.getElementById('infoModal').style.display = 'none';
  }
  
  function updatePeopleCount() {
    const count = users.length;
    document.getElementById('peopleCount').textContent = `${count} People`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadContacts();
  });
  document.addEventListener("DOMContentLoaded", () => {
    const users = [
        { username: "יאסר הבראת", phone: "050-3443181", email: "yaser@gmail.com", photo: "images/id23.png" },
        { id: "2235537", username: "גנא חלאילה", email: "jana@gmail.com", phone: "050-8531114", photo: "images/id23.png" },
        { username: "אלסו בודגנוב", email: "also@gmail.com", phone: "050-1234567", photo: "images/id23.png" }
    ];

    const list = document.querySelector(".list");
    const searchInput = document.getElementById('searchInput');

    function loadContacts(filteredUsers = users) {
        list.innerHTML = '';
        filteredUsers.forEach((elem, ind) => {
            const item = document.createElement('li');
            item.className = "item";
            item.innerHTML = `
                <img src="${elem.photo}" alt="Contact Photo" style="width:50px;height:50px;">
                <span>${elem.username}</span>
                <button onclick="editContact(${ind})"><img src="images/edit.png"></button>
                <button onclick="showContactInfo(${ind})"><img src="images/information.png"></button>
                <button onclick="deleteContact(${ind})"><img src="images/delete (3).png"></button>
            `;
            list.append(item);
        });
        updatePeopleCount();
    }

    function openPopup() {
        document.getElementById('popupTitle').innerText = 'Add Contact';
        document.getElementById('contactIndex').value = '';
        document.getElementById('inputUserName').value = '';
        document.getElementById('inputUserPhone').value = '';
        document.getElementById('inputUserPhoto').value = '';
        document.getElementById('myModal').style.display = 'flex';
    }

    function closeModal(event) {
        if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
            document.getElementById('myModal').style.display = 'none';
        }
    }

    function saveContact() {
        const index = document.getElementById('contactIndex').value;
        const name = document.getElementById('inputUserName').value;
        const phone = document.getElementById('inputUserPhone').value;
        const photoInput = document.getElementById('inputUserPhoto');
        let photo = '';

        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                photo = e.target.result;
                if (index === '') {
                    users.push({ id: Date.now().toString(), username: name, phone: phone, photo: photo });
                } else {
                    users[index] = { ...users[index], username: name, phone: phone, photo: photo };
                }
                closeModal({ target: document.getElementById('myModal') });
                loadContacts();
            }
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            if (index === '') {
                users.push({ id: Date.now().toString(), username: name, phone: phone, photo: 'images/default.jpg' });
            } else {
                users[index] = { ...users[index], username: name, phone: phone };
            }
            closeModal({ target: document.getElementById('myModal') });
            loadContacts();
        }
    }

    function editContact(index) {
        document.getElementById('popupTitle').innerText = 'Edit Contact';
        document.getElementById('contactIndex').value = index;
        document.getElementById('inputUserName').value = users[index].username;
        document.getElementById('inputUserPhone').value = users[index].phone;
        document.getElementById('myModal').style.display = 'flex';
    }

    function deleteContact(index) {
        users.splice(index, 1);
        updatePeopleCount();
        loadContacts();
    }

    function deleteAllContacts() {
        users.length = 0;
        updatePeopleCount();
        loadContacts();
    }

    function showContactInfo(index) {
        const user = users[index];
        document.getElementById('infoName').textContent = `Name: ${user.username}`;
        document.getElementById('infoPhone').textContent = `Phone: ${user.phone}`;
        document.getElementById('infoAddress').textContent = `Address: ${user.address || 'N/A'}`;
        document.getElementById('infoEmail').textContent = `Email: ${user.email || 'N/A'}`;
        document.getElementById('infoModal').style.display = 'flex';
    }

    function closeInfoPopup() {
        document.getElementById('infoModal').style.display = 'none';
    }

    function updatePeopleCount() {
        const count = users.length;
        document.getElementById('peopleCount').textContent = `${count} People`;
    }

    function filterContacts() {
        const query = searchInput.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.username.toLowerCase().includes(query) ||
            user.phone.includes(query) ||
            user.email.toLowerCase().includes(query)
        );
        loadContacts(filteredUsers);
    }

    searchInput.addEventListener('input', filterContacts);

  
    loadContacts();
});


