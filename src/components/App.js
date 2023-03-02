import React,{useState,useEffect} from "react";
import AccountContainer from "./AccountContainer";


function App() {

  const[ transactions, setTransactions]= useState([])
  const[ searchedDescription, setSearchedDescription]= useState("")
  
  useEffect(()=> {
    fetch("http://localhost:8001/transactions")
    .then(res=> res.json())
    .then(transactions=> setTransactions(transactions))
  },[])

 function addTransaction(transaction){
  setTransactions([...transactions, transaction])
 }

 function searchTransaction(e){
  setSearchedDescription(e.target.value)
 }

 function filteredTransactions(transactions, searchedDescription) {
  if (searchedDescription.length === 0) {
    return transactions;
  }
  return transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(searchedDescription.toLowerCase());
  });
}

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer  transactions={filteredTransactions(transactions, searchedDescription)} 
      addTransaction={addTransaction}  searchTransaction={searchTransaction}/>
    </div>
  );
}

export default App;