import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useApi from "./hooks/UseApi";

function App() {
  console.log("Rendered app.js");
  const [tasks, setTasks] = useState([]);
  const requestConfig = {
    url: "https://custom-hook-http-f63df-default-rtdb.firebaseio.com/tasks.json",
    headers: { "Content-Type": "application/json" },
  };

  const { isLoading, error, sendRequest } = useApi(requestConfig, takeTasks);
  useEffect(() => {
    const sendRequestHelper = async () => {
      await sendRequest();
    };
    sendRequestHelper();
  }, []);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  function takeTasks(data) {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    console.log("App.js state changed");
    setTasks(loadedTasks);
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
