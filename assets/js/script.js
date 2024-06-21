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
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
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
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Arif Ahmed";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
    });

8
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Industrial Design", "Industrial Automation", "Internet of Things", "TVET Training", "Project Planning"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

const skillsData = [
    {
      name: "SolidWorks",
      icon: "https://img.icons8.com/?size=100&id=62397&format=png&color=000000",
      category: "CAD Software"
    },
    {
      name: "Onshape",
      icon: "https://play-lh.googleusercontent.com/yAS9WJJnjlCx77RxIvJSssrixhCdUxnBlM3CuPnQpl8QI3Ez19KreBL4xREc1gtmK_Y",
      category: "CAD Software"
    },
    {
      name: "Fusion 360",
      icon: "https://www.softexia.com/wp-content/uploads/2024/04/Autodesk_Fusion_360.webp",
      category: "CAD Software"
    },
    {
      name: "AutoCAD",
      icon: "https://logos-world.net/wp-content/uploads/2020/12/Autocad-Logo.png",
      category: "CAD Software"
    },
    {
      name: "Autodesk Inventor",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWa67bjrJIYCX67ffP36BlY09SpFsbsSSmg&s",
      category: "CAD Software"
    },
    {
      name: "Catia",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/60/DS-CATIA-Logo.png",
      category: "CAD Software"
    },
    {
      name: "FreeCAD",
      icon: "https://e7.pngegg.com/pngimages/615/745/png-clipart-freecad-computer-aided-design-open-source-software-3d-modeling-software-design-blue-angle.png",
      category: "CAD Software"
    },
    {
      name: "MasterCAM",
      icon: "https://allvectorlogo.com/img/2017/07/mastercam-logo.png",
      category: "CAD Software"
    },
    {
      name: "ArtCAM",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMgjw-7VBgpkxB6xVHUXznrxWymOg2zJChg&s",
      category: "CAD Software"
    },
    {
      name: "Geomagic Design X",
      icon: "https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/50803a25-8e13-4f65-8c2e-f81d1296f633.png",
      category: "CAD Software"
    },
    {
      name: "C/C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
      category: "Programming Language"
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
      category: "Programming Language"
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      category: "Programming Language"
    },
    {
      name: "NodeJS",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
      category: "Programming Language"
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/48/000000/postgreesql.png",
      category: "Programming Language"
    },
    {
      name: "DigitalOcean",
      icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
      category: "Programming Language"
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
      category: "Programming Language"
    },
    {
      name: "HTML5",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      category: "Programming Language"
    },
    {
      name: "CSS3",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
      category: "Programming Language"
    },
    ,
    {
      name: "Linux",
      icon: "https://image.similarpng.com/very-thumbnail/2021/09/Linux-icon-design-on-transparent-background-PNG.pngs",
      category: "Programming Language"
    },
    {
      name: "Arduino",
      icon: "https://w7.pngwing.com/pngs/174/620/png-transparent-arduino-hd-logo.png",
      category: "Automation and IoT "
    },
    {
      name: "Node-Red",
      icon: "https://logowik.com/content/uploads/images/node-red4832.logowik.com.webp",
      category: "Automation and IoT "
    },
    {
      name: "ThingsBoard",
      icon: "https://asset.brandfetch.io/id8ftKrGt3/idc1SXKXki.jpeg",
      category: "Automation and IoT "
    },
    {
      name: "MQTT",
      icon: "https://mqtt.org/assets/downloads/mqtt-ver.png",
      category: "Automation and IoT "
    },
    {
      name: "Raspberry Pi",
      icon: "https://miro.medium.com/v2/resize:fit:1200/0*EonQaU90v2fwXO3c.png",
      category: "Automation and IoT"
    },
    {
      name: "Siemens PLC",
      icon: "https://ngocautomation.com/wp-content/uploads/2020/08/TIA-V16-1.png",
      category: "Automation and IoT"
    },
    {
      name: "SCADA",
      icon: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d19102425cd16dd7ea2e286d8f3d694a/simatic-wincc.jpg",
      category: "Automation and IoT"
    },
    {
      name: "Mitsubishi PLC",
      icon: "https://vattutudonghoa.com/content/images/thumbs/0017273_software_gx_works_3_ver_1038q.png",
      category: "Automation and IoT"
    },
    {
      name: "Siemens PLC",
      icon: "https://ngocautomation.com/wp-content/uploads/2020/08/TIA-V16-1.png",
      category: "Automation and IoT"
    },
    {
      name: "Ansys",
      icon: "https://e7.pngegg.com/pngimages/51/79/png-clipart-ansys-logo-nasdaq-anss-engineering-geometry-background-company-text.png",
      category: "Research and Simulation"
    },
    {
      name: "MATLAB",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc36bSKd51qFqjmBk_cDA3eNAeYF2Dtc_fWQ&s",
      category: "Research and Simulation"
    },
    {
      name: "CFTurbo",
      icon: "https://e7.pngegg.com/pngimages/51/79/png-clipart-ansys-logo-nasdaq-anss-engineering-geometry-background-company-text.png",
      category: "Research and Simulation"
    },
    {
      name: "ROS2",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72zhKupIgXa2wpEOH35TkbgDRkqGfgiCM1Q&s",
      category: "Research and Simulation"
    },
    {
      name: "Gazebo",
      icon: "https://gazebosim.org/assets/images/logos/gazebo_vert_pos.svg",
      category: "Research and Simulation"
    }

  ];
  
  function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
      skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
  }
  
  function filterSkills(category) {
    let filteredSkills = skillsData;
    if (category !== 'all') {
      filteredSkills = skillsData.filter(skill => skill.category === category);
    }
    showSkills(filteredSkills);
  }
  
  // Show all skills on page load
  document.addEventListener("DOMContentLoaded", function() {
    showSkills(skillsData);
  });

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
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
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

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


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
/*var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat
*/

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
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
/*srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });*/


/* SCROLL SKILLS */
/*srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
/*srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
/*srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
/*srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });


/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });