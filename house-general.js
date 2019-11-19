var members = data.results[0].members;
//console.log(members[0].party);

var statistics = {
        republicans: 0,
        republicans_number_votes: 0,
        republicans_total_average: 0,
        
        democrats: 0,
        democrats_number_votes: 0,
        democrats_total_average: 0,

        independents: 0,
        independents_number_votes: 0,
        independents_total_average: 0
    };

   
function findMember() {
    members.forEach(member => {
        if (member.party == "R"){
            statistics.republicans++;
            statistics.republicans_number_votes += member.votes_with_party_pct;
            }
        if (member.party == "D"){
            statistics.democrats++;
            statistics.democrats_number_votes += member.votes_with_party_pct;
            }
        if (member.party == "I"){
            statistics.independents++;
            statistics.independents_number_votes += member.votes_with_party_pct;   
            }
    });
 
        statistics.republicans_total_average = Math.round(statistics.republicans_number_votes / statistics.republicans);
        statistics.democrats_total_average = Math.round(statistics.democrats_number_votes / statistics.democrats);
        statistics.independents_total_average = Math.round(statistics.independents_number_votes / statistics.independents);
    }

findMember();

var HouseAttendanceTable = document.getElementById("house-attendance-statistics");

var tr = document.createElement("TR")
var th1 = document.createElement("TH")
var th2 = document.createElement("TH")
var th3 = document.createElement("TH")
th1.innerHTML= "Party"
th2.innerHTML= "Number of Reps"
th3.innerHTML= "&percnt; Voted with Party"
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
HouseAttendanceTable.appendChild(tr)

var tr = document.createElement("TR")
var td11 = document.createElement("TD")
var td12 = document.createElement("TD")
var td13 = document.createElement("TD")
td11.innerHTML= "Republican"
td12.innerHTML= statistics.republicans
td13.innerHTML= statistics.republicans_total_average
tr.appendChild(td11)
tr.appendChild(td12)
tr.appendChild(td13)
HouseAttendanceTable.appendChild(tr)

var tr = document.createElement("TR")
var td21 = document.createElement("TD")
var td22 = document.createElement("TD")
var td23 = document.createElement("TD")
td21.innerHTML= "Democrat"
td22.innerHTML= statistics.democrats
td23.innerHTML= statistics.democrats_total_average
tr.appendChild(td21)
tr.appendChild(td22)
tr.appendChild(td23)
HouseAttendanceTable.appendChild(tr)

var tr = document.createElement("TR")
var td31 = document.createElement("TD")
var td32 = document.createElement("TD")
var td33 = document.createElement("TD")
td31.innerHTML= "Independent"
td32.innerHTML= statistics.independents
td33.innerHTML= statistics.independents_total_average
tr.appendChild(td31)
tr.appendChild(td32)
tr.appendChild(td33)
HouseAttendanceTable.appendChild(tr)