const events = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mouseover",
  "mousemove",
  "mouseout",
  "mouseenter",
  "mouseleave",
  "contextmenu",
  "wheel",
  "keydown",
  "keypress",
  "keyup",
  "input",
  "change",
  "focus",
  "blur",
  "reset",
  "submit",
  "select",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "scroll",
  "error",
  "abort",
];

export function bubbleEvents(element: HTMLElement, dispatch) {
  events.forEach((event) => {
    element.addEventListener(event, (e) => {
      dispatch(event, e);
    });
  });
}
