export const filterProperty = (
  search = '',
  type,
  bed,
  bath,
  minPrice,
  maxPrice,
  minArea,
  maxArea,
  sort,
  properties
) => {
  let searchRegexp = new RegExp(search, 'i')

  let filterBySearch = search
    ? properties.filter((i) => i.propertyTitle.match(searchRegexp))
    : properties

  let filterPropertyType =
    type && type != 'resindential' && type != 'commercial'
      ? filterBySearch.filter(
          (i) => i.propertyType === type || i.propertyCategory === type
        )
      : filterBySearch

  let filterBed = bed
    ? filterPropertyType.filter((i) => i.propertyBedrooms === bed)
    : filterPropertyType

  let filterbath = bath
    ? filterBed.filter((i) => i.propertyBathrooms === bath)
    : filterBed

  let filterMinPrice = minPrice
    ? filterbath.filter((i) => i.propertyPrice >= minPrice)
    : filterbath

  let filterMaxPrice = maxPrice
    ? filterMinPrice.filter((i) => i.propertyPrice <= maxPrice)
    : filterMinPrice

  let filterMinArea = minArea
    ? filterMaxPrice.filter((i) => i.propertySqft >= minArea)
    : filterMaxPrice

  let filterMaxArea = maxArea
    ? filterMinArea.filter((i) => i.propertySqft <= maxArea)
    : filterMinArea

  let filterSort =
    sort && sort === 'low-to-heigh'
      ? filterMaxArea.sort((a, b) => a.propertyPrice - b.propertyPrice)
      : sort === 'heigh-to-low'
      ? filterMaxArea.sort((a, b) => b.propertyPrice - a.propertyPrice)
      : filterMaxArea

  return filterSort
}

// Used in PropertyDetails Formating Featured Details
export const trythyValueArrayFromObject = (obj) => {
  let data = []
  for (let key in obj) {
    if (obj[key]) data.push(key)
  }
  return data
}
