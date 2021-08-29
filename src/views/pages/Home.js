const menus = { alarm: "알람", memo: "메모", photos: "사진" };
const Home = {
  render: async () => {

    // localStorage 좌표 불러오기
    const applications = JSON.parse(localStorage.getItem("app"));
    const links = [];
    if (applications) {
      links.push(...applications);
    } else {
      links.push("alarm", "memo", "photos");
    }

    const navLinks = links
      .map(
        link =>
          /*html*/
          `<li class="nav-item" id="${link.toLowerCase()}" draggable="true" >
          ${menus[link]}
          </li>`
      )
      .join("\n");

    return /*html*/ `
        <ul class="navbar-nav">
        ${navLinks}
        </ul>
    `;
  },

  after_render: async () => {

    const ulElement = document.querySelector("ul");
    ulElement.addEventListener("click", function (e) {
      location.href = `/#/${e.target.id}`;
    });

    const btnElement = document.getElementsByClassName("nav-item");
    let index = 0
    for (let i = 0; i < btnElement.length; i++) {
        btnElement[i].ondragstart = function (e) {
          e.dataTransfer.setData("id", e.target.id);
        };
    }

    document.ondragover = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    document.ondrop = async function (e) {
      e.stopPropagation();
      e.preventDefault();
      const Element = document.getElementById(e.dataTransfer.getData("id"));
      const target = (e.target.class === "nav-link")? e.target.parentNode : e.target
      console.log(e.target)
      const A = Element.getBoundingClientRect().left
      const B = target.getBoundingClientRect().left
      if(A>B){
        Element.after(target)
      }else{
        Element.before(target)
      }
      const newlist  = [];
      for (let i = 0; i < ulElement.children.length; i++) {
        newlist.push(ulElement.children[i].id)
      }
      localStorage.setItem("app", JSON.stringify(newlist));
    };

  },
};
export default Home;
