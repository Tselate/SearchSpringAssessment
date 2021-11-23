import React, {useState, useEffect} from "react"

function SearchItem () {
    const [item, setItem] = useState("")
    const [itemResults, setItemResults] = useState("")
    const [pagination, setPagination] = useState("")
    const [searchPage, setSearchPage] = useState("")

    const paginationStorage = JSON.parse(sessionStorage.getItem("paginationKey"))
    const itemsStored = JSON.parse(sessionStorage.getItem("itemsKey")) || []
   
  

    const itemLookUp = async (e) => {
        e.preventDefault()

        const url = `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=${item}&resultsFormat=native&page=${searchPage || 1} `

        try {
            const result = await fetch (url)
            const data = await result.json()
            setItemResults(data.results)
            setPagination(data.pagination)
          
            
        }catch(err) {
            alert("Item not found")
        }

      
    }

    useEffect(() => {
       if (itemResults) {
        itemsStored.splice(0, 1, itemResults)
       }
        sessionStorage.setItem("itemsKey", JSON.stringify(itemsStored))
        sessionStorage.setItem("paginationKey", JSON.stringify(pagination))
       

    },[itemResults, itemsStored, pagination])

    let paginationArray = []
 

    function target (e) {
        if(e.target.value === "<") {
            if(paginationStorage.currentPage === 1) {
                setSearchPage(1)
            }else {
                setSearchPage(paginationStorage.previousPage)
            }           
        }else if(e.target.value !== "<" || e.target.value !== ">") {
            setSearchPage(e.target.value)
        }
        
    }





   
    if(paginationStorage) {
        for(let i = paginationStorage.currentPage; i <= paginationStorage.currentPage + 4 && i <= paginationStorage.totalPages ; i++) {
            paginationArray.push(i)
        }

        if(paginationStorage.currentPage !== paginationStorage.totalPagespaginationStorage) {
            paginationArray.unshift("<")
        }

        if (paginationStorage.currentPage !== paginationStorage.totalPages) {
            paginationArray.push(">")
        }
        
    }

    
    function paginationFunc() {

        
    
        if (paginationStorage.currentPage > 1) {
            paginationArray.unshift(<button  className="pageBtn"  onClick={target} value={paginationStorage.previousPage}>&lt;</button>)
        }
    
        if(paginationStorage.currentPage !== paginationStorage.totalPages) {
            paginationArray.push(<button  className="pageBtn"  onClick={target} value={paginationStorage.nextPage}>&gt;</button>)
        }
    
        console.log(paginationArray)

   }
   
    

    

    return (
        <div className="container"> 
           <div className="form-container" >
               <h6 className="logo">SearchSpring</h6>
               <form name="myForm" className="search-form" onSubmit={itemLookUp}>
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

           <div className="paginationContainer"> <h6>Showing 25 results</h6> 
                    <form onSubmit={itemLookUp} >
                        {paginationArray.map(arr => (
                            <>
                                <button
                                    type="submit"
                                    name="subBtn"
                                    className="btn"
                                    value={arr}
                                    onClick={target} 
                                >
                                    {arr}
                                </button>
                                
                            </>
                        ))}

                    </form>
                   
        
           </div>

        

                 {/* <div className="resultDisplay">
                    {itemsStored[0].map(item => (
                        <div className="itemCard">
                            <div className="itemInfo">
                                <img className="itemImg" src={item.imageUrl} alt="Item"/>
                                <p className="itemName">{item.name}</p>
                                <p className="itemPrice">${item.price}.00</p>
                            </div>
                        </div>
                     
                    ))}

               </div> */}

                <div className="paginationContainer"> <h6>Showing 25 results</h6> 
                   
        
           </div>

                 
        
        </div>
    )
}

export default SearchItem
