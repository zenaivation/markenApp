const initialState = {
  attractions: [],
  attraction: null,
  isLoading: null,
  languages: [],
  activeLang: 'nl',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'ATTRACTIONS_IS_LOADING': {
      return { ...state, isLoading: true };
    }

    case 'DATA_ATTRACTIONS': {
      const { data } = action.result;
      return { ...state, attractions: data, isLoading: false };
    }

    case 'DATA_ATTRACTIONS_ERROR': {
      return { ...state };
    }

    case 'SINGLE_ATTRACTION_IS_LOADING': {
      return { ...state, isLoading: true };
    }

    case 'SINGLE_ATTRACTION': {
      return { ...state, attraction: action.result.data, isLoading: false };
    }

    case 'SINGLE_ATTRACTION_ERROR': {
      return { ...state };
    }

    case 'LANGUAGES_IS_LOADING': {
      return { ...state, isLoading: true };
    }

    case 'DATA_LANGUAGES': {
      const { data } = action.result;
      return { ...state, languages: data, isLoading: false };
    }

    case 'DATA_LANGUAGES_ERROR': {
      return { ...state };
    }

    case 'ACTIVE_LANG': {
      return { ...state, activeLang: action.lang };
    }

    default:
      return state;
  }
}

export default rootReducer;