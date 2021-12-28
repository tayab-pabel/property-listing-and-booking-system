export const propertySavetoLocalStorage = (property) => {
  let savedProperties = JSON.parse(localStorage.getItem('saveProperties'))
  let existProperty = savedProperties.find((x) => {
    x._id === property._id
  })

  if (existProperty) {
    newItem = [...existProperty, property]
  } else {
    newItem = [property]
  }
  localStorage.setItem('saveProperties', JSON.stringify(newItem))
}
