var members = data.results[0].members;
//console.log(members[0].party);

$('input[name="filter"]').click(function() {
    var reg_exp = '';
    var checkboxs = document.getElementsByName('');
    for(var i = 0, inp; inp = checkboxs[i]; i++) {
    if (inp.type.toLowerCase() == 'checkbox' && inp.checked) {
    reg_exp = reg_exp + inp.value + '|';
    //the | symbol is like an OR
    }
    }
    //passing an empty string will result in no filter
    //thus, it must be set to something that will not exist in the column
    if (reg_exp == '') {reg_exp = 'X|' }
    
    oTable.fnFilter( reg_exp.slice(0, -1),5, true );
    //slice off the last '|' or it doesn't work
    //also be sure to use the third parameter
    });

    console.log()