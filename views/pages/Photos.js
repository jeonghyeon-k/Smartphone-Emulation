/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `https://www.breakingbadapi.com/api/characters`;
    // Create options for the fetch function.
    const options = { cache: 'force-cache' };
    // Get a response from the API.
    const response = await fetch(apiUrl, options);
    // Parse response into JSON.
    const data = await response.json();
    // Print fetched data to the console.
    console.log('(App) Data fetched from API:', data);
    // Return fetched data.
    return data;
  } catch (error) {
    // Print catched error to the console.
    console.log('(App) Error occured while getting data.', error);
  }
};

const Items = {
  /**
   * Render the page content.
   */
  render: async () => {

    // Get items data.
    const items = await getItems();
    // Map over items and build card components.
    const itemList = items
      .map(
        ({ name, img, char_id }) => /*html*/ `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <a href="/#/items/${char_id}">
            <img src=${img} class="photo" alt=${name}>
          </a>
        </div>
      `
      )
      .join('\n');
    return /*html*/ `
      <section class="container-md">
        <div class="list">
          ${itemList}
        </div>
      </section>  
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
    const slider = document.querySelector('.list');
    let isMouseDown = false;
    let startX, scrollLeft;
  
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
