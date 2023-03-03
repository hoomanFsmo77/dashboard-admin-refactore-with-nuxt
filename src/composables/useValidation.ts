interface Form {
    firstname:{
        value:string
        valid:boolean|null
    }
    lastname:{
        value:string
        valid:boolean|null
    }
    username:{
        value:string
        valid:boolean|null
    }
    city:{
        value:string
        valid:boolean|null
    }
    country:{
        value:string
        valid:boolean|null
    }
    zip:{
        value:string
        valid:boolean|null
    }
    term:{
        valid:boolean,
        value:string
    }
}

export default ()=>{
    const form=reactive<Form>({
        firstname:{
            value:'Mark' ,
            valid:null
        },
        lastname:{
            value:'Otto' ,
            valid:null
        },
        username:{
            value:'' ,
            valid:null
        },
        city:{
            value:'' ,
            valid:null
        },
        country:{
            value:'' ,
            valid:null
        },
        zip:{
            value:'' ,
            valid:null
        },
        term:{valid:false,value:''}
    })

    const checkValidation = () => {
        (form.country.value && form.term.valid && form.firstname.valid && form.lastname.valid && form.city.valid && form.zip.valid && form.username.valid) && alert(JSON.stringify(form))
    }

    const success = (prop:keyof Form) => {
        form[prop].valid=form[prop].value.length > 0
        return form[prop].value.length > 0
    }

    const error= (prop:keyof Form)=>{
        return form[prop].value.length===0
    }

    return{form,checkValidation,success,error}
}