
class User {

  static all = [];
  static currentUser = 0;

  constructor(id, name) {
      this.id = id;
      this.name = name;
      User.all.push(this)
  }

  renderUser() {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = 'btn btn-light';
    button.innerText = this.name;
    li.append(button);
    list.appendChild(li);
    button.addEventListener("click", this.showTransactions);
}
static putScoresOnDom(user){
  console.log("user:", user)

}
static renderForm = () => {
  let form = `<h2>Enter Your Name</h2>
  <form id="form">
    <div class="input-field">
      <input type="text" name="name" id="name"/>
    </div>
    <br>
    <input type="submit" value="Start Game" />
  </form>
  `
  user_div.innerHTML = form
}
}