export function preventProtectedMediaInteraction(event) {
  event.preventDefault()
}

export const protectedMediaEventProps = {
  onContextMenu: preventProtectedMediaInteraction,
  onDragStart: preventProtectedMediaInteraction,
}

export const protectedImageEventProps = {
  ...protectedMediaEventProps,
  draggable: false,
}
