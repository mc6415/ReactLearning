var DateFormat = React.createClass({
  getInitialState: function(){
    return {dateFormat: '', date: Date.now().toString()}
  },
  getDate: function(){
    this.setState({date: Date.now().toString(this.state.dateFormat)})
  },
  handleDateFormatChange: function(e){
    this.setState({dateFormat: e.target.value})
    this.setState({date: Date.now().toString(e.target.value)})
  },
  componentDidMount: function(){
    this.getDate();
    setInterval(this.getDate, 1000);
  },
  render: function(){
    return(
      <div>
        <h3 style={{color: 'white'}}>Test out date format string here!</h3>
        <input type="text" value={this.state.dateFormat} onChange={this.handleDateFormatChange}/>
        <span style={{color: 'white'}}>{this.state.date}</span>
      </div>
    )
  }
})

// ReactDOM.render(
//   <DateFormat />,
//   document.getElementById('test')
// )
