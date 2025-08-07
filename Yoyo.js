
// Wait for the DOM to load
//Wait patiently until the entire webpage (DOM) is fully loaded and ready, then run the code inside this function


document.addEventListener("DOMContentLoaded", function () {




//now we get the form and the header 

    const form = document.getElementById("contactForm");
    const header = document.getElementById("contactHeader");



    const titleItem = document.getElementById("contactTitleItem");  


//It’s a signal saying: “When the user acts, perform this special code.”
  

const nameDisplay = document.createElement("p");
    nameDisplay.style.fontSize = "24px";
    nameDisplay.style.fontWeight = "bold";
    nameDisplay.style.color = "#2c3e50";
    nameDisplay.style.marginTop = "15px";
    titleItem.appendChild(nameDisplay);



form.addEventListener("submit", function (e) {
        e.preventDefault(); // Stop the form from submitting normally


        //what we want
       header.style.color = "#ff4c4c"; 
        header.style.textShadow = "3px 3px 10px red"; 
      header.textContent = "We got your message, go away!";

      titleItem.classList.add("submitted");

        
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const messagePara = document.getElementById("formMessage"); 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value.trim();

        if (firstName) {
            messagePara.textContent = `I know you ${firstName}`;
            messagePara.style.color = "green";
            form.reset(); 
        } else {
            messagePara.textContent = "Please enter your first name.";
            messagePara.style.color = "red";
        }
    });
});





document.addEventListener("DOMContentLoaded", function () {
  const experienceCards = document.querySelector(".experience-cards");

  const jobs = [
    {
      title: "writer",
      company: "anywhere",
      description: "I am a perfect writer, I can write stories, scearios and anything you can think of, just be prepared to face my creativity..."
    },
    {
      title: "time waster",
      company: "anywhere2",
      description: "I can waste my time anywhere with high quality, and I can waste your time in easy ways.."
    },
    {
      title: "Red dead player",
      company: "My Home",
      description: "Taught students the ins and outs of rdr2, turning every thing into a lesson on strategy, teamwork, and complete missions."
    }
    
    ];

  jobs.forEach(job => {
    const jobCard = createJobBox(job);
    experienceCards.appendChild(jobCard);
  });

  function createJobBox(job) {
    const card = document.createElement("div");
    card.classList.add("experience-card");

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <div class="hover-details">
        <p>${job.description}</p>
      </div>
    `;

    return card;
  }
});






document.getElementById("dangerBtn").addEventListener("click", function() {
  // Add "clicked" class to section and overlay
  document.getElementById("heroYousif").classList.add("clicked");
  document.getElementById("overlayYousif").classList.add("clicked");

  // Change texts
  document.getElementById("taglineYousif").innerText = "you were warned...";
  document.getElementById("nameYousif").innerHTML = "Achievement Unlocked: Bad Decision";
  document.getElementById("descYousif").innerText = "Everything just changed! - how can you see my name/ID now?!";
  
  // Optional: disable button after click
  this.disabled = true;
  this.innerText = " too late";
});

