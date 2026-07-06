// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

};

scrollBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
    
};
// ================= REVEAL ON SCROLL =================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 120) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);
