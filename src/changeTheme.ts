export function changeTheme(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Mudar o Tema`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
