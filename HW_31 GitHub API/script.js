const btn = document.querySelector('.search-btn');
const inputSearch = document.querySelector('.search');
const randomBtn = document.querySelector('.random-btn');
const cardContainer = document.querySelector('.cardContainer');
const wrapp = document.querySelector('.search-wrapp');

const API = 'https://api.github.com';

async function getSearchProfiles() {
  const username = inputSearch.value;

  if (!username) {
    alert('Please enter a name of the profile you need to search');
    return;
  }
  try {
    const userData = await fetchUserData(API, username);
    const userCard = renderCard(userData, username);
    displayUserRepositories(username, userCard);
    hideSearch();
  } catch (error) {
    console.error(error);
  }
}

function hideSearch() {
  wrapp.style.display = 'none';
}

btn.addEventListener('click', getSearchProfiles);
inputSearch.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    getSearchProfiles();
  }
});

async function fetchUserData(api, username) {
  const response = await fetch(`${api}/users/${username}`);
  const userData = await response.json();
  return userData;
}

async function getRandomUserData(api) {
  const response = await fetch(`${api}/users`);
  const users = await response.json();
  const randomIndex = Math.floor(Math.random() * users.length);
  
  return users[randomIndex];
}

randomBtn.addEventListener('click', async function () {
  try {
    const randomUser = await getRandomUserData(API);
    const userCard = renderCard(randomUser, randomUser.login);
    displayUserRepositories(randomUser.login, userCard);
  } catch (error) {
    console.error(error);
  }
  hideSearch();
});

async function displayUserRepositories(username, userCard) {
  try {
    const repos = await fetch(`${API}/users/${username}/repos`);
    const reposData = await repos.json();
    renderRepositories(username, userCard, reposData);
  } catch (error) {
    console.error( error);
  }
}

function renderCard(userData, username) {
  const userInfo = `
    <img src="${userData.avatar_url}" class="avatar">
    <h2>${userData.name || username}</h2>
    <p>${userData.bio || 'This user hasn`t  any bio information'}</p>
    <p>Location: ${userData.location || 'This user hasn`t  any location information'}</p>
    <p>Followers: ${userData.followers !== undefined ? userData.followers : 'Unfortunetely this user hasn`t any followers '}</p>
  `;
  const userCard = document.createElement('div');
  userCard.className = 'card';
  userCard.innerHTML = userInfo;
  cardContainer.appendChild(userCard);

  return userCard;
}

function renderRepositories(username, userCard, repositories) {
  const repoContainer = document.createElement('div');
  repoContainer.classList.add('repositories');

  const repoCount = repositories.length;

  const repoCountElement = document.createElement('p');
  repoCountElement.innerHTML = `Repositories: ${repoCount}`;

  repoContainer.appendChild(repoCountElement);
  userCard.appendChild(repoContainer);
}

