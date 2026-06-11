const handleForm = (event, callback) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const values = Object.fromEntries(formData.entries())

  if (typeof callback === 'function') callback(values)
}

export default handleForm
