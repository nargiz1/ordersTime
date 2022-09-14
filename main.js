let tbody = document.querySelector("table")

fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(data =>{
        data.forEach(element => {
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            id.innerText= element.id;
            tr.appendChild(id);

            let date = document.createElement("td");
            let dateText= new Date(element.orderDate);
            let smth = moment(dateText).format("MMM Do YY");  
            date.innerText= smth;
            tr.appendChild(date);

            let dateTen = document.createElement("td");
            let dateTenText= new Date(element.orderDate);
            dateTen.innerText= dateTenText.getDate() + "."+ dateTenText.getMonth()+ "."+ dateTenText.getFullYear()
            tr.appendChild(dateTen);

            tbody.appendChild(tr)
        });
    });
