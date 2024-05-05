import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface IMyForm {
  name: string;
  age: number;
}
function App() {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IMyForm>({
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
        <input
          type="text"
          {...register("name", { required: true })}
          aria-invalid={errors.name ? true : false}
        />
        <input type="number" {...register("age")} />
        <button>Отправить</button>
        <button type="button" onClick={() => clearErrors()}>
          Очистить ошибки
        </button>
        <button
          type="button"
          onClick={() =>
            reset({
              age: 0,
              name: "",
            })
          }
        >
          Очистить форму
        </button>
        <button type="button" onClick={() => setValue("name", "Вася")}>
          Установить имя
        </button>
      </form>
    </>
  );
}

export default App;
