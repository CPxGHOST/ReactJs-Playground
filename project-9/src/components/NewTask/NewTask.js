import { useEffect, useState } from "react";
import useApi from "../../hooks/UseApi";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const [taskText, setTaskText] = useState("");
  const requestConfig = {
    url: "https://custom-hook-http-f63df-default-rtdb.firebaseio.com/tasks.json",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { text: taskText },
  };
  useEffect(() => {
    if (taskText.length > 0) sendRequest();
  }, [taskText]);
  const { isLoading, error, sendRequest } = useApi(requestConfig, UseData);
  const enterTaskHandler = async (enteredTaskText) => {
    setTaskText(enteredTaskText);
  };
  function UseData(data) {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
