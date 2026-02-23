function changeView(){
    let todayMod = document.getElementById("todayModules");
    let weekMod = document.getElementById("thisWeekModules");
    let allMod = document.getElementById("allModules");
    const view = document.getElementById("views").value;
    switch(view) {
        case "today":
            console.log("today");
            todayMod.style.display = "flex";
            weekMod.style.display = "none";
            allMod.style.display = "none";
            break;
        case "thisweek":
            todayMod.style.display = "none";
            weekMod.style.display = "flex";
            allMod.style.display = "none";
            break;
        case "all":
            todayMod.style.display = "none";
            weekMod.style.display = "none";
            allMod.style.display = "flex";
            break;
    }
}