import Home from './views/pages/Home.js';
import Error404 from './views/pages/Error404.js';


const routes = {
  '/': Home,
};


const router = async () => {

  const page = routes[parsedUrl] || Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);
