var LoginForm = React.createClass({
  getInitialState: function(){
    return {username: '', password: '', loggedIn: '', name: ''};
  },
  handleSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: "/api/users/login",
      data: {state: this.state},
      method: 'POST',
      success: function(res){
        this.setState({loggedIn: res.firstName + " " + res.lastName});
        console.log(res);
      }.bind(this)
    });
  },
  handleUserNameChange: function(e){
    this.setState({username: e.target.value});
  },
  handlePasswordChange: function(e){
    this.setState({password: e.target.value});
  },
  componentDidMount: function(){
    this.getUserDetails();
    setInterval(this.getUserDetails, 20);
  },
  getUserDetails: function(){
    console.log("Getting details for: " + this.state.loggedIn);
  },
  render: function(){
    return(
    <div>
      <h1>{this.state.loggedIn}</h1>
      <GreetingMessage name={this.state.loggedIn}/>
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input className="form-control" type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
        <label>Password</label>
        <input className="form-control" type="password" value={this.state.password} onChange={this.handlePasswordChange}/> <br/>
        <input type="submit" value="Login" />
      </form>
    </div>
    );
  }
});

var GreetingMessage = React.createClass({
  render: function(){
    return(
      <h1 style={{color: 'white'}}>Sup {this.props.name}</h1>
    );
  }
});

ReactDOM.render(
  <div>
  <LoginForm />
  </div>,
  document.getElementById('loginForm')
);
