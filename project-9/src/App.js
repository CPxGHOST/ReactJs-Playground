import React, { useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useApi from "./hooks/UseApi";

function App() {
  const [tasks, setTasks] = useState([]);

  const requestConfig = {
    url: "https://custom-hook-http-f63df-default-rtdb.firebaseio.com/tasks.json",
    method: "GET",
    body: null,
  };

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  const takeTasks = (data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  };
  const [isLoading, error] = useApi(requestConfig, takeTasks);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        // onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
