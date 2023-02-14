
export const useNavbar=()=>{
    const isUnder1200=process.client ? window.innerWidth <1200 :null
    const sidebarFlag=useState<boolean>('sidebarFlag',()=>false)
    const show=ref<boolean>(false)


    const focus = () => {
        show.value=true
    }

    const toggleFocus = (e:any) => {
        show.value=e.focus
    }

    const blur = () => {
        show.value=false
    }

    const showUpSidebar = () => {
      sidebarFlag.value=!sidebarFlag.value
    }

    return{
        showUpSidebar,sidebarFlag,isUnder1200,show,toggleFocus,focus,
        blur
    }
}