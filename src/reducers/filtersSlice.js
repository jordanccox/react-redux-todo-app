const status = {
  all: 'all',
  active: 'active',
  completed: 'completed'
}

const initialState = {
  status: status.all,
  categories: []
}

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'filters/statusChanged': 
      return { ...state, status: action.payload }
    case 'filters/categorySelected': {
      const prevCategories = [...state.categories]
      prevCategories.push(action.payload)
      return { ...state, categories: prevCategories }
    }
    case 'filters/categoryUnselected': 
      return {...state, categories: state.categories.filter(category => {
        if (category === action.payload) {
          return false
        }

        return true
      })}
    default:
      return state
  }
}

export default filtersReducer