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

    const title=document.querySelector(".gourmet-popup h2");
    const subtitle=document.querySelector(".popup-subtitle");
    const occasion=document.querySelector(".occasion-single");
    const list=document.querySelector(".premium-list");
    const quoteTitle=document.querySelector(".quote-box h3");
    const quoteText=document.querySelector(".quote-box p");
    const button=document.querySelector(".quote-btn");

    if(type==="birthday"){

        title.innerHTML="🎂 Birthday Celebrations";

        subtitle.innerHTML="Celebrate with CRUSTAR Gourmet";

        occasion.innerHTML="🎂 Birthday Parties";

        list.innerHTML=`
            <li>✨ Bespoke Gourmet Experience</li>
            <li>🍽 Premium Food Presentation</li>
            <li>👨‍🍳 Freshly Prepared on Order</li>
            <li>🎂 Customized Birthday Menu</li>
        `;

        quoteTitle.innerHTML="Curate My Celebration";

        quoteText.innerHTML="Every birthday deserves a menu crafted exclusively for the occasion. Tell us about your celebration and we'll curate a gourmet experience designed especially for you.";

        button.innerHTML="✨ Curate My Celebration";

        button.href="https://wa.me/919189041273?text=Hi CRUSTAR, I'd like to plan a Birthday Celebration.";

    }

    else if(type==="anniversary"){

        title.innerHTML="💍 Anniversary Celebrations";

        subtitle.innerHTML="Celebrate another beautiful chapter with CRUSTAR Gourmet.";

        occasion.innerHTML="💍 Anniversary Celebrations";

        list.innerHTML=`
            <li>💖 Cherished Moments Together</li>
            <li>🍽 Thoughtfully Curated Dining</li>
            <li>🌹 Meaningful Celebrations</li>
            <li>✨ A Memorable Anniversary Experience</li>
        `;

        quoteTitle.innerHTML="Celebrate Together";

        quoteText.innerHTML="Every anniversary deserves its own special experience. Share your celebration with us and we'll curate a gourmet experience crafted especially for your occasion.";

        button.innerHTML="❤️ Celebrate Together";

        button.href="https://wa.me/919189041273?text=Hi CRUSTAR, I'd like to plan an Anniversary Celebration.";

    }

    document.getElementById("gourmetPopup").style.display="block";

    document.body.style.overflow="hidden";

}
