let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((buttons)=> {
    buttons.addEventListener('click', (event)=>{
        if(event.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.value == ".") {
            string= eval(string);
            document.querySelector('input').value = string;
        }
        else if(event.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            console.log(event.target)
            string = string + event.target.innerHTML;
            document.querySelector('input').value = string;

        }
    })
});