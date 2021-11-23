import React, {useState, useEffect} from "react"

function SearchItem () {
    const [item, setItem] = useState("")
    const [itemResults, setItemResults] = useState("")
    const [pagination, setPagination] = useState("")
    const [searchPage, setSearchPage] = useState("")

    const paginationStorage = JSON.parse(sessionStorage.getItem("paginationKey"))
    const itemsStored = JSON.parse(sessionStorage.getItem("itemsKey")) || []
   
  
    // Form submission will call this asyn function to fetch SearchSpring API data and set it to ItemResults and Pagination 
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


    // Updated items stored in session storage
    useEffect(() => {
       if (itemResults) {
        itemsStored.splice(0, 1, itemResults)
       }
        sessionStorage.setItem("itemsKey", JSON.stringify(itemsStored))
        sessionStorage.setItem("paginationKey", JSON.stringify(pagination))
        
    },[itemResults, itemsStored, pagination])

    

   
    //Pagination of page will be determind based on what is inside the array below, along with min and max page numbers to be displayed 
    let paginationArray = []

    if(paginationStorage) {
        let maxPage = paginationStorage.currentPage + 2
        let minPage = paginationStorage.currentPage - 2
    
        if (minPage < 1) {
            minPage = 1
            maxPage = paginationStorage.totalPages
        }
    
        if (maxPage > paginationStorage.totalPages) {
            minPage = paginationStorage.totalPages - 4
             
            if (minPage < 1) {
                minPage = 1
            }
    
            maxPage = paginationStorage.totalPages
        }


         // Based on what is in the session storage, push all of the page numbers to the paginationArray

        for(let i = minPage; i <= maxPage; i++) {
            paginationArray.push(i)
        }
    }

    //Function to grab value of button clicked and set it to the page number that is to be searched and displayed 
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

    


    // Based on what is in the session storage, push all of the page numbers to the paginationArray
    if(paginationStorage) {
        

        // if(paginationStorage.currentPage !== paginationStorage.totalPagespaginationStorage) {
        //     paginationArray.unshift("<")
        // }

        // if (paginationStorage.currentPage !== paginationStorage.totalPages) {
        //     paginationArray.push(">")
        // }
        
    }

    //****PAGE DISPLAY*****//

    if(itemResults && itemsStored[0]) {
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

           <div className="paginationContainer"> <h6>Showing {paginationStorage.perPage} results</h6> 
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

    
           <div className="resultDisplay">
                    {itemsStored[0].map(item => (
                        <div className="itemCard">
                            <div className="itemInfo">
                                <img className="itemImg" src={item.imageUrl} alt="Item"/>
                                <p className="itemName">{item.name}</p>
                                <p className="itemMsrp">${item.msrp}.00</p>
                                <p className="itemPrice">${item.price}.00</p>
                            </div>
                        </div>
                     
                    ))}

               </div>

               <div className="paginationContainer"> 
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
        </div>
    )
    }else {
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

            <h1 className="initialMessage">Search for any item!!</h1> 
        </div>    
        )
    }
}



    

export default SearchItem
