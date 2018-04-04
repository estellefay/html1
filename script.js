// Select the div via it's id and store the selected element
// inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
function invertColor(div) {
  let green = "green-color";
  let red = "red-color";
  if (div.classList.contains(green)) {
    div.classList.remove(green);
    div.classList.add(red);
  } else {
    div.classList.remove(red);
    div.classList.add(green);
  };
};
// SI toute les div sont rouge vous avez gagner
function checkVictory(divs)
{
  let victoryStatus = true;
  for (let i = 0; i < divs.length; i++)
  {
    if (divs[i].classList.contains('green-color'))
      { victoryStatus = false;
        break; }
  }

  if (victoryStatus == true)
  {
     alert('Vous avez gagné');
  }
};
// When someone clicks on anything inside the game container, it triggers
// the anonymous function
gameContainer.addEventListener('click', function(el) {
  let childDivs = document.querySelectorAll('#game-container>div');

  // We get the target of the click event, which is the specific div and not
  // the container div
  let clickedElement = el.target;

  for(let i = 0; i < childDivs.length; i++)

  {

   if (childDivs[i] == clickedElement) {
    // childDivs[i] allow us to display every value of the childDivs array
    // because we select it via the array key [i]
      if (i > 0 && i<(childDivs.length - 1)) {
        invertColor(childDivs[i + 1]);
        invertColor(childDivs[i - 1]);
        //On vas inverser la couleur de la div à gauche et à droite

        } else if (i == 0) {
          invertColor(childDivs[i + 1]);
          // On va inverser la couleur de la div à doirte
        } else if (i == (childDivs.length - 1)) {
          invertColor(childDivs[i - 1]);
          // On va inverser la couleur de la div à gauche
    }
    }
  }
  checkVictory(childDivs);
});
