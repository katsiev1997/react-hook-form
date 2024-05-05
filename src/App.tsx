import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface IMyForm {
  name: string;
  age: number;
}
function App() {
  const { register, handleSubmit } = useForm<IMyForm>({
    defaultValues: {
      age: 18,
    },
  });

  const submit: SubmitHandler<IMyForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<IMyForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(submit, error)}>
        <input type="text" {...register("name", { required: true })} />
        <input type="number" {...register("age")} />
        <button>Отправить</button>
      </form>
    </>
  );
}

export default App;
