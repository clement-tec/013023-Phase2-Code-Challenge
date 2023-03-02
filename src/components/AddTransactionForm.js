import {React ,useState} from "react";

function AddTransactionForm({addTransaction}) {
const [date,setDate]=useState("")
const [description,setDescription]=useState("")
const [category, setCategory]= useState("")
const [amount, setAmount]= useState("")

function handleFormSubmit(e){
  e.preventDefault();

  const theNewTransaction= {
    date: date,
    description: description,
    category: category,
    amount: amount
  }

  fetch  ("http://localhost:8001/transactions",{
    method: "POST",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body : JSON.stringify(theNewTransaction)
  })
  .then (response=> response.json())
  .then (transaction =>addTransaction(transaction))

 }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit= {handleFormSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={date} 
           onChange= { ((e) => setDate(e.target.value))}/>
          <input type="text" name="description" placeholder="Description" value ={description} 
          onChange= { ((e) => setDescription(e.target.value))}/>
          <input type="text" name="category" placeholder="Category" value={category} 
          onChange= { ((e) => setCategory(e.target.value))}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value= {amount}
           onChange= { ((e) => setAmount(e.target.value))}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
