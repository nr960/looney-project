const characters = [
  {name: "Bugs", first_appearance: new Date ('1940-07-27'), creator: ["Tex Avery", "Chuck Jones", "Bob Givens", "Robert McKimson"], role: ["Protagonist"]},
  {name: "Daffy", first_appearance: new Date ('1937-04-17'), creator: ["Tex Avery", "Bob Clampett"], role: ["Antagonist", "Protagonist"]},
  {name: "Sylvester", first_appearance: new Date ('1945-03-24'), creator: ["Friz Freleng"], role: ["Antagonist"]},
  {name: "Tweety", first_appearance: new Date ('1944-08-19'), creator: ["Bob Clampett"], role: ["Protagonist"]},
  {name: "Wile", first_appearance: new Date ('1949-09-17'), creator: ["Chuck Jones", "Michael Maltese"], role: ["Neutral", "Antagonist"]},
  {name: "Roadrunner", first_appearance: new Date ('1949-09-17'), creator: ["Chuck Jones", "Michael Maltese"], role: ["Neutral"]},
  {name: "Taz", first_appearance: new Date ('1954-06-19'), creator: ["Robert McKimson"], role: ["Antagonist"]},
  {name: "Elmer", first_appearance: new Date ('1940-03-02'), creator: ["Tex Avery", "Chuck Jones"], role: ["Antagonist"]},
  {name: "Foghorn", first_appearance: new Date ('1946-08-31'), creator: ["Robert McKimson"], role: ["Neutral"]},
  {name: "Marvin", first_appearance: new Date ('1948-07-24'), creator: ["Chuck Jones"], role: ["Antagonist"]},
  {name: "Speedy", first_appearance: new Date ('1955-09-17'), creator: ["Robert McKimson"], role: ["Protagonist"]},
  {name: "Yosemite", first_appearance: new Date ('1945-05-05'), creator: ["Friz Freleng"], role: ["Antagonist"]}
];

const characterCards = document.querySelectorAll("[id^='my_character']");

function filterByDecade(decadeStart){
  const startingYr = parseInt(decadeStart);
  const endingYr = parseInt(decadeStart) + 9;
  
  console.log(`${startingYr} to ${endingYr}`);
  
  characterCards.forEach(card => {
    const name = card.querySelector('.card').getAttribute('data-name');
    const character = characters.find(chr => chr.name === name);
    
    if (character){
      const firstApp = character.first_appearance.getFullYear();
      if (firstApp >= startingYr && firstApp <= endingYr){
        card.style.display = '';
        if(!card.parentElement){
          document.querySelector('.row').appendChild(card);
        }
        } else {
          card.style.display = 'none';
          if(card.parentElement){
            card.remove();
          }
        }
      }
    });
  }
  
  document.querySelectorAll('.dropdown-decade').forEach(decade => {
    decade.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedDecade = this.getAttribute('data-value');
        if (selectedDecade !== "All") {
            filterByDecade(selectedDecade);
        } else {
            characterCards.forEach(card => {
                card.style.display = '';
                if (!card.parentElement) {
                    document.querySelector('.row').appendChild(card);
                }
            });
        }
    });
});

function filterByCreator(charCreator){
 
  characterCards.forEach(card => {
    const name = card.querySelector('.card').getAttribute('data-name');
    const character = characters.find(chr => chr.name === name);
    
      if (character  && character.creator.includes(charCreator)){
        card.style.display = '';
        //make row the card's parent element
        if(!card.parentElement){
          document.querySelector('.row').appendChild(card);
        }
        } else {
          card.style.display = 'none';
          if(card.parentElement){
            card.remove();
          }
        }
      });
  }
  
  document.querySelectorAll('.dropdown-creator').forEach(creator => {
    creator.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedCreator = this.getAttribute('data-value');
        if (selectedCreator !== "Any") {
            filterByCreator(selectedCreator);
        } else {
            characterCards.forEach(card => {
                card.style.display = '';
                if (!card.parentElement) {
                    document.querySelector('.row').appendChild(card);
                }
            });
        }
    });
});

function filterByRole(charRole){
 
  characterCards.forEach(card => {
    const name = card.querySelector('.card').getAttribute('data-name');
    const character = characters.find(chr => chr.name === name);
    
      if (character  && character.role.includes(charRole)){
        card.style.display = '';
        //make row the card's parent element
        if(!card.parentElement){
          document.querySelector('.row').appendChild(card);
        }
        } else {
          card.style.display = 'none';
          if(card.parentElement){
            card.remove();
          }
        }
      });
  }
  
  document.querySelectorAll('.dropdown-role').forEach(role => {
    role.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedRole = this.getAttribute('data-value');
        if (selectedRole) {
            filterByRole(selectedRole);
        }
    });
});
