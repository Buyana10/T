var members = data.results[0].members;

function sortLoyal() {
    members.sort((a, b) => Math.round((b.total_votes)*(b.votes_with_party_pct)) - Math.round((a.total_votes)*(a.votes_with_party_pct)));
}

sortLoyal();

/*   --- Table Most Loyal    */

var HouseLoyaltyTopTable = document.getElementById("house-loyalty-top");
var tr = document.createElement("TR")
var th1 = document.createElement("TH")
var th2 = document.createElement("TH")
var th3 = document.createElement("TH")
th1.innerHTML= "Name"
th2.innerHTML= "Number Party Votes"
th3.innerHTML= "&percnt; Party Votes"
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
HouseLoyaltyTopTable.appendChild(tr)

for (i = 0; i < members.length*0.1; i++){
    var tr = document.createElement("TR")
    var td1 = document.createElement("TD")
    var td2 = document.createElement("TD")
    var td3 = document.createElement("TD")
    td1.innerHTML= members[i].last_name
    td2.innerHTML= Math.round((members[i].votes_with_party_pct)*(members[i].total_votes)/100)
    td3.innerHTML= members[i].votes_with_party_pct
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    HouseLoyaltyTopTable.appendChild(tr)
    }

/*   --- Table Least Loyal Bottom    */

var HouseLoyaltyBottomTable = document.getElementById("house-loyalty-bottom");
var tr = document.createElement("TR")
var th1 = document.createElement("TH")
var th2 = document.createElement("TH")
var th3 = document.createElement("TH")
th1.innerHTML= "Name"
th2.innerHTML= "Number Party Votes"
th3.innerHTML= "&percnt; Party Votes"
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)
HouseLoyaltyBottomTable.appendChild(tr)

for (i = members.length-1; i > (members.length-1)*0.9; i--){
    var tr = document.createElement("TR")
    var td1 = document.createElement("TD")
    var td2 = document.createElement("TD")
    var td3 = document.createElement("TD")
    td1.innerHTML= members[i].last_name
    td2.innerHTML= Math.round((members[i].votes_with_party_pct)*(members[i].total_votes)/100)
    td3.innerHTML= members[i].votes_with_party_pct
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    HouseLoyaltyBottomTable.appendChild(tr)
    }