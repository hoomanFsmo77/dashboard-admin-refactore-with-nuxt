import {ref} from "vue";


export const useTable= (emit:{ (e:'sort',value:any[]):void},tableData:any[])=>{
    let isActive=ref('none')
    let sortedData=ref<any[]>([])

    const toggle = (which:string) => {
        if(isActive.value==='down'){
            isActive.value='up'
        }else if(isActive.value==='up'){
            isActive.value='down'
        }else if(isActive.value==='none'){
            isActive.value='up'
        }
        which==='contact' && sortData('progress')
        which==='date' && sortDate()
        which==='status' && sortData('statusCode')
        which==='Categories' && sortCategory()
        which==='total price' && sortData('price')
        which==='review' && sortData('review')
        which==='order id' && sortData('orderId')
        which==='name' && sortData('name')
        which==='Author' && sortData('author')
        which==='count' && sortData('count')
        which==='Slug' && sortData('category')
        which==='product id' && sortData('productId')
        which==='price' && sortData('price')
        which==='in stock' && sortData('inStock')
        which==='customer' && sortData('name')
        which==='city' && sortData('city')
        which==='orders' && sortData('orders')
        which==='company' && sortData('company')
        which==='email' && sortData('email')
        which==='spent' && sortData('price')
        which==='last ordered' && sortDate()

    }
    const sortData = (prop:string) => {
        if(isActive.value==='down'){
            sortedData.value=[...tableData].sort(
                (p1,p2)=> p1[prop] > p2[prop] ? 1 :p1[prop] < p2[prop] ? -1 :0
            )
        }else{
            sortedData.value=[...tableData].sort(
                (p1,p2)=> p1[prop] < p2[prop] ? 1 :p1[prop] > p2[prop] ? -1 :0
            )
        }
        emit('sort',sortedData.value)
    }


    const sortCategory = () => {
       if(isActive.value==='up'){
           sortedData.value=[...tableData].sort(
               (p1,p2)=> (p1.category==='Uncategorized' || p2.category==='Uncategorized') ? 1 :
                   (p1.category!=='Uncategorized' || p2.category!=='Uncategorized') ? -1 : 0
           )
       }else{
           sortedData.value=[...tableData].sort(
               (p1,p2)=> (p1.category!=='Uncategorized' || p2.category!=='Uncategorized') ? 1 :
                   (p1.category==='Uncategorized' || p2.category==='Uncategorized') ? -1 : 0
           )
       }
        emit('sort',sortedData.value)

    }
    const sortDate = () => {
        let target=[...tableData]
        if(isActive.value==='down'){
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.day > p2.date.day) ? 1 : (p1.date.day < p2.date.day)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.month > p2.date.month) ? 1 : (p1.date.month < p2.date.month)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.year > p2.date.year) ? 1 : (p1.date.year < p2.date.year)  ? -1 : 0);
        }else{
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.day < p2.date.day)  ? 1 : (p1.date.day > p2.date.day)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.month < p2.date.month)  ? 1 : (p1.date.month > p2.date.month)  ? -1 : 0);
            sortedData.value=target.sort(
                (p1,p2)=> (p1.date.year < p2.date.year)  ? 1 : (p1.date.year > p2.date.year)  ? -1 : 0);
        }
        emit('sort',sortedData.value)
    }




    return {isActive,toggle}
}