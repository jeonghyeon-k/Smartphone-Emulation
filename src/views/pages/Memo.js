const Memo = {
  render: async () => {
    const localmemo = JSON.parse(localStorage.getItem("memo"));
    const memolist = [];
    if (localmemo) {
      memolist.push(...localmemo);
    }
    const memolists = memolist
      .map(
        (memo, index) =>
          /*html*/
          `<li class="memoitem"><textarea class="memobox output" id="${index}" name="memo" readonly>${memo}</textarea></li>`
      )
      .join("\n");
    return /*html*/ `
    <section>
      <ul class="navbar-nav">
      ${memolists}
      </ul>
    </section>
    `;
  },
  after_render: async () => {
    const btnElement = document.getElementsByClassName("memobox output");

    function onclick(e) {
      location.href = `/#/memo/show/${e}`;
    }
    for (let i = 0; i < btnElement.length; i++) {
      btnElement[i].onclick = function () {
        onclick(btnElement[i].id);
      };
    }
  },
};
export default Memo;
