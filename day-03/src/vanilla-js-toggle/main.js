// Vanilla JS implementation

let greetingTag = document.getElementsByTagName("h2")[0];

changeGreeting = () => {
  if (greetingTag.textContent === 'Hello World!') {
    greetingTag.textContent = 'What is up!';
  } else {
    greetingTag.textContent = 'Hello World!';
  }
}
