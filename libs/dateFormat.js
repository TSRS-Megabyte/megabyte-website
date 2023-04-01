export function formatDate(date, type = "default") {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "long" });
  const year = dateObj.getFullYear();

  const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  let fDate = `${month} ${day}${nthNumber(day)}, ${year}`;
  if (type == "default") return fDate;
  else if (type == "hm")
    return (
      fDate +
      " at " +
      dateObj.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  else if (type == "accomplishment-card")
    return `${day}${nthNumber(day)} ${month} ${year}`.toUpperCase();

  return fDate;
}
