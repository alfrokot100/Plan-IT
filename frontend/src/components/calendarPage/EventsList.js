export const myEventsList = tasks.map(({ dueDate, title }) => ({
  title,
  start: dueDate,   
  end: dueDate
}));

  