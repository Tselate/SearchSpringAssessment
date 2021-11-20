import React, {useState, useEffect} from "react"

function SearchItem () {
    const [item, setItem] = useState("")
    const [itemResults, setItemResults] = useState("")
    const [resultPage, setResultPage] = useState("")
    // const [itemName, setItemName] = useState("")
    // const [itemImage, setItemImage] = useState("")
    // const [itemPrice, setItemPrice] = useState("")

    let itemsStored = JSON.parse(sessionStorage.getItem("itemsKey")) || []


    const itemLookUp = async (e) => {
        e.preventDefault()

        const url = `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=${item}&resultsFormat=native&page=6 `

        try {
            const result = await fetch (url)
            const data = await result.json()
            setItemResults(data.results)
            setResultPage(data.pagination.totalPages)
            console.log(data.pagination)
        }catch(err) {
            alert("Item not found")
        }

    }


    useEffect(() => {
       if (itemResults) {
        itemsStored.splice(0, 1, itemResults)
       }
        sessionStorage.setItem("itemsKey", JSON.stringify(itemsStored))
        //sessionStorage.clear()

    },[itemResults])

    let pages = []

    for(let i = 1; i <= resultPage; i++) {
        pages.push(i)       
    }
 


    return (
        <> 
           <div className="form-container" onSubmit={itemLookUp}>
               <form className="search-form" >
                   <input 
                        type="text" 
                        name="item"
                        placeholder="Search here..."
                        required 
                        value={item}
                        onChange= {(e) => setItem(e.target.value)}
                    /> 

                    <button className="btn" type="submit">Search</button>
               </form>

               <div className="resultDisplay">
                    {itemsStored[0].map(item => (
                       <>
                        <div>{item.name}</div>
                       </>
                    ))}

               </div>

               <div>
                 {pages.map(page => (
                     <div>{page}</div>
                 ))}
               </div>
               
            </div>         
        
        </>
    )
}

export default SearchItem
