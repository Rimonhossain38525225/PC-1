const text = ["W","e","b "," d","e","s","i","g","n","e","r ","</>"," a","n","d ","  w","e","b "," d","e","v","e","l","o","p","e","r"];
const delay = 200; // Delay between each character (in milliseconds)

function typeText(index) {
  const typedTextElement = document.getElementById("typed-text");
  typedTextElement.textContent += text[index];

  if (index < text.length - 1) {
    setTimeout(() => typeText(index + 1), delay);
  } else {
    // Text typing complete, start over
    setTimeout(() => {
      typedTextElement.textContent = "";
      typeText(0);
    }, delay * 20);
  }
}

typeText(0);
