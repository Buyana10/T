    var members = data.results[0].members;
    console.log("members", members);

    var SenateDataTable = document.getElementById("senate-data");

    for (i = 0; i < members.length; i++){
        var tr = document.createElement("TR")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
        var td7 = document.createElement("td")
        td1.innerHTML= members[i].first_name
        td2.innerHTML= members[i].last_name
        td3.innerHTML= members[i].middle_name
        td4.innerHTML= members[i].party
        td5.innerHTML= members[i].state
        td6.innerHTML= members[i].seniority
        td7.innerHTML= members[i].votes_with_party_pct
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)

        SenateDataTable.appendChild(tr)
    }






