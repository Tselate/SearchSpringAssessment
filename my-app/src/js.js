import React, {useState, useEffect} from "react"
import Pagination from "./Pagination"



function SearchItem () {
    const [item, setItem] = useState("")
    const [itemResults, setItemResults] = useState("")
    const [resultPage, setResultPage] = useState("")
    

    const itemsStored = JSON.parse(sessionStorage.getItem("itemsKey")) || []
   
    const paginationStorage = JSON.parse(sessionStorage.getItem("paginationKey"))

    const itemLookUp = async (e) => {
        e.preventDefault()

        const url = `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=${item}&resultsFormat=native&page=1 `

        try {
            const result = await fetch (url)
            const data = await result.json()
            setItemResults(data.results)
            setResultPage(data.pagination)
        }catch(err) {
            alert("Item not found")
        }

    }


    useEffect(() => {
       if (itemResults) {
        itemsStored.splice(0, 1, itemResults)
       }
        sessionStorage.setItem("itemsKey", JSON.stringify(itemsStored))
        sessionStorage.setItem("paginationKey", JSON.stringify(resultPage))

    },[itemResults])


    return (
        <div className="container"> 
           <div className="form-container" >
               <h6 className="logo">SearchSpring</h6>
               <form className="search-form" onSubmit={itemLookUp}>
                   <input 
                        type="text" 
                        name="item"
                        placeholder="Search here..."
                        className="searchInput"
                        required 
                        value={item}
                        onChange= {(e) => setItem(e.target.value)}
                    /> 

                    <button className="searchBtn" type="submit">Search</button>
               </form>               
            </div>    

           <div className="paginationContainer"> <h6>Showing 25 results</h6> <Pagination  query="pink"/></div>

        

                 <div className="resultDisplay">
                    {itemsStored[0].map(item => (
                        <div className="itemCard">
                            <div className="itemInfo">
                                <img className="itemImg" src={item.imageUrl} alt="Item"/>
                                <p className="itemName">{item.name}</p>
                                <p className="itemPrice">${item.price}.00</p>
                            </div>
                        </div>
                     
                    ))}

               </div>

               <div className="paginationContainer">  <Pagination  query="pink"/></div>

                 
        
        </div>
    )
}

export default SearchItem