
function showTableInfo(){

    let students=[

        {
            name:"Ahmed",
            age : 21,
            year:2003
        },{
            name:"Mohamed",
            age : 22,
            year:2004
        },{
            name:"Ali",
            age : 23,
            year:2005
        }

    ]

    let dataContentInfo = document.getElementById('data-needed');

    let counter = 0;
    while(counter < students.length){
        let row = document.createElement('tr');
        row.innerHTML =
        "<td>" + (students[counter].name) + "</td>"+
        "<td>" + (students[counter].age)  + "</td>"+
        "<td>" + (students[counter].year) + "</td>";
        dataContentInfo.parentElement.appendChild(row);
        // the parentElement refer to the tbody in HTML
        counter+=1;

    }
}

showTableInfo();