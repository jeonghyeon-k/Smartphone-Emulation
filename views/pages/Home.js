const Home = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Define a list of navbar links.
    const menus = {'Alarm' : "알람", 'Memo':"메모",'Photos':'사진'}


    const links = ['Alarm', 'Memo', ,'Photos'];
    // Build html with navigation links.
    const navLinks = links
      .map(
        link =>
          /*html*/ `<li class="nav-item"><a class="nav-link" href="/#/${link.toLowerCase()}">${menus[link]}</a></li>`
      )
      .join('\n');
    return /*html*/ `
      <section>
        <ul class="navbar-nav">
        ${navLinks}
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
export default Home;
