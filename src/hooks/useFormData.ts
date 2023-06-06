const formData = reactive<Record<string,any>>({})
const formErr = reactive<Record<string,any>>({})

export default <T>(_init: T)=>{
    const updateData = (_new?: any)=>{
        _new && Object.assign(formData, _new)
    }
    const clearData = ()=>{
        Object.assign(formData, _init)
    }
    const clearErr = ()=>{
        Object.assign(formErr, _init)
    }
    const initData = ()=> {
        clearData()
        clearErr()
    }

    initData()
    

    return {
        formData,
        formErr,
        initData,
        updateData,
        clearData,
        clearErr
    }
}