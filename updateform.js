class UpdateForm extends React.Component {
  updateHome = (event) => {
    event.preventDefault();
    axios.put(
      '/homes/'+this.props.home.id,
      {
        bid_price: this.refs.bid_price.value,
        callback_phone: this.refs.callback_phone.value,
        set_date: this.refs.set_date.value
      }
    ).then(
      (response) => {
        this.props.updateCallback(response.data)
      }
    )
  }


render = () => {
  return <form onSubmit={this.updateHome}>
  <input ref="bid_price" defaultValue={this.props.home.bid_price} type="text" /> <br/>
  <input ref="callback_phone" defaultValue={this.props.home.callback_phone} type="text" /> <br />
  <input ref="set_date" defaultValue={this.props.home.set_date} type="text" /> <br />
</form>
}








}
