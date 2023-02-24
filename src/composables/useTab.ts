

export const useTab=()=>{
    const tabList=ref<string[]>(['all products','archived','drafts','out of stock'])
    const activeTab=ref<number>(1)
    const changeTab=(index:number)=>{
        activeTab.value=index+1
    }

    return {tabList,activeTab,changeTab}
}