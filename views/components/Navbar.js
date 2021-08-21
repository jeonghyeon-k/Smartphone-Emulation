const Navbar = {
  /**
   * Render the component content.
   */
  render: async () => {

    return /*html*/ `
      
      <nav class="navbar navbar-expand-md navbar-light bg-white">
        <a class="navbar-brand" href="/#">
          back
        </a>
        <p class="text-center" id="time"></p>  
        <a class="navbar-brand" href="">
          new
        </a>
      </nav>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
   after_render: async () => {
    // Select a node that will contain the clock and date.
    const time = document.querySelector('#time');

    /**
     * Set inner html of selected node to current time and update it every second.
     */
    const updateTime = () => {
      // Get current time and format a clock and date.
      const newDate = new Date();
      const newdata = newDate.getFullYear() +'년 '+ newDate.getMonth() + 1 +'월 '
                            + newDate.getDate() +'일 '+ newDate.getHours() +'시 '
                            + newDate.getMinutes() +'분'+ newDate.getSeconds() +'초';

      // Insert formatted clock and date into footer inner html.
      time.innerHTML = `${newdata}`;
    };
    // Set node content and update it every second.
    updateTime();
    setInterval(updateTime, 1000);
  }
};

export default Navbar;
