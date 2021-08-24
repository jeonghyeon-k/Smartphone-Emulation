const Alarm = {
  render: async () => {
    const localalarm = JSON.parse(localStorage.getItem("alarm"));
    const alarmlist = [];
    if (localalarm) {
      alarmlist.push(...localalarm);
    }
    const alarmlists = alarmlist
      .map(
        (alarm, idx) =>
          /*html*/
          `<li class="alarmItem" id="${alarm.a}" >
              <span>${alarm.moon} ${alarm.hour}시 ${alarm.minute}분 </span>
              <button type="button" class="btn delete" id="${idx}">삭제</button>
            </li>`
      )
      .join("\n");
    return /*html*/ `
    <section>
      <ul class="alarmbox">
      ${alarmlists}
      </ul>
    </section>
    `;
  },

  after_render: async () => {
    const btnElement = document.getElementsByClassName("btn delete");
    function onclick(e) {
      location.href = `/#/alarm/del/${e}`;
    }
    for (let i = 0; i < btnElement.length; i++) {
      btnElement[i].onclick = function () {
        onclick(btnElement[i].id);
      };
    }
  },
};
export default Alarm;
