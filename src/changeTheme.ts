export function changeTheme(element: HTMLButtonElement) {
  let body = document.querySelector('body')
  const setThemes = () => {
    const classList = body?.classList
    if(classList?.contains("theme-light")){
      classList.remove("theme-light");
      classList.add("theme-dark")
    } else {
      classList?.remove("theme-dark")
      classList?.add("theme-light")
    }
  }
  element.addEventListener('click', () => setThemes())
}
