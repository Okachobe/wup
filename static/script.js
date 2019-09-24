'use strict'; 
window.addEventListener('load', () => { 
    var b = firebase.database().ref("set/" + Cookies.get('username'));
    $("#picker").datepicker();
    if ($('#addSet').length > 0) {
        $("#addSet").submit((a) => {
            $(this), console.log("Pushing to firebase");
            var reps = $("#reps").val(),
                weight = $("#weight").val(),
                lift = $("#lift").val(),
                date = $("#date").val(),
                name = Cookies.get('username'),
                set = {
                    date: date,
                    name: name,
                    reps: reps,
                    lift: lift,
                    weight: weight
                };
            return b.push(set).then((a) => {
                alert('Successfully submitted data.');
            }), false })
    }
});
