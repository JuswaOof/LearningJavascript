document.getElementById('submit').onclick = function () {
  username = document.getElementById('username').value
  console.log(username)
  document.getElementById('greetings').innerHTML = 'Hi ' + username
}
