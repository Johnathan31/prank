const no = document.getElementById('no');
const yes = document.getElementById('yes');
const result = document.getElementById('result');

yes.onclick = () => {
    result.showModal()
    setTimeout(() => result.close(), 3000)
}
no.onclick = () => {
  no.style.left = `${Math.floor(Math.random() * 300)}px`;
  no.style.top = `${Math.floor(Math.random() * 300)}px`;
  no.style.transition = '.5s ease';
}
