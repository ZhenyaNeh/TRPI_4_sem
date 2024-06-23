import { VisibilityFilters } from '../actions';

interface TypeAction{
  type: string,
  filter?: string,
}

const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action: TypeAction
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;