const roles = {
	admin: "https://e7.pngegg.com/pngimages/19/226/png-clipart-richard-armitage-thorin-oakenshield-the-hobbit-an-unexpected-journey-bilbo-baggins-gandalf-the-hobbit-wizard-dwarf-thumbnail.png",
	student: "https://e7.pngegg.com/pngimages/950/105/png-clipart-the-hobbit-an-unexpected-journey-gollum-bilbo-baggins-gandalf-the-hobbit-s-mammal-vertebrate-thumbnail.png",
	lector: "https://e7.pngegg.com/pngimages/306/370/png-clipart-smaug-dragon-thorin-oakenshield-the-hobbit-cliff-dragon-mammal-dragon-thumbnail.png",
  };
  
  const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
  };
  
  const users = [
	{
	  name: "Dvalyn",
	  age: 42,
	  img: "https://e7.pngegg.com/pngimages/725/211/png-clipart-dwalin-thorin-oakenshield-the-hobbit-bombur-dwarf-dwarf-mammal-chibi-thumbnail.png",
	  role: "student",
	  courses: [
		{
		  "title": "Self-defense",
		  "mark": 20
		},
		{
		  "title": "Riding",
		  "mark": 100
		}
	  ]
	},
	{
	  name: "Kily",
	  age: 20,
	  img: "https://e7.pngegg.com/pngimages/355/409/png-clipart-thranduil-kili-thorin-oakenshield-legolas-fili-the-hobbit-chibi-fictional-character-thumbnail.png",
	  role: "student"
	},
	{
	  name: "Ballyn",
	  age: 43,
	  img: "https://e7.pngegg.com/pngimages/254/463/png-clipart-the-hobbit-balin-the-lord-of-the-rings-fili-bilbo-baggins-dwarf-rings-chibi-cartoon-thumbnail.png",
	  role: "student",
	  courses: [
		{
		  "title": "Intelligence",
		  "mark": 55
		}
	  ]
	},
	{
	  name: "Bombur",
	  age: 18,
	  img: "https://e7.pngegg.com/pngimages/743/129/png-clipart-bilbo-baggins-the-hobbit-kili-thranduil-thorin-oakenshield-small-spoon-mammal-carnivoran-thumbnail.png",
	  role: "student",
	  courses: [
		{
		  "title": "Self-defense",
		  "mark": 85
		},
		{
		  "title": "Power",
		  "mark": 20
		}]
	},
	{
	  name: "Tranduil",
	  age: 130,
	  img: "https://e7.pngegg.com/pngimages/567/1019/png-clipart-thranduil-legolas-tauriel-anime-bilbo-baggins-anime-face-chibi-thumbnail.png",
	  role: "admin",
	  courses: [
		{
		  "title": "Self-defense",
		  "score": 20,
		  "lector": "Gendalf"
		},
		{
		  "title": "Power",
		  "score": 55,
		  "lector": "Smaug"
		},
		{
		  "title": "Intelligence",
		  "score": 85,
		  "lector": "Sauron"
		}]
	},
	{
	  name: "Smaug",
	  age: 253,
	  img: "https://e7.pngegg.com/pngimages/967/637/png-clipart-smaug-drawing-the-hobbit-dragon-dragon-dragon-fictional-character-thumbnail.png",
	  role: "lector",
	  courses: [
		{
		  "title": "Power",
		  "score": 55,
		  "studentsScore": 85
		},
		{
		  "title": "Self-defense",
		  "score": 85,
		  "studentsScore": 85
		}
	  ]
	}
  ];
  
  class User {
	constructor(name, age, img, role, courses) {
	  this.name = name;
	  this.age = age;
	  this.img = img;
	  this.role = role;
	  this.courses = courses;
	}
  
	render() {
	  let usersContainer = document.querySelector('.users');
	  let userDiv = document.createElement('div');
	  userDiv.className = 'user';
	  usersContainer.appendChild(userDiv);
  
	  let userInfoDiv = document.createElement('div');
	  userInfoDiv.className = 'user__info';
	  userDiv.appendChild(userInfoDiv);
  
	  let userInfoDataDiv = document.createElement('div');
	  userInfoDataDiv.className = 'user__info--data';
	  userInfoDiv.appendChild(userInfoDataDiv);
  
	  let userImg = document.createElement('img');
	  userImg.src = this.img;
	  userImg.alt = this.name;
	  userImg.height = 50;
	  userInfoDataDiv.appendChild(userImg);
  
	  let userNamingDiv = document.createElement('div');
	  userNamingDiv.className = 'user__naming';
	  userInfoDataDiv.appendChild(userNamingDiv);
  
	  let nameParagraph = document.createElement('p');
	  nameParagraph.innerHTML = `<b>Name:</b> ${this.name}`;
	  userNamingDiv.appendChild(nameParagraph);
  
	  let ageParagraph = document.createElement('p');
	  ageParagraph.innerHTML = `<b>Age:</b> ${this.age}`;
	  userNamingDiv.appendChild(ageParagraph);
  
	  let roleDiv = document.createElement('div');
	  roleDiv.className = `user__info--role ${this.role}`;
	  userInfoDiv.appendChild(roleDiv);
  
	  let roleImg = document.createElement('img');
	  roleImg.src = roles[this.role];
	  roleImg.alt = this.role;
	  roleImg.height = 25;
	  roleDiv.appendChild(roleImg);
  
	  let roleParagraph = document.createElement('p');
	  roleParagraph.textContent = this.role;
	  roleDiv.appendChild(roleParagraph);
  
	  if (this.courses) {
		this.renderCourses(userDiv);
	  }
	}
  
	renderCourses(userDiv) {
	  if (!this.courses) return;
  
	  let coursesDiv = document.createElement('div');
	  coursesDiv.className = 'user__courses';
	  userDiv.appendChild(coursesDiv);
  
	  for (const course of this.courses) {
		let courseParagraph = document.createElement('p');
		courseParagraph.className = `user__courses--course ${this.role}`;
		let scoreText = gradation[course.mark] || gradation[course.score];
		courseParagraph.innerHTML = `${course.title}: ${scoreText}`;
		coursesDiv.appendChild(courseParagraph);
  
		if ('studentsScore' in course) {
		  let avgStudentScoreParagraph = document.createElement('p');
		  avgStudentScoreParagraph.innerHTML = `<b>Average student's score:</b> <span class="${gradation[course.studentsScore]}">${gradation[course.studentsScore]}</span>`;
		  coursesDiv.appendChild(avgStudentScoreParagraph);
		}
  
		if ('lector' in course) {
		  let lectorParagraph = document.createElement('p');
		  lectorParagraph.innerHTML = `<b>Lector:</b> ${course.lector}`;
		  coursesDiv.appendChild(lectorParagraph);
		}
	  }
	}
  }
  
  class Student extends User {
	constructor(name, age, img, role, courses) {
	  super(name, age, img, role, courses);
	}
  }
  
  class Admin extends User {
	constructor(name, age, img, role, courses) {
	  super(name, age, img, role, courses);
	}
  }
  
  class Lector extends User {
	constructor(name, age, img, role, courses) {
	  super(name, age, img, role, courses);
	}
  }
  
 
  for (const userData of users) {
	let userClass = {
	  'student': Student,
	  'admin': Admin,
	  'lector': Lector
	}[userData.role] 
  
	let user = new userClass(userData.name, userData.age, userData.img, userData.role, userData.courses);
	user.render();
  }
  