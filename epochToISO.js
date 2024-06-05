/**
  {
    "api":1,
    "name":"Epoch to ISO8601/RFC3339",
    "description":"Converts from unix epoch to date time string Javascript format (which is ISO8601/RFC3339 compliant)",
    "author":"Nahuel Andreoli",
    "icon":"watch",
    "tags":"to,date,timestamp,epoch"
  }
**/

function main(state) {
    const date = new Date(new Number(state.text*1000));
    if (date.getFullYear() <= new Date().getFullYear()) {
        state.text = date.toISOString(); // date was in seconds
    } else {
        state.text = new Date(new Number(state.text)).toISOString(); // date was in ms
    }
}