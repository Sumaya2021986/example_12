function process() {
    var person = document.getElementById("nameBox").value;
    var finalMark = parseInt(document.getElementById("markBox").value);

    var grades; 

    if (finalMark <= 100 && finalMark >= 85) {
        grades = `<h4>Hello ${person}, your grade is A </h4>`;
    } else if (finalMark <= 84 && finalMark >= 75) {
        grades = `<h4>Hello ${person}, your grade is B </h4>`;
    } else if (finalMark <= 74 && finalMark >= 60) {
        grades = `<h4>Hello ${person}, your grade is C </h4>`;
    } else if (finalMark <= 59 && finalMark >= 50) {
        grades = `<h4>Hello ${person}, your grade is D </h4>`;
    } else {
        grades = `<h4>Hello ${person}, your grade is F </h4>`;
    }

    document.getElementById("content").innerHTML = grades;
}
