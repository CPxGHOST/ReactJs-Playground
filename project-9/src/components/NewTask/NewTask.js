import useApi from "../../hooks/UseApi";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useApi(UseData);

  const enterTaskHandler = async (enteredTaskText) => {
    const requestConfig = {
      url: "https://custom-hook-http-f63df-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: enteredTaskText },
    };
    sendRequest(requestConfig, UseData.bind(null, enteredTaskText));
  };
  function UseData(taskText, data) {
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
