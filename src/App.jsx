import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Заголовок</h1>
      <Button text="Кнопка 1" onClick={() => console.log("Кнопка 1")} />
      <Button text="Кнопка 2" onClick={() => console.log("Кнопка 2")} />
      <Button text="Кнопка 3" onClick={() => console.log("Кнопка 3")} />
    </>
  );
}

export default App;
