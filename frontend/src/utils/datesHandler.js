import moment from "moment/moment";

export function getCurrentDate() {
  return moment().format("dddd, MMMM Do, YYYY");
}
