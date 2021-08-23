// Import pages, components and helper functions.
import Home from './views/pages/Home.js';
import Alarm from './views/pages/Alarm.js';
import Photo from './views/pages/Photos.js';
import PhotoShow from './views/pages/PhotoShow.js';
import Memo from './views/pages/Memo.js';
import Error404 from './views/pages/Error404.js';


import Navbar from './views/components/Navbar.js';
import Inputbox from './views/pages/Inputbox.js';

import {DelAlarm} from './views/pages/DelAlarm.js';

import MemoShow from './views/pages/MemoShow.js';
import AlertAlarm from './views/pages/AlertAlarm.js';


import { parseRequestUrl} from './services/ParseUrl.js';

// List of supported routes. Any url other than these will render 404 page.
const routes = {
  '/': Home,
  '/alarm': Alarm,
  '/alarm/:verb': Alarm,
  '/photos': Photo,
  '/photos/:verb': Photo,
  '/photos/:verb/:id': PhotoShow,
  '/memo': Memo,
  '/memo/:verb': Memo,
  '/memo/:verb/:id': MemoShow,
};

/**
 * The router code. Takes a URL, checks against the list of
 * supported routes and then renders the corresponding main page.
 */
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById('header_root');
  const inputbox = null || document.getElementById('input_root');
  const main = null || document.getElementById('page_root');


  // Destructure the parsed URl from the addressbar.
  const { resource, id, verb } = parseRequestUrl();

  // Parse the URL and if it has an id part, change it with the string ":id".
  const parsedUrl =
    (resource ? '/' + resource : '/') +
    (verb ? '/:verb' : '') +
    (verb === "show" ? '/:id' : '');

  // Render the header of the page.
  header.innerHTML = await Navbar.render(resource, verb, id);
  await Navbar.after_render();

  if(verb === "del") {
    DelAlarm(id);
  }else{
    inputbox.innerHTML = await Inputbox.render(resource, verb, id);
    // Render the page from map of supported routes or render 404 page.
    await Inputbox.after_render();
  }

  const page = routes[parsedUrl] || Error404;
  main.innerHTML = await page.render(resource, verb, id);
  await page.after_render(resource, verb, id);

  AlertAlarm.render(resource, verb, id);
};

/**
 * Add event listeners
 */

// Listen on hash change.
window.addEventListener('hashchange', router);

// Listen on page load.
window.addEventListener('load', router);





