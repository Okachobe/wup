'use strict'; 
window.addEventListener('load', () => { 
    var b = firebase.database().ref("set");
    document.getElementById('date').valueAsDate = new Date();
    if ($('#addSet').length > 0) {
        $("#addSet").submit((a) => {
            $(this), console.log("Pushing to firebase");
            var reps = $("#reps").val(),
                weight = $("#weight").val(),
                lift = $("#lift").val(),
                date = $("#date").val(),
                name = $("#name").val(),
                set = {
                    date: date,
                    name: name,
                    reps: reps,
                    lift: lift,
                    weight: weight
                };
            console.log("Name: ", name);
            return b.push(set).then((a) => {
                // display sucess message or something
                // $(".sucess").css("display", "block");
                // $(".sucess-none").css("display", "none");
                alert('Successfully submitted data.');
            }), false })
    }
});
