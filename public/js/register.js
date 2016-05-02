var RegisterForm = React.createClass({
  getInitialState: function(){
    return{
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      pass: ''
    };
  },
  handleUserNameChange: function(e){
    this.setState({username: e.target.value});
  },
  handleFirstNameChange: function(e){
    this.setState({firstname: e.target.value});
  },
  handleLastNameChange: function(e){
    this.setState({lastname: e.target.value});
  },
  handleEmailChange: function(e){
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e){
    this.setState({pass: e.target.value});
  },
  render: function(){
    return(
      <form>
        <legend style={{color: 'white'}}>Register</legend>
        <label> Username </label>
        <input type="text"
          value={this.state.username}
          onChange={this.handleUserNameChange}/>
        <label> First Name </label>
        <input type="text"
          value={this.state.firstname}
          onChange={this.handleFirstNameChange} />
        <label> Last Name </label>
        <input type="text"
          value={this.state.lastname}
          onChange={this.handleLastNameChange} />
        <label> Email </label>
        <input type="text"
          value={this.state.email}
          onChange={this.handleEmailChange} />
        <label> Password </label>
        <input type="password"
          value={this.state.pass}
          onChange={this.handlePasswordChange}/> <br/>

        <input type="submit" value="Submit" />
      </form>
    );
  }
});

ReactDOM.render(
  <RegisterForm />,
  document.getElementById('registrationForm')
);
