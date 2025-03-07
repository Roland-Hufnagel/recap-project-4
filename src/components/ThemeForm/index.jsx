import "./ThemeForm.css";

export default function ThemeForm({ onAddTheme }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddTheme(data);
    event.target.reset();
  }
  return (
    <div className="form--container">
      <h2>Add a theme</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input required type="text" name="name" id="title" placeholder="name" />

        <div>
          <input type="color" name="primary" defaultValue="#fa3951" />
          <input type="color" name="secondary" defaultValue="#62d0d2" />
          <input type="color" name="surface" defaultValue="#09f825" />
          <input type="color" name="surface-on" defaultValue="#40a66e" />
        </div>
        <button>Add theme</button>
      </form>
    </div>
  );
}
