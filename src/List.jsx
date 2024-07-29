function List (){
    const employees=[{id: 1 , name:"Arun" , salary:10000}
                    ,{id: 2 , name:"Rishi" , salary:20000}
                    ,{id: 3 , name:"Lakshmi" , salary:30000}]
    // for sorting employees
    //employees.sort()
    const listitems=employees.map(employee => <li key={employee.id}>
                                                {employee.name}: &nbsp;
                                                {employee.salary}</li>)
    return(<ol>{listitems}</ol>)
}
export default List