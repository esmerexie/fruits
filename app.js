// function helloUser() {
// let askMessage = prompt("Do you like fruits?");
// if (askMessage == "yes")
//     document.write("Hello, fellos fruit person!");
//     else if (askMessage == "no")
//     document.write("Hello, non-fruit person!");
//     else if (askMessage =="")
//     document.write("So you do not have a name?");
// else {
    // document.write("This is not an error this is just a test.")
    // }
    // }
    // helloUser()
   
    function helloUser() {
        let askMessage = prompt("Whats your name?");
        document.write("Hello, " + askMessage );
       
        while (askMessage == "") {
            askMessage = prompt("Hello? you can't skip this box?!")
            
            }
        }

function userAge() {
let uA = prompt("How old are you?");
document.write(uA + " years old? Wow! look at you!")

    while (uA == "") {
        uA = prompt("you also can't skip this box")
    }
}

function popUps() {

    let aN = prompt("Do you hate pop-ups?")
    console.log(aN);

    while (aN == "") {
        aN = prompt("YES OR NO??!?!?!?")
    }

    if (aN == "yes") {
        document.write("Trust me, I hate them too!");
}   else if (aN=="no") {
        document.write("I guess I should be making more!")
}
}

