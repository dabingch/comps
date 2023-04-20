import { useState } from 'react'

function useSort(data, config) {
	const [sortOrder, setSortOrder] = useState(null)
	const [sortBy, setSortBy] = useState(null)

	// Define the column we need to sort by
	const setSortColumn = (label) => {
		// If we are sorting by a different column, reset the sortOrder
		// and update the sortBy
		if (sortBy && label !== sortBy) {
			setSortOrder('asc')
			setSortBy(label)
			return
		}

		// If we don't have a sortOrder for a column, set it to 'asc'
		if (sortOrder === null) {
			setSortOrder('asc')
			setSortBy(label)
		} else if (sortOrder === 'asc') {
			// If we are sorting by the same column, toggle the sortOrder
			setSortOrder('desc')
			setSortBy(label)
		} else if (sortOrder === 'desc') {
			// If we are sorting by the same column in descending order,
			// reset the sortOrder and sortBy
			setSortOrder(null)
			setSortBy(null)
		}
	}

	// Only sort if we have a sortOrder and sortBy
	// Make a copy of the 'data' prop
	// Find the correct sortValue and use it for sort
	let sortedData = data
	if (sortOrder && sortBy) {
		// Find the correct sortValue based on the sortBy
		const { sortValue } = config.find((column) => column.label === sortBy)

		// ? Why use the spread operator?
		sortedData = [...data].sort((a, b) => {
			// sortValue is a function that returns the value we want to sort by
			const valueA = sortValue(a)
			const valueB = sortValue(b)

			const reverseOrder = sortOrder === 'asc' ? 1 : -1 // Use number to define sort order

			if (typeof valueA === 'string') {
				return valueA.localeCompare(valueB) * reverseOrder // String sort
			} else {
				return (valueA - valueB) * reverseOrder // Number sort
			}
		})
	}

	return {
		sortOrder,
		sortBy,
		sortedData,
		setSortColumn,
	}
}

export default useSort
