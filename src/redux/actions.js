import { nanoid } from 'nanoid';

export const addContact = contact => {
	return {
		type: 'contacts/addContact',
		payload: {
			...contact,
			id: nanoid(),
		},
	}
}

export const deleteContact = id => {
	return {
		type: 'contacts/deleteContact',
		payload: {
			id,
		},
	}
}

export const setFilter = filter => {
	return {
		type: 'filter/setFilter',
		payload: {
			filter,
		},
	}
}