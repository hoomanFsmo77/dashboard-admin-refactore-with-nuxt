
export const usePagination= (tableData:{td:any[]},itemInPage=5)=>{
    let itemInOne=ref<number>(itemInPage)
    let totalPages=ref<number>(Math.ceil(tableData.td.length / Number(itemInOne.value)))
    let currentPage=ref<number>(1)
    let searchedText=ref<string>('')

    const changeItemInOne = (e:string|number) => {
        itemInOne.value=Number(e)
        totalPages.value=Math.ceil(tableData.td.length / itemInOne.value)
        currentPage.value=1
    }

    const paginationHandler = (page:number) => {
      currentPage.value=page
    }
    const nextPage = () => {
      currentPage.value++
        if(currentPage.value>totalPages.value || totalPages.value===1){
            currentPage.value=1
        }

    }
    const prevPage = () => {
        currentPage.value--
        if(currentPage.value<1 || totalPages.value===1){
            currentPage.value=totalPages.value
        }
    }
    const searchHandler = (e:Event) => {
        searchedText.value=(e.target as HTMLInputElement).value
    }

    return {itemInOne,totalPages,paginationHandler,nextPage,prevPage,currentPage,changeItemInOne,searchHandler,searchedText}
}