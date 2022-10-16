import { TextInput } from "./lib";

export function App() {
  return (
    <div className="p-8">
      <h1>Haku UI</h1>
      <br />
      <h2>Components</h2>
      <br />
      <h3>Text Input</h3>
      <br />
      <TextInput.Root>
        <TextInput.Input />
      </TextInput.Root>
    </div>
  );
}
