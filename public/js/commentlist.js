var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: []};
  },
  loadComments: function(){
    console.log(this.state.comments);
    $.ajax({
      url: '/api/getComments',
      method: 'GET',
      success: function(data){
        this.setState({comments: data});
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadComments();
    setInterval(this.loadComments, 20);
  },
  render: function(){
    var commentNodes = this.state.comments.map(function(comment){
      return(
        <div key={comment._id}>
          <h3 style={{color: 'white'}}>{comment.author}</h3>
          <p style={{color: 'grey'}}>{comment.comment}</p>
        </div>
      );
    });
    return(
      <div>
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', comment: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleCommentChange: function(e){
    this.setState({comment: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    $.ajax({
      url: '/api/createComment',
      method: 'POST',
      data: {author: this.state.author, comment: this.state.comment, date: new Date().toISOString()},
      success: function(data){

      }
    });
    this.setState({author: ''});
    this.setState({comment: ''});
  },
  render: function(){
    return(
      <form className="form-group" onSubmit={this.handleSubmit}>
        <label>Author</label>
        <input type="text" onChange={this.handleAuthorChange} value={this.state.author} />
      <label>Comment</label>
    <textarea type="textarea" rows="3" className="form-control" value={this.state.comment} onChange={this.handleCommentChange}/> <br/>
    <input type="submit" value="Submit"/>
      </form>
    );
  }
});

// ReactDOM.render(
//   <div>
//     <CommentList />
//     <CommentForm />
// </div>,
// document.getElementById('commentlist')
// );
