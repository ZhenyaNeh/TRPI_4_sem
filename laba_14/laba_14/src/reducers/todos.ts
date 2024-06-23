interface TypeAction{
  id?: number,
  text?: string,
  type: string,
}

export interface TypeTodo{
  id: number,
  completed: boolean,
  text: string,
}

const todos = (state = [], action: TypeAction) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ];
      case 'TOGGLE_TODO':
        return state.map((todo: TypeTodo) =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        );
      default:
        return state;
    }
  };
  
  export default todos;