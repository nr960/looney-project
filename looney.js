const characters = [
    {name: "Bugs", first_appearance: new Date ('1940-07-27'), creator: ["Tex Avery", "Chuck Jones", "Bob Givens", "Robert McKimson"]},
    {name: "Sylvester", first_appearance: new Date ('1945-03-24'), creator: ["Friz Freleng"]},
    {name: "Tweety", first_appearance: new Date ('1944-08-19'), creator: ["Bob Clampett"]},
    {name: "Roadrunner", first_appearance: new Date ('1949-09-17'), creator: ["Chuck Jones", "Michael Maltese"]},
    {name: "Taz", first_appearance: new Date ('1954-06-19'), creator: ["Robert McKimson"]},
    {name: "Elmer", first_appearance: new Date ('1940-03-02'), creator: ["Tex Avery", "Chuck Jones"]},
  ];
  
  const characterCards = document.querySelectorAll('.col-sm-4');
  
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