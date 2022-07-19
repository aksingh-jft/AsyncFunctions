let emp = [{name:'Aman', job:'SDE', salary:1000}]
function addEmployee(employee,jingalala){
  console.log('adding Employee')
  setTimeout(() => {
    emp.push(employee);
    console.log('Employee Added')
    jingalala()
  }, 2000);
}

// function getEmployees(){
//   console.log('Fetching Employees')
//   setTimeout(() => {
//     console.log('Fetched')
//     return emp;
//   }, 1000);
// }

function getEmployees(callback){
  console.log('Fetching Employees')
  setTimeout(() => {
    console.log('Fetched')
    callback(emp)
  }, 1000);
}