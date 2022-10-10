import nanoid

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#new-task-form");
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input?.value === "" || input?.value === null) return;

  const task = {
    id: nanoid()
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
});
