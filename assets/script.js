const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];
const TeamContainer = document.getElementById("team-container");

function createCard(member) {
  return `
 <div class="col-12 col-sm-6 col-md-4">
      <div class="card shadow-sm border-0 h-100">
        <img src="./${member.img}" class="card-img-top" alt="${member.name}">
        
        <div class="card-body">
          <h5 class="card-title mb-1">${member.name}</h5>
          <p class="card-text text-muted mb-2">${member.role}</p>
          <a href="mailto:${member.email}" class="text-decoration-none">
            ${member.email}
          </a>
        </div>
      </div>
    </div>
  `;
}

let cardsMarkup = "";

for (let i = 0; i < teamMembers.length; i++) {
  cardsMarkup += createCard(teamMembers[i]);
}

TeamContainer.innerHTML = cardsMarkup;
