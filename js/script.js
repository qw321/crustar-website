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
        <li>✦ Chef-curated selections</li>
        <li>✦ Freshly prepared for your celebration</li>
        <li>✦ Created exclusively for your occasion</li>
    `;

    quoteTitle.innerHTML="Curate Your Birthday Experience";

quoteText.innerHTML="A birthday experience thoughtfully crafted around your celebration, your guests and the moments that matter.";

button.innerHTML="✦ Plan My Birthday Celebration";

    button.href="https://wa.me/8904121730?text=Hi%20CRUSTAR,%20I'd%20like%20to%20create%20a%20Birthday%20Celebration.";
}
   else if(type==="anniversary"){

    title.innerHTML="❤️ Anniversary Celebrations";

    subtitle.innerHTML="Celebrate your journey with CRUSTAR Gourmet";

    occasion.innerHTML="❤️ Anniversary Celebrations";

    list.innerHTML=`
        <li>✦ Chef-curated selections</li>
        <li>✦ Thoughtfully crafted for two</li>
        <li>✦ Elegant presentation & premium flavours</li>
        <li>✦ A celebration designed around your story</li>
    `;

    quoteTitle.innerHTML="Curate Your Anniversary Experience";

    quoteText.innerHTML="Every anniversary is a story worth celebrating. Tell us about your special day, and we'll curate a gourmet experience thoughtfully designed around your journey, your guests and the moments that matter.";

    button.innerHTML="❤️ Plan My Anniversary Celebration";

    button.href="https://wa.me/8904121730?text=Hi%20CRUSTAR,%20I'd%20like%20to%20curate%20an%20Anniversary%20Celebration.";

}
    else if(type==="corporate"){

    title.innerHTML="🏢 Corporate Events";

    subtitle.innerHTML="Elevate every corporate occasion with CRUSTAR Gourmet";

    occasion.innerHTML="🏢 Corporate Events";

    list.innerHTML=`
        <li>✦ Premium gourmet selections for teams</li>
        <li>✦ Executive meetings & business gatherings</li>
        <li>✦ Corporate celebrations & milestones</li>
        <li>✦ Thoughtfully presented for a professional setting</li>
    `;

    quoteTitle.innerHTML="Curate Your Corporate Experience";

    quoteText.innerHTML="From executive meetings to team celebrations, CRUSTAR Gourmet creates thoughtfully curated experiences designed to make every corporate occasion memorable.";

    button.innerHTML="✦ Plan My Corporate Experience";

    button.href="https://wa.me/8904121730?text=Hi%20CRUSTAR,%20I'd%20like%20to%20plan%20a%20Corporate%20Event.";
}

    document.getElementById("gourmetPopup").style.display="block";

    document.body.style.overflow="hidden";

}
function closeGourmetPopup(){
    document.getElementById("gourmetPopup").style.display="none";
    document.body.style.overflow="auto";
}
