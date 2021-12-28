export const filterProperty = (
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
  let filterPropertyType =
    type && type != 'resindential' && type != 'commercial'
      ? properties.filter(
          (i) => i.propertyType === type || i.propertyCategory === type
        )
      : properties

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
