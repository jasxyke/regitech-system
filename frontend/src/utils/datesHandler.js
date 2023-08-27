import moment from "moment/moment";

export function getCurrentDate() {
  return moment().format("dddd, MMMM Do, YYYY");
}

export function getCurrentTime() {
  return moment().format("h:mm:ss a");
}

export function convertStampToDate(timestamp) {
  return moment(timestamp).format("YYYY-MM-DD");
}
