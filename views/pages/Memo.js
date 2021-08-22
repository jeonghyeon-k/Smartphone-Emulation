const Memo = {
  /**
   * Render the page content.
   */
  render: async () => {
    const localmemo = JSON.parse(localStorage.getItem('memo'));
    const memolist  = [];
    if (localmemo){
      memolist.push(...localmemo);
    }
    const memolists = memolist
        .map(
          memo =>
            /*html*/ 
            `<li class="" id="${memo}" ><textarea class="memobox" id="memo" name="memo" rows="4" cols="50">${memo}</textarea></li>`
        )
        .join('\n');
    return /*html*/ `
    <section>
      <ul class="navbar-nav">
      ${memolists}
      </ul>
    </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default Memo;
