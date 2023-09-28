export function changeTheme(element: HTMLButtonElement) {
  const setThemes = () => {
    counter = count
  }
  element.addEventListener('click', () => setThemes())
}
