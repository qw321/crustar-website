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
/*==============================
      LIVE OFFER ROTATOR
==============================*/

const offers = [

"⭐ Signature Biryani • Crafted Fresh Every Order",

"🍰 Handcrafted Desserts • Premium Ingredients",

"🥘 Luxury Gourmet Collection • Chef Curated",

"🎉 Birthdays • Corporate Events • Private Celebrations",

"🚚 Freshly Prepared • Delivered With Care",

"👨‍🍳 Experience The Taste Of CRUSTAR"

];

let currentOffer = 0;

const liveOffer = document.getElementById("liveOfferText");

if(liveOffer){

setInterval(function(){

liveOffer.style.opacity="0";

setTimeout(function(){

currentOffer++;

if(currentOffer>=offers.length){

currentOffer=0;

}

liveOffer.innerHTML=offers[currentOffer];

liveOffer.style.opacity="1";

},300);

},4000);

}
/* ===========================
   GOURMET POPUP
=========================== */

function openGourmetPopup(type){

    document.getElementById("gourmetPopup").style.display="block";

    document.body.style.overflow="hidden";

}

function closeGourmetPopup(){

    document.getElementById("gourmetPopup").style.display="none";

    document.body.style.overflow="auto";

}

window.onclick=function(e){

    const popup=document.getElementById("gourmetPopup");

    if(e.target===popup){

        closeGourmetPopup();

    }

}
