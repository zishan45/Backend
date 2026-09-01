const butns = document.querySelectorAll("button");

for (btn of butns){
    btn.addEventListener("click", () =>{
       console.log("Button was Clicked");
    });
}