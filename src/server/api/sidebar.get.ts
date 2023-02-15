import {sidebarMainData,sidebarDocsData} from "~/utils/sidebarData";

export default defineEventHandler(async e=>{
   const query=await getQuery(e)
    if(query.type==='main'){
        return sidebarMainData
    }else if(query.type==='docs'){
        return  sidebarDocsData
    }
})