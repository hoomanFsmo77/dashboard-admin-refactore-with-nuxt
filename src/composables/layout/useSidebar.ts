

export const useSidebar=(title:string)=>{
    const collapseFlag=ref<boolean>(false)
    const route=useRoute()
    const currentRoutePath=ref<string>('')
    const sidebarLink=ref<HTMLAnchorElement|null>(null)

    const toggleCollapse = () => {
        currentRoutePath.value=route.path
        collapseFlag.value=!collapseFlag.value
    }
    const addActiveClass = () => {
        if(process.client){
            document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
            if(!sidebarLink.value?.classList.contains('sidebar-active')){
                sidebarLink.value?.classList.add('sidebar-active')
            }
        }

    }
    const singleLinkItemHandler = () => {
        if(process.client){
            document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
            toggleCollapse()
        }

    }
    watch(
        ()=>route.path,
        ()=>{
            currentRoutePath.value=route.path
            collapseFlag.value=currentRoutePath.value.includes(title)
        },{
            immediate:true
    })

    onMounted(()=>{
        collapseFlag.value=currentRoutePath.value.includes(title)
    })


    return{
        collapseFlag,toggleCollapse,currentRoutePath,sidebarLink,addActiveClass,singleLinkItemHandler
    }
}