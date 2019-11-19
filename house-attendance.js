var members = data.results[0].members;
//console.log(members[0].party);

function topEngaged(){
    members.sort((a, b) => a.missed_votes - b.missed_votes || a.missed_votes_pct - b.missed_votes_pct);
}

topEngaged();

//console.log(members[0].last_name);

/*   --- Table Most Engaged    */

var HouseAttendanceTopTable = document.getElementById("house-attendance-top");
var tr = document.createElement("TR")
var th1 = document.createElement("TH")
var th2 = document.createElement("TH")
var th3 = document.createElement("TH")
th1.innerHTML= "Name"
th2.innerHTML= "Number of Missed Votes"
th3.innerHTML= "&percnt; Missed"
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
HouseAttendanceTopTable.appendChild(tr)

for (i = 0; i < members.length*0.1; i++){
    var tr = document.createElement("TR")
    var td1 = document.createElement("TD")
    var td2 = document.createElement("TD")
    var td3 = document.createElement("TD")
    td1.innerHTML= members[i].last_name
    td2.innerHTML= members[i].missed_votes
    td3.innerHTML= members[i].missed_votes_pct
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    HouseAttendanceTopTable.appendChild(tr)
    }


/*   --- Table Least Engaged    */

var HouseAttendanceBottomTable = document.getElementById("house-attendance-bottom");
var tr = document.createElement("TR")
var th1 = document.createElement("TH")
var th2 = document.createElement("TH")
var th3 = document.createElement("TH")
th1.innerHTML= "Name"
th2.innerHTML= "Number of Missed Votes"
th3.innerHTML= "&percnt; Missed"
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
HouseAttendanceBottomTable.appendChild(tr)
for (i = members.length-1; i > (members.length-1)*0.9; i--){
    var tr = document.createElement("TR")
    var td1 = document.createElement("TD")
    var td2 = document.createElement("TD")
    var td3 = document.createElement("TD")
    td1.innerHTML= members[i].last_name
    td2.innerHTML= members[i].missed_votes
    td3.innerHTML= members[i].missed_votes_pct
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    HouseAttendanceBottomTable.appendChild(tr)
    }