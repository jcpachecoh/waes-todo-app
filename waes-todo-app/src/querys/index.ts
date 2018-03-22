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

export const queryGetUser =  `query($username: String!, $password: String!){
    allUsers(filter: {
      userName: $username,
      password: $password
    }){
      id
    }
  }`;
