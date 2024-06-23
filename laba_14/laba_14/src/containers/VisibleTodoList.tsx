import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

interface TypeState {
  todos: {
    id: number;
    completed: boolean;
    text: string;
  }[];
  visibilityFilter: string;
}

interface TypeTodo {
    id: number;
    completed: boolean;
    text: string;
}

const getVisibleTodos = (todos: TypeTodo[], filter: string) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: TypeState) => ({
  todos: getVisibleTodos(
    state.todos,
    state.visibilityFilter
  ),
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: number; }) => void) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);