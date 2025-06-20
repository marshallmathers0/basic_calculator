let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id == 'equalsto') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.id == 'allclear') {
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;

    }

  })
})