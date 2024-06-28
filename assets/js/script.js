$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear');
  });

  // emailjs to mail contact form data
  $("#contact-form").submit(function (event) {
      event.preventDefault();
      emailjs.init("qaa0s-uOH3nIRUoaK");

      emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
          .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              document.getElementById("contact-form").reset();
              alert("Form Submitted Successfully");
          }, function (error) {
              console.log('FAILED...', error);
              alert("Form Submission Failed! Try Again");
          });
  });

});

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
      document.title = "Portfolio | Arif Ahmed";
      $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
      document.title = "Come Back To Portfolio";
      $("#favicon").attr("href", "assets/images/favicon.png");
  }
});

// typed js effect starts
var typed = new Typed(".typing-text", {
  strings: ["Industrial Design", "Industrial Automation", "Internet of Things", "TVET Training", "Project Planning"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// typed js effect ends

// fetch json 
async function fetchData(type = "skills") {
  let response;
  console.log("type: ",type);
  if (type === "skills") {
      response = await fetch("skills.json");
  } else if (type === "projects") {
      response = await fetch("./projects/projects.json");
  } else {
      throw new Error("Invalid type specified for fetchData function.");
  }
  const data = await response.json();
  console.log("Fetched data:", data); // Log the fetched data for debugging
  return data;
}

function showSkills(skills) {
  console.log("Skills data:", skills); // Log the skills data to verify it's an array
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
          <div class="info">
          <img src="${skill.icon}" alt="${skill.name}" />
          <span>${skill.name}</span>
          </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

function filterSkills(category) {
  fetchData("skills").then(data => {
      let filteredSkills = data;
      if (category !== 'all') {
          filteredSkills = data.filter(skill => skill.category === category);
      }
      showSkills(filteredSkills);
  });
}

// Show all skills on page load
/*document.addEventListener("DOMContentLoaded", function () {
  fetchData("skills").then(data => {
      showSkills(data);
      console.log("skills fetch data success");
  });

  fetchData("projects").then(data => {
      showProjects(data);
  });
});*/
fetchData().then(data => {
  showSkills(data);
});

fetchData("projects").then(data => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects.forEach(project => {
      if (project.category === 'download') {
          projectHTML += `
        <div class="box tilt">
          <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name}" />
          <div class="content">
            <div class="tag">
              <h3>${project.name}</h3>
            </div>
            <div class="desc">
              <p>${project.desc}</p>
              <div class="btns">
                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
              </div>
            </div>
          </div>
        </div>`;
      }
  });
  projectsContainer.innerHTML = projectHTML;
}

// Scroll reveal animation
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: false
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content', { delay: 200 });
/*srtop.reveal('.about .content h3', { delay: 100 });
srtop.reveal('.about .content .tag', { delay: 100 });
srtop.reveal('.about .content p', { delay: 100 });
srtop.reveal('.about .content .box-container', { delay: 100 });
srtop.reveal('.about .content .resumebtn', { delay: 100 });*/


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 100 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
