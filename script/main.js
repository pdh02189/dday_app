const dday_form = document.querySelector("#dday_form");

dday_form.addEventListener("submit", function(e) {
    e.preventDefault();

    var nowDay = new Date();

    const userDate = document.querySelector("#firstDate").value;
    var theDay = new Date(userDate);

    console.log(nowDay);
    console.log(theDay);

    let nowTime = nowDay.getTime();
    let theTime = theDay.getTime();
    
    let passedTime = nowTime - theTime;

    passedTime = Math.round(passedTime / (1000*60*60*24));

    const passDay = document.querySelector(".passedDay");
    const resultDiv = document.querySelector(".result");

    passDay.innerText = passedTime;
    
    const name1 = document.querySelector("#name1").value;
    const name2 = document.querySelector("#name2").value;
    const nameField1 = document.querySelector(".name1");
    const nameField2 = document.querySelector(".name2");
    nameField1.innerText = name1;
    nameField2.innerText = name2;

    resultDiv.classList.remove("d_none");


});