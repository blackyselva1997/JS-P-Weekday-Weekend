function dates() {
    let getdays = document.getElementById("date").value;

    let msg = document.getElementById("msg");
    let today = new Date(getdays);
    let day = today.getDay();
    console.log(day);

    if ((day == "0") || (day == "6")) {
        console.log("week End");
        msg.innerHTML = "week End";
    }
    else if ((day >= "1") && (day <= "5")) {
        console.log("week Day");
        msg.innerHTML = "worikng Day";
    }
    else {
        console.log("It's not a day");
        msg.innerHTML = "It's not a day";
    }
}