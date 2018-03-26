export const queryCreateTask = `mutation($task: String!, $todoListId: ID!){
    createTask(
        task: $task,
        todoListId: $todoListId,
        done: false
    ){
        id
    }
  }`;

export const queryUpdateTask = `mutation($id: ID!, $done: Boolean! ){
    updateTask(
        id: $id,
        done: $done
    ){
        id
    }
  }`;

export const queryUpdateTaskContent = `mutation($id: ID!, $task: String! ){
    updateTask(
        id: $id,
        task: $task
    ){
        id
    }
  }`;

export const queryGetUser =  `query($username: String!, $password: String!){
    allUsers(filter: {
      userName: $username,
      password: $password
    }){
      id
    }
  }`;

export const queryDeleteTask = `mutation($id: ID!) {
    deleteTask(
      id: $id
    ){
      id
    }
  }`;

export const queryCreateTodoList = `mutation($listname: String!, $authorId: ID!){
  createTodoList(
        listname: $listname,
        authorId: $authorId,
    ){
        id
    }
  }`;
