let tbody = document.querySelector("table")

let orders;

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
            date.innerText= dateText.getDate() + "."+ dateText.getMonth()+ "."+ dateText.getFullYear()
            tr.appendChild(date);

            let dateTen = document.createElement("td");
            let dateText= new Date(element.orderDate);
            date.innerText= dateText.getDate() + "."+ dateText.getMonth()+ "."+ dateText.getFullYear()
            tr.appendChild(date);

            tbody.appendChild(tr)
        });
    });

// orders.forEach(order => {
//     <tr>
//         <td>{order.id}</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//     </tr>
// });