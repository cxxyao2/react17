# ref

reference to dom ( document)
username = react.createRef();

  <form>
  <input  ref={this.username} name="username" id="username"
  type="text" />

  </form>

componentDidMount() {
this.username.current.focus();
}
