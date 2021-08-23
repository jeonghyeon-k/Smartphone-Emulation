/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
 import {imageUrl} from '../../services/ImageUrl'

   // Get items data.
const items = ["Dog1","Dog2","Dog3","Dog4","Dog5","Dog6","Dog7","Dog8","Dog9","Dog10"]
const Items = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Map over items and build card components.
    const itemList = items
      .map(
        (name,index) => /*html*/ `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="photoitem" id =${index}>
            <img src= "${imageUrl(name)}" class="photo">
          </div>
        </div>
      `
      )
      .join('\n');
    return /*html*/ `
      <section class="container-md">
        <div class="list">
          ${itemList}
        </div>
        <div id="content" class="content"></div>
      </section>  
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async (resource, verb, id) => {

    const content = null || document.getElementById('content');
    content.innerHTML= `
            <div id="content" class="content">
              <img src= "${imageUrl(items[id])}" class="contentitem">
            </div>
    `;

    const slider = document.querySelector('.list');
    let isMouseDown = false;
    let startX, scrollLeft;
    let isclick = -1

    const btnElement = document.getElementsByClassName("photoitem");
    const itemElement = document.getElementById(id);
    itemElement.style.border = `5px solid #ff7f00`
    function onclick(e){
      location.href=`/#/photos/show/${e}`;
    }
    for (let i=0; i < btnElement.length; i++) {
      btnElement[i].onclick = function(){
          const itemid = btnElement[i].id
          if(isclick === itemid){
            onclick(btnElement[i].id);
          }else{
            isclick = itemid
          }
          
      }
    };
    let scrollsize = 0
    scrollsize =30+ (190*(id-1))
    slider.scrollLeft = scrollsize;
    slider.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      slider.classList.add('active');
  
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    
    slider.addEventListener('mouseleave', () => {
      isMouseDown = false;
      slider.classList.remove('active');
      
    });
    
    slider.addEventListener('mouseup', () => {
      isMouseDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
};

export default Items;
