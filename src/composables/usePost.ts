

export const usePost= ()=>{
    const status=ref<string>('')
    const visibility=ref<string>('Public')
    const date:Date=new Date()
    const show=ref<boolean>(false)
    const input=ref<string>('')
    const tags=ref<string[]>(['tag 1','tag 2'])
    const tagInput=ref<HTMLInputElement|null>(null)
    const showHint=ref(false)

    const openSection = (e:any) => {
        const el=e.target.parentElement.parentElement.nextElementSibling as HTMLElement
        el.classList.toggle('h-100')
        el.classList.toggle('o-visible')
    }

    const setValue = (e:string) => {
        status.value=e
    }

    const increaseWidth = (e:any) => {
        if(tagInput.value){
            let inputWidth:any=tagInput.value.style.width
            showHint.value=true
            if(e.key!=='Backspace'){
                tagInput.value.style.width=`${Number(inputWidth.slice(0,inputWidth.length-2))+1}ch`
            }else{
                if(inputWidth>'2ch'){
                    tagInput.value.style.width=`${Number(inputWidth.slice(0,inputWidth.length-2))-1}ch`
                }else{
                    showHint.value=false
                    tags.value.pop()
                }
            }
        }
    }

    const addTag = () => {
        if(tagInput.value){
            tags.value.push(input.value)
            tagInput.value.style.width=`2ch`
            showHint.value=false
            input.value=''
        }

    }
    const removeTag = (index:number) => {
        tags.value.splice(index,1)
    }
    const closeHint = () => {
        showHint.value=false
    }

    return {status,show,visibility,date,openSection,setValue,increaseWidth,addTag,removeTag,closeHint,input,tagInput,showHint,tags}

}