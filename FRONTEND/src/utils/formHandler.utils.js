
const handleForm = (e, cb) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let obj = Object.fromEntries(formData)
    console.log(obj)
    // cb(obj)
}

export default handleForm;