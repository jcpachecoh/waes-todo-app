export const queryCreateTask = `mutation($task: String!){
    createTask(
        task: $task
        done: false
        todoListId: "cjevh01zwyu0w0148vql4vrck"
    ){
        id
    }
  }`;