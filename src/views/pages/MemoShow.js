const MemoShow = {
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

  after_render: async (resource, verb, id) => {
    const textElement = document.getElementById(id);
    let count = 0;
    for (let i = 0; i < textElement.value.length; i++) {
      if (textElement.value[i] === "\n") count += 1;
    }
    let height = count > 1 ? 35 * count : 45;
    textElement.style.height = `${height}px`;

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
export default MemoShow;
