// Import page
import Home from "./views/pages/Home.js";
import Alarm from "./views/pages/Alarm.js";
import MemoShow from "./views/pages/MemoShow.js";
import AlertAlarm from "./views/pages/AlertAlarm.js";
import Photos from "./views/pages/Photos.js";
import PhotoShow from "./views/pages/PhotoShow.js";
import Memo from "./views/pages/Memo.js";
import Error404 from "./views/pages/Error404.js";
// Import components
import Inputbox from "./views/components/Inputbox.js";
import Navbar from "./views/components/Navbar.js";
// Import services
import { DelAlarm } from "./services/DelAlarm.js";
import { parseRequestUrl } from "./services/ParseUrl.js";
import { imageUrl } from "./services/ImageUrl";

// routes 리스트이며 routes에 존재하지 않는다면 잘못된 url로 404페이지를 출력합니다.
const routes = {
  "/": Home,
  "/alarm": Alarm,
  "/alarm/:verb": Alarm,
  "/photos": Photos,
  "/photos/:verb": Photos,
  "/photos/:verb/:id": PhotoShow,
  "/memo": Memo,
  "/memo/:verb": Memo,
  "/memo/:verb/:id": MemoShow,
};

/**
 * 라우터 코드. URL을 가져와 목록을 확인합니다.
 * 지원되는 경로 및 해당 기본 페이지를 렌더링합니다.
 */
const router = async () => {
  // Lazy load view element:
  const header = null || document.getElementById("header_root");
  const inputbox = null || document.getElementById("input_root");
  const main = null || document.getElementById("main_root");

  // 주소 표시줄에서 구문 분석된 URL을 분해합니다
  const { resource, id, verb } = parseRequestUrl();

  // URL 구문을 분석합니다.
  const parsedUrl =
    (resource ? "/" + resource : "/") +
    (verb ? "/:verb" : "") +
    (verb === "show" ? "/:id" : "");

  // header페이지를 렌더링합니다
  header.innerHTML = await Navbar.render(resource, verb, id);
  await Navbar.after_render();

  //main.style.backgroundColor = (resource==="photos")? `#111111` : ``;

  // input박스를 렌더링합니다
  if (verb === "del") {
    DelAlarm(id, null);
  }
  inputbox.innerHTML = await Inputbox.render(resource, verb, id);
  // Render the page from map of supported routes or render 404 page.
  await Inputbox.after_render();
  
  // main박스를 렌더링합니다
  const page = routes[parsedUrl] || Error404;
  main.innerHTML = await page.render(resource, verb, id);
  await page.after_render(resource, verb, id);
  AlertAlarm.render(resource, verb, id);
};

/**
 * event listeners
 */
// 해시 체인지와 페이지 변화를 읽습니다
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
