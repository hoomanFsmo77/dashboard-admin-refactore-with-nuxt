
export default ()=>{
    let show=ref<boolean>(true)
    const height=ref<string>('')
    const uploadSection=ref<HTMLElement|null>(null)
    const files=ref<any[]>([])





    const toggleUploader = () => {
      show.value=!show.value
    }

    onMounted(()=>{
        if(uploadSection.value){
            height.value=getComputedStyle(uploadSection.value).height
            show.value=false
        }

    })

    const uploadFileHandler = (event:Event) => {
        const el=event.target as any
        let format=new FileReader()
        format.readAsDataURL(el.files[0])
        format.addEventListener('load',(e:any)=>{
            files.value.push({
                type:el.files[0].type,
                data:e.explicitOriginalTarget.result,
                name:el.files[0].name,
                size:(el.files[0].size / 1000000).toFixed(3)
            })

        })
    }

    const removeItem = (index:number) => {
        files.value.splice(index,1)
    }

    const loader =  (target:HTMLElement) => {
        if(target){
            setTimeout(()=>{
                target.style.width='20%'
            },1000)
            setTimeout(()=>{
                target.style.width='100%'
            },1500)
            setTimeout(()=>{
                ((target.parentElement as HTMLElement).parentElement as HTMLElement).remove()
            },2000)
        }

    }


    return {show,toggleUploader,uploadSection,height,uploadFileHandler,files,removeItem,loader}

}