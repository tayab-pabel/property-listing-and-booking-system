/*
 * Add new object to localStorage as array
 * Overwrite is current one is existed
 */
export const propertySavetoLocalStorage = (property) => {
  let savedProperties = JSON.parse(localStorage.getItem('saveProperties')) || []
  if (savedProperties.length > 0) {
    let propertyExist = savedProperties.find((i) => i._id === property._id)
    if (propertyExist) {
      let newProperty = savedProperties.map((i) =>
        i._id === property._id ? property : i
      )
      localStorage.setItem('saveProperties', JSON.stringify(newProperty))
    } else {
      savedProperties.push(property)
      localStorage.setItem('saveProperties', JSON.stringify(savedProperties))
    }
  } else {
    savedProperties.push(property)
    localStorage.setItem('saveProperties', JSON.stringify(savedProperties))
  }
}
