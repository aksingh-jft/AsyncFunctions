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

// function getEmployees(callback){
//   console.log('Fetching Employees')
//   setTimeout(() => {
//     console.log('Fetched')
//     callback(emp)
//   }, 1000);
// }
// PROMISES AND ASYNC AWAIT
function getEmployees(){
    return new Promise((resolve, reject)=>{
      console.log('Fetching Employees')
      setTimeout(() => {
        console.log('Fetched')
        // resolve(emp);
        reject('ERR')
      }, 1000);
    })
  }

async function fetchData(){
  const data  = await fetch('http://localhost:3000/emps')
  console.log("🚀 ~ file: api.js ~ line 40 ~ fetchData ~ data", await data.json())
  
}

async function postData(){
  const data  = await fetch('http://localhost:3000/emps',{
    method:'POST',
    body:JSON.stringify({name:'Sajal',job:'intern',salary:'0'})
  })
  console.log("🚀 ~ file: api.js ~ line 40 ~ fetchData ~ data", data)
  
}

// fetchData()
// postData()