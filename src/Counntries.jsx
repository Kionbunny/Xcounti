import React, { useEffect,useState } from 'react'
const Card = ({name,flag}) => {
    return <div 
    style={{
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
border : '1px solid black',
borderRadius : '5px',
padding : '10px', /// padding here refers to the the content of the box and its border 
width : '200px',
height : '200px',
}}
    >
<img src={flag} alt = {`Flag of ${name}`}
style = {{
width : '200px',
height : '200px',
}}/>
    <h2>{name}</h2>
    </div>
}
/// as we want top to bottom use flex : column
/// default flex : row from left to right
/// create one card model and use the 
/// same for other country carrds 
/// later style the card accordingly
/// the card renders image on top and text below it 
const Counntries = () => {
    const [countries, setCountries] = useState([]);
    /// fetching data from givne end point 
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
useEffect(()=>{
/// using promise chaining  it is a like a chain of promises 
fetch(API_ENDPOINT)// by using fetch we can  direclty get req from an API endpoint
/* The `.then(response => response.json())` is a method chain in JavaScript's Fetch API that is used to
parse the response data into JSON format. When the fetch request is made to the API endpoint, the
response object is returned. By chaining `.then()`, we are handling the response data by converting
it to JSON format using the `response.json()` method. This allows us to work with the response data
in a structured JSON format for further processing or manipulation. */
.then(response => response.json())
/// data we will get as a response from fetch api call and later 
// this response is converted into  JSON format 
.then(data => setCountries(data)) // destrcut the data that we get from an API 
.catch(error => console.error("Error fetching data:",error))//// now trigger the setter function with the data we get from API end point 
},[])
  return (
<div style = {{display : "flex",flexWrap : "wrap", gap : "15px" }}>
{countries.map(({abbr,flag,name}) => (
    // for each country give me the card 
     <Card key = {abbr} flag = {flag} name = {name}/>
))}
</div>
  )
}
export default Counntries
//// here {{}} is like a container for elements 
