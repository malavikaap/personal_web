import React ,{ useState } from "react"
//update objects in react
function UpdateObject( ) {
    const[car,setCar] = useState({year:2024, 
                                 make:"ford",
                                 model:"mustand"})
      //array
    const [food,setFood] = useState(["apple","orange","banana"])

    function HandleAddFood (){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        //spread operator is used bcz we need the previous all foods in the list.
       // setFood([...food,newFood])the below is also possible
        setFood(f => [...f,newFood])
    }
    function RemoveFood(index) {
        setFood(food.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {food.map((food,index) => 
                <li key={index} onClick={() => RemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"></input>
            <button onClick={HandleAddFood}>Add Food</button>
        </div>
    )





    //object
    function HandleYearChange (event){
        setCar(c => ({...c,year:event.target.value}))
    }
    function HandleMakeChange (event){
        setCar(c => ({...c,make:event.target.value}))
    }
    function HandleModelChange (event){
        setCar(c => ({...c,model:event.target.value}))
    }
                                 return(
                                    <div>
                                        <p>your favorite car is:{car.year} {car.make} {car.model}</p>
                                        <input type="number" value={car.year} onChange={HandleYearChange}></input><br></br>
                                        <input type="text" value={car.make} onChange={HandleMakeChange}></input><br></br>
                                        <input type="text" value={car.model} onChange={HandleModelChange}></input><br></br>
                                    </div>
                                 )

}
export default UpdateObject