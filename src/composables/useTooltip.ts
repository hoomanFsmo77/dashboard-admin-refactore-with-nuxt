

export const useTooltip=()=>{
    const show=ref<boolean>(false)

    const showTooltip = () => {
      show.value=true
    }
    const closeTooltip = () => {
        show.value=false
    }
    const toggleTooltip = () => {
        if(process.client && window.innerWidth<500){
            show.value=!show.value
        }
    }

    return{
        show,showTooltip,closeTooltip,toggleTooltip
    }
}
