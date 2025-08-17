// === Student Constructor ===
function Student(name, age, course, grades, contact) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.grades = grades;
  this.contact = contact;
}

//Student List
const students = [
  //50 Student objects here
  new Student("Ali", 20, "Web Development", [85, 90, 78], { email: "ali@gmail.com", phone: "03001234567" }),
  new Student("Sara Khan", 22, "AI & ML", [88, 92, 89], { email: "sara@gmail.com", phone: "03009876543" }),
  new Student("Fatima Qureshi", 21, "Cybersecurity", [85, 72, 87], { email: "fatimaqureshi@gmail.com", phone: "03002947903" }),
  new Student("Sana Malik", 20, "Cloud Computing", [91, 76, 88], { email: "sanamalik@gmail.com", phone: "03008884200" }),
  new Student("Mariam Rehman", 18, "Software Engineering", [71, 84, 88], { email: "mariamrehman@gmail.com", phone: "03002011584" }),
  new Student("Rida Sheikh", 25, "DevOps", [84, 84, 90], { email: "ridasheikh@gmail.com", phone: "03004244397" }),
  new Student("Usman Khan", 22, "Web Development", [79, 86, 75], { email: "usmankhan@gmail.com", phone: "03005387544" }),
  new Student("Noor Bashir", 24, "UI/UX Design", [98, 89, 74], { email: "noorbashir@gmail.com", phone: "03007426685" }),
  new Student("Lubna Riaz", 19, "DevOps", [78, 71, 86], { email: "lubnariaz@gmail.com", phone: "03004012047" }),
  new Student("Neha Khan", 25, "AI & ML", [75, 88, 100], { email: "nehakhan@gmail.com", phone: "03009969742" }),
  new Student("Ahmed Rehman", 21, "Cybersecurity", [96, 93, 100], { email: "ahmedrehman@gmail.com", phone: "03005272582" }),
  new Student("Sara Sheikh", 23, "Data Science", [92, 90, 88], { email: "sarasheikh@gmail.com", phone: "03003270314" }),
  new Student("Laiba Javed", 19, "Cloud Computing", [98, 97, 75], { email: "laibajaved@gmail.com", phone: "03009910276" }),
  new Student("Komal Malik", 23, "Software Engineering", [90, 97, 74], { email: "komalmalik@gmail.com", phone: "03005735415" }),
  new Student("Amber Sheikh", 25, "Web Development", [88, 98, 83], { email: "ambersheikh@gmail.com", phone: "03003380392" }),
  new Student("Adnan Ali", 19, "Cybersecurity", [72, 70, 90], { email: "adnanali@gmail.com", phone: "03008442297" }),
  new Student("Hina Qureshi", 24, "UI/UX Design", [91, 92, 70], { email: "hinaqureshi@gmail.com", phone: "03007285399" }),
  new Student("Yasir Malik", 21, "DevOps", [85, 89, 84], { email: "yasirmalik@gmail.com", phone: "03008530936" }),
  new Student("Bilal Khan", 23, "Software Engineering", [86, 84, 95], { email: "bilalkhan@gmail.com", phone: "03004789793" }),
  new Student("Ayesha Khan", 20, "AI & ML", [88, 90, 95], { email: "ayeshakhan@gmail.com", phone: "03006589235" }),
  new Student("Sundas Javed", 20, "Data Science", [100, 79, 78], { email: "sundasjaved@gmail.com", phone: "03002163390" }),
  new Student("Talha Iqbal", 22, "Web Development", [97, 87, 87], { email: "talhaiqbal@gmail.com", phone: "03004003487" }),
  new Student("Rabia Malik", 24, "Cybersecurity", [95, 88, 76], { email: "rabiamalik@gmail.com", phone: "03009029211" }),
  new Student("Anam Riaz", 19, "Cloud Computing", [81, 90, 74], { email: "anamriaz@gmail.com", phone: "03006042184" }),
  new Student("Taha Qureshi", 23, "UI/UX Design", [70, 71, 98], { email: "tahaqureshi@gmail.com", phone: "03002425657" }),
  new Student("Rehan Ali", 18, "Data Science", [89, 74, 88], { email: "rehanali@gmail.com", phone: "03006686846" }),
  new Student("Sana Javed", 21, "DevOps", [83, 95, 98], { email: "sanajaved@gmail.com", phone: "03007886266" }),
  new Student("Zainab Khan", 22, "Software Engineering", [90, 81, 72], { email: "zainabkhan@gmail.com", phone: "03004279888" }),
  new Student("Danish Sheikh", 23, "Web Development", [95, 85, 83], { email: "danishsheikh@gmail.com", phone: "03005020794" }),
  new Student("Mehwish Rehman", 25, "Cybersecurity", [92, 85, 100], { email: "mehwishrehman@gmail.com", phone: "03008755986" }),
  new Student("Rafay Khan", 19, "UI/UX Design", [75, 78, 70], { email: "rafaykhan@gmail.com", phone: "03007445145" }),
  new Student("Asim Mehmood", 26, "Investigator", [100, 99, 100], { email: "asimmehmood@gmail.com", phone: "03007800275" }),
  new Student("Zoya Riaz", 18, "AI & ML", [100, 77, 80], { email: "zoyariaz@gmail.com", phone: "03006451883" }),
  new Student("Nida Qureshi", 21, "Software Engineering", [95, 89, 77], { email: "nidaqureshi@gmail.com", phone: "03004768437" }),
  new Student("Kashif Javed", 22, "Data Science", [89, 83, 92], { email: "kashifjaved@gmail.com", phone: "03001122407" }),
  new Student("Wasif Iqbal", 24, "Cybersecurity", [91, 71, 84], { email: "wasifiqbal@gmail.com", phone: "03004698436" }),
  new Student("Owais Sheikh", 25, "DevOps", [90, 91, 91], { email: "owaissheikh@gmail.com", phone: "03009763539" }),
  new Student("Saif Malik", 19, "Web Development", [71, 94, 96], { email: "saifmalik@gmail.com", phone: "03009109263" }),
  new Student("Hamid Bashir", 20, "AI & ML", [85, 87, 95], { email: "hamidbashir@gmail.com", phone: "03008200356" }),
  new Student("Imran Qureshi", 22, "Cloud Computing", [72, 84, 84], { email: "imranqureshi@gmail.com", phone: "03008760630" }),
  new Student("Hassan Khan", 23, "UI/UX Design", [75, 85, 95], { email: "hassankhan@gmail.com", phone: "03008401360" }),
  new Student("Iqra Sheikh", 25, "Software Engineering", [83, 93, 79], { email: "iqrasheikh@gmail.com", phone: "03002429394" }),
  new Student("Zeeshan Malik", 18, "Cybersecurity", [74, 96, 94], { email: "zeeshanmalik@gmail.com", phone: "03005423485" }),
  new Student("Anaya Khan", 20, "DevOps", [81, 84, 70], { email: "anayakhan@gmail.com", phone: "03009716287" }),
  new Student("Nimra Sheikh", 19, "AI & ML", [89, 91, 100], { email: "nimrasheikh@gmail.com", phone: "03007357879" }),
  new Student("Zeeshan Qureshi", 22, "Web Development", [84, 71, 76], { email: "zeeshanqureshi@gmail.com", phone: "03008503729" }),
  new Student("Nashit Malik", 23, "Data Science", [84, 86, 93], { email: "nashitmalik@gmail.com", phone: "03009337932" }),
  new Student("Faisal Riaz", 25, "Cloud Computing", [89, 95, 88], { email: "faisalriaz@gmail.com", phone: "03008709915" }),
  new Student("Hira Sheikh", 24, "Software Engineering", [89, 91, 71], { email: "hirasheikh@gmail.com", phone: "03005916133" }),
  new Student("Mubeen Khan", 21, "Cybersecurity", [90, 73, 94], { email: "mubeenkhan@gmail.com", phone: "03008606635" })
];

// === DOM Elements ===
const container = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// === Pagination Logic ===
let studentsPerPage = 10;
let currentIndex = 0;

// === Render Function ===
function renderStudents(list) {
  const slice = list.slice(currentIndex, currentIndex + studentsPerPage);
  slice.forEach((student, index) => {
    const card = document.createElement('div');
    card.className = 'student-card';
    card.innerHTML = `
      <h3>${currentIndex + index + 1}. ${student.name}</h3>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <p><strong>Grades:</strong> ${student.grades.join(', ')}</p>
      <p><strong>Email:</strong> ${student.contact.email}</p>
      <p><strong>Phone:</strong> ${student.contact.phone}</p>
    `;
    container.appendChild(card);
  });

  currentIndex += studentsPerPage;

  if (currentIndex >= list.length) {
    loadMoreBtn.style.display = 'none';
  }
}

// === Initial Render ===
renderStudents(students);

// === Load More Handler ===
loadMoreBtn.addEventListener('click', () => {
  renderStudents(students);
});

// === Search Handler ===
searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query) ||
    s.course.toLowerCase().includes(query)
  );

  container.innerHTML = '';
  currentIndex = 0;
  loadMoreBtn.style.display = filtered.length > studentsPerPage ? 'block' : 'none';
  renderStudents(filtered);
});