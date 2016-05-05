var msgs = []

var ChatBox = React.createClass({
  getInitialState: function(){
    return {messages: []}
  },
  loadMessages: function(){

    $.ajax({
      url: '/api/chat/get',
      success: function(res){
        msgs = res;
      }
    });

    this.setState({messages: msgs})
  },
  componentDidMount: function(){
    this.loadMessages();
    setInterval(this.loadMessages, 200);
  },
  render: function(){
    var messageNode = this.state.messages.map(function(msg){
      return(
        <li key={msg.id} style={{color: 'white'}}><span className="msgAuthor">{msg.author}</span>: {msg.message}</li>
      )
    })
    return(
    <ul>
      {messageNode}
    </ul>
  )
  }
})

var ChatEntry = React.createClass({
  getInitialState: function(){
    return {msg: ''};
  },
  handleChatText: function(e){
    this.setState({msg: e.target.value})
  },
  handleSubmit: function(e){
    e.preventDefault();

    $.ajax({
      url: '/api/chat/post',
      method: 'POST',
      data: {message: this.state.msg, id: msgs.length + 1},
      success: function(res){
        console.log(res);
      }
    });

    this.setState({msg: ''})

  },
  render: function(){
    return(
      <div>
      <ChatBox msg={this.state.msg} />
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChatText} value={this.state.msg} />
      <input type="submit" value="Send" />
      </form>
      </div>
    )
  }
})

ReactDOM.render(
  <ChatEntry />,
  document.getElementById('chatBox')
)
