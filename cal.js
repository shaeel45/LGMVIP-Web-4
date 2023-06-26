let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.innerHTML.trim(); 

        if (value === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (value === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(event.target);
            string += value;
            document.querySelector('input').value = string;
        }
    });
});
