const Navbar = {
  /**
   * component를 렌더링 합니다.
   */
  render: async (resource, id, verb) => {
    let backbtn = "none";
    let newbtn = "none";
    if (resource === null) {
      backbtn = "none";
      newbtn = "none";
    } else if (resource === "photos") {
      backbtn = "block";
      newbtn = "none";
    } else {
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

  after_render: async () => {
    const time = document.querySelector("#time");
    const updateTime = () => {
      const newDate = new Date();
      const newdata =
        newDate.getFullYear() +
        "년 " +
        newDate.getMonth() +
        "월 " +
        newDate.getDate() +
        "일 " +
        newDate.getHours() +
        "시 " +
        newDate.getMinutes() +
        "분" +
        newDate.getSeconds() +
        "초";
      time.innerHTML = `${newdata}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  },
};

export default Navbar;
