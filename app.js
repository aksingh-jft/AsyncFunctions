// // This code demonstrates the need of a mechanism to execute async code.
// // (function showEmployee(){
// //   const employees = getEmployees()
// //   console.log("🚀 ~ file: app.js ~ line 3 ~ showEmployee ~ employees", employees)
// //   employees.map((emp)=>{
// //     document.getElementById('rows').append(
// //       `<tr><td>${emp.name}</td><td>${emp.job}</td><td>${emp.salary}</td></tr>`
// //     )
// //   })
// // })();
// function showInTable() {
//   getEmployees(show);
// }
// function showInConsole(){
//   getEmployees(showConsole)
// }

// function showConsole(employees){
//   console.log(employees)
// }
// function show(employees){
//   document.getElementById('table').innerHTML = ''
//   employees.map((emp)=>{
//     document.getElementById('table').innerHTML = document.getElementById('table').innerHTML +
//       `<tr><td>${emp.name}</td><td>${emp.job}</td><td>${emp.salary}</td></tr>`
//   })
// };
// function add(){
//   const employee = {name:document.getElementById('name').value, job:document.getElementById('job').value, salary:document.getElementById('salary').value}
//   addEmployee(employee, showInTable)
// }


function showConsole(employees){
    console.log(employees)
  }
function showInConsole(){
    getEmployees().then((employees)=>{
      showConsole(employees)
    }).catch((err)=>{
      console.log(err)
    })
  }