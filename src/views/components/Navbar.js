const Navbar = {
  /**
   * Render the component content.
   */
  render: async (resource, id, verb) => {
    let backbtn = "none";
    let newbtn  = "none";
    if (resource === null){
      backbtn = "none";
      newbtn = "none";
    }else if(resource === 'photos'){
      backbtn = "block";
      newbtn = "none";
    }else{
      backbtn = "block";
      newbtn = "block";
    }
    return /*html*/ `
      
      <nav class="navbar-box">
        <a class="navbtn back" href="/#" style="display: ${backbtn};">
          back
        </a>
        <p class="navbar-time" id="time"></p>  
        <a class="navbtn new" href="/#/${resource}/new" style="display: ${newbtn};">
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
      const newdata = newDate.getFullYear() +'년 '+ newDate.getMonth() +'월 '
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
