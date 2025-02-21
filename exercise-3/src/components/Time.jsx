/** @format */

function Time() {
  let date = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return <h2>{date}</h2>;
}

export default Time;
