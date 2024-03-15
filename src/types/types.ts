export type companyInfoType = {
  name: string;
  description: string;
  image: string;
};

export type TodoType = {
  id: string;
  title: string;
  isDone: boolean;
  content: string;
};

export type newTodo = Omit<TodoType, "id">;

export type TodoList = TodoType[];

export type UpdateTodo = Pick<TodoType, 'id' | 'isDone'>;

export type editedTodo = Pick<TodoType, 'title' | 'content'>;