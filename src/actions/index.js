/**
 * We could stick with 100vh (CSS) but if we need to open up the dev tools
 * everything will re-adjust to the new height making the ui jump.
 *
 * To avoid this during the presentation we can use js to set the height to
 * window.height in px.
 */
export function fullscreen(element) {
  element.style.height = `${window.innerHeight}px`;
}
