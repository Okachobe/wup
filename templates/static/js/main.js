


primMovements = [
    'DB Bench',
    'DB OHP',
    'Pull Ups',
    'DB Row',
    'Leg Press',
    'DB RDL',
]

suppMovements = [
    'Lat Raise',
    'Dips',
    'Static DB Holds',
    'Lat Pull Down',
    'Face Pull',
    'Band Flyes',
    'Bench Flyes',
    'EZ Bar Curl',
    'DB Trap Raise',
    'DB Lunges',
    'SL Curl',
    'SL Extention',
    'Crunch',
    'Leg Raise',
]


$(document).ready(() => {
    var checkbox = $("#isPrimMove]");
    var liftSelector = $("#movementSelector");
    liftSelector
        .html('<option>' + primMovements.join('</option><option>') + '</option>');

    checkbox.addEventListener('change', () => {
        if(this.checked) {
            liftSelector
                .html('<option>' + primMovements.join('</option><option>') + '</option>');
        } else {
            liftSelector
                .html('<option>' + suppMovements.join('</option><option>') + '</option>');
        }
    }); 
})
