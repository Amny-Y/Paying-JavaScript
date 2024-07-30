const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");



    function createParagraph() {
      let para = document.createElement("p");
      para.textContent = "You clicked the button!";
      document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll("button");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", createParagraph);
    }

    function changeStyle() {
        const btn1 = document.getElementById("btn1");
        btn1.setAttribute("style", "color: yellow;");
      }

      btn1.addEventListener("click", changeStyle);
      

