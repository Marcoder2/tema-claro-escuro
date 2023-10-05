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
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'ChangeTheme',
      eventDescription: {
        event_type: "click",
        event_page: "home",
      }
    })
  }
  element.addEventListener('click', () => setThemes())
}
