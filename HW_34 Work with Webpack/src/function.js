export function displayUsers(users) {
    const userList = document.createElement('ul');
    userList.className = 'user-list';
  
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <p>ID:</p> ${user.id}<br>
        <p>Name:</p> ${user.name}<br>
        <p>Age:</p ${user.age}<br>
        <p>Email:</p> ${user.email}<br>
        <p>Country:</p> ${user.country}<br>
        <p>Company:</p> ${user.company}<br>
        <p>Birthday:</p> ${user.birthday}<br>
        
      `;
  
      userList.appendChild(listItem);
    });
  
    document.body.appendChild(userList);
  }