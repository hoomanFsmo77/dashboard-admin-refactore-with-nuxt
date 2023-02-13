

const textColor= {
    install(app:any){
        app.config.globalProperties.$textColor=(key:string)=>{
            return {'text-red-600':key==='red','text-sky-600':key==='blue','text-indigo-600':key==='indigo','text-green-600':key==='green','text-yellow-600':key==='yellow'}
        }
    }
}
const bgColor={
    install(app:any){
        app.config.globalProperties.$bgColor=(key:string)=>{
            return {'bg-red-200':key==='red','bg-sky-200':key==='blue','bg-indigo-200':key==='indigo','bg-green-200':key==='green','bg-yellow-200':key==='yellow'}
        }
    }
}

const btnColor={
    install(app:any){
        app.config.globalProperties.$btnColor=(key:string)=>{
            return {
                'btn-primary-full':key==='indigo',
                'btn-sky-full':key==='blue',
                'btn-red-full':key==='red'
            }
        }
    }
}

export default defineNuxtPlugin(nuxtApp=>{
    nuxtApp.vueApp.use(textColor)
    nuxtApp.vueApp.use(bgColor)
    nuxtApp.vueApp.use(btnColor)
})