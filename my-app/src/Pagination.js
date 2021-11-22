import React, {useState, useEffect} from "react"

function Pagination(props) {
    const [searchPage, setSearchPage] = useState("")

    const paginationStorage = JSON.parse(sessionStorage.getItem("paginationKey"))

    
    const itemLookUp = async () => {
    

        const url = `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&q=${props.query}&resultsFormat=native&page=${searchPage} `

        try {
            const result = await fetch (url)
            const data = await result.json()
          
        
            console.log(data)
        }catch(err) {
            alert("Item not found")
        }

    }

    // useEffect(() => {
    //     //console.log(searchPage)
    // }, [searchPage])

    function target (e) {
        setSearchPage(e.target.value)
        itemLookUp()
    }

    

   
    let array = []

    for (let i = paginationStorage.currentPage; i <= paginationStorage.currentPage + 4 && i <= paginationStorage.totalPages ; i++) {
        array.push(<button className="pageBtn" onClick={target} value={i}>{i}</button>)
      
    }

    if (paginationStorage.currentPage > 1) {
        array.unshift(<button  className="pageBtn"  onClick={target} value={paginationStorage.previousPage}>&lt;</button>)
    }

    if(paginationStorage.currentPage != paginationStorage.totalPages) {
        array.push(<button  className="pageBtn"  onClick={target} value={paginationStorage.nextPage}>&gt;</button>)
    }


    console.log(array)

  
    return (
        <>
            <div>
                {array.map(arr => (
                    <>
                        {arr}
                    </>
                ))}
            </div>
        </>
        
    )
}

export default Pagination