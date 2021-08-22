const Alarm = {
  /**
   * Render the page content.
   */
   render: async () => {
    const localalarm = JSON.parse(localStorage.getItem('alarm'));
    const alarmlist  = []
    if (localalarm){
      alarmlist.push(...localalarm);
    }
    const alarmlists = alarmlist
        .map(
          alarm =>
            /*html*/ 
            `<li class="alarmItem" id="${alarm.a}" >
              <span>${alarm.moon} ${alarm.hour}시 ${alarm.minute}분</span>
              <button type="button" class="btn" id="btn-save">삭제</button>
            </li>`
        )
        .join('\n');
    return /*html*/ `
    <section>
      <ul class="alarmbox">
      ${alarmlists}
      </ul>
    </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    
  }
};
export default Alarm;
