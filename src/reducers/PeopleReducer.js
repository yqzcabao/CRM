import people from './people.json';

const initialState = {
  people,
  detailView: false,
  personSelected: null,
  toUpdate: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        toUpdate: false,
        personSelected: action.selectId,
      };

    case 'NONE_SELECTED':
      return {
        ...state,
        detailView: false,
        toUpdate: false,
        personSelected: null,
      };
    case 'UPDATE_PERSON':
      console.log(`update person`);
      return {
        ...state,
        detailView: false,
        toUpdate: true,
      };
    case 'ADD_PERSON':
      state.people = [
        ...state.people,
        {
          id: Math.max(...state.people.map(p => p.id)) + 1,
          ...action.person,
        },
      ];
      return {
        ...state,
        detailView: false,
        toUpdate: false,
        personSelected: null,
      };
    case 'UPDATE_PERSON_DATA':
      state.people = [
        ...state.people.map(p => {
          if (p.id === action.person.id) {
            return action.person;
          }
          return p;
        }),
      ];
      return {
        ...state,
        detailView: false,
        toUpdate: false,
        personSelected: null,
      };
    case 'DELETE_PERSON':
      state.people = state.people.filter(p => p.id !== state.personSelected.id);
      return {
        ...state,
        detailView: false,
        toUpdate: false,
        personSelected: null,
      };
    default:
      return state;
  }
};
