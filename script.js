const validOrNot = (() =>{


    let button = document.querySelector("button")

    button.addEventListener("click", validate)




    function validate () {
        let input = document.getElementById("inputbox");
        let error = document.getElementById("errorbox");
        let errorIcon = document.getElementById("erroricon")

        let inputValid = input.checkValidity();



        if(inputValid){
            error.innerText = "";
            errorIcon.style.display ="none";

        }else{
            error.innerText = "Please provide a valid email"
            errorIcon.style.display ="block"
        }
    }

})();