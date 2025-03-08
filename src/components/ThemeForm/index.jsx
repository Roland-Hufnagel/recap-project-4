import "./ThemeForm.css";
const defaultTheme = {
  name: "",
  colors: [
    {
      role: "primary",
      value: "#fa3951",
    },
    {
      role: "secondary",
      value: "#62d0d2",
    },
    {
      role: "surface",
      value: "#09f825",
    },
    {
      role: "surface-on",
      value: "#40a66e",
    },
  ],
};

export default function ThemeForm({
  onSubmit,
  initialTheme = defaultTheme,
  isEditMode,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newTheme = { colors: [], name: data.name };
    Object.entries(data)
      .slice(1)
      .forEach((color) => {
        newTheme.colors.push({ role: color[0], value: color[1] });
      });
    onSubmit(newTheme);
    event.target.reset();
  }
  return (
    <div className="form--container">
      <h2>{isEditMode ? "Edit a theme" : "Add a theme"}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="name"
          id="title"
          placeholder="Name"
          defaultValue={initialTheme.name}
        />

        <div>
          {initialTheme.colors.map((color) => {
            return (
              <input
                key={color.role}
                type="color"
                name={color.role}
                defaultValue={color.value}
              />
            );
          })}
        </div>
        <button>Save Theme</button>
      </form>
    </div>
  );
}
