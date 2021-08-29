import { parseRequestUrl } from "./ParseUrl.js";

export const DelAlarm = (id) => {
  // 현재 시간의 알람을 alert하고 localStorage갱신합니다.
  const { resource} = parseRequestUrl();
  let alarms = JSON.parse(localStorage.getItem("alarm"));
  alarms.splice(id, 1);
  localStorage.setItem("alarm", JSON.stringify(alarms));
  location.href = (resource==="alarm") ? `/#/alarm`  :`/#/${resource}` ;
};
