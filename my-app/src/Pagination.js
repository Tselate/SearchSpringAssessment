import React from "react"

function Pagination() {

    const paginationStorage = JSON.parse(sessionStorage.getItem("paginationKey"))

    const paginationArray = []

    console.log(paginationStorage)

    // let maxPage = paginationStorage.currentPage + Math.floor(5/2)

    // let minPage = paginationStorage.currentPage - Math.floor(5/2)

    // console.log(maxPage, minPage)


    // for (let i = 0; i < paginationStorage.totalPages; i++) {
       
       
    // }

   
    let array = []

    for (let i = paginationStorage.currentPage; i <= paginationStorage.currentPage + 4 && i <= paginationStorage.totalPages ; i++) {
        array.push(<button>{i}</button>)
      
    }

    if (paginationStorage.currentPage > 1) {
        array.unshift(<button>N</button>)
    }

    if(paginationStorage.currentPage != paginationStorage.totalPages) {
        array.push(<button>E</button>)
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