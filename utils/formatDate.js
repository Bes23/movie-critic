export function formatDate(date = new Date()) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const time = date.toTimeString().slice(0, 5);
  return `${new Intl.DateTimeFormat("en-US", options).format(date)}, ${time}`;
}
