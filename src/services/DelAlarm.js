export const DelAlarm = (id, parsedUrl) => {
  // 현재 시간의 알람을 alert하고 localStorage갱신합니다.
  let alarms = JSON.parse(localStorage.getItem("alarm"));
  alarms.splice(id, 1);
  localStorage.setItem("alarm", JSON.stringify(alarms));
  location.href = parsedUrl ? `/#${parsedUrl}` : `/#/alarm`;
};
