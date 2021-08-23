const menus = {'alarm' : "알람", 'memo':"메모",'photos':'사진'}
const Home = {
  /**
   * Render the page content.
   */
  render: async () => {

    // localStorage 좌표 불러오기
    const applications = JSON.parse(localStorage.getItem('app'));
    const links  = [];
    if (applications){
      links.push(...applications);
    }else{
      links.push('alarm', 'memo', 'photos');
    }

    // Build html with navigation links.
    const navLinks = links
      .map(
        link =>
          /*html*/ 
          `<li class="nav-item" id="${link.toLowerCase()}" ><a class="nav-link"  href="/#/${link.toLowerCase()}">${menus[link]}</a></li>`
      )
      .join('\n');
    return /*html*/ `
        <ul class="navbar-nav">
        ${navLinks}
        </ul>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    const ulElement = document.querySelector('ul');
    ulElement.addEventListener("click",function(e){
      // 이동시 어플 현 위치 저장
      const newlist  = [];
      for (let i = 0; i < ulElement.children.length; i++) {
        newlist.push(ulElement.children[i].id)
      }
      localStorage.setItem("app", JSON.stringify(newlist));
      console.log(e.target)
      //이동
      location.href=`/#/${e.target.id}`;
    })


  }
};
export default Home;
