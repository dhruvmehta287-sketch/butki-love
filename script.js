// Relationship Start Date
const startDate = new Date("December 20, 2023 00:00:00");

function updateLoveTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveTimer").innerHTML = `
        ❤️ ${days} Days
        <br>
        ${hours} Hours
        ${minutes} Minutes
        ${seconds} Seconds
    `;
}

setInterval(updateLoveTimer,1000);

updateLoveTimer();


// Smooth Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";
    observer.observe(section);
});


// Floating Hearts
setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animation="float 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},500);


// Welcome Message
setTimeout(()=>{
    alert("❤️ Happy Girlfriend's Day, Butki ❤️\n\nForever Yours,\nBunny ❤️");
},1500);
