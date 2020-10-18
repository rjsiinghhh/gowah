// class CreateForm extends React.Component {
//   createHome = (event) => {
//     event.preventDefault();
//     axios.post(
//       '/homes',
//       {
//         bid_price: this.state.newHomeBid_price,
//         callback_phone: this.state.newHomeCallback_phone,
//         set_date: this.state.newHomeSet_date
//       }
//     ).then(
//       (response) => {
//         this.props.createCallback(response.data);
//       }
//     )
//   }
//
// changeNewHomeBid_price = (event) =>{
//   this.setState({
//     newHomeBid_price: event.target.value
//   })
// }
//
// changeNewHomeCallback_phone = (event) => {
//   this.setState({
//     newHomeCallback_phone : event.target.value
//   })
// }
// changeNewHomeSet_date = (event) => {
//   this.setState({
//     newHomeSet_date : event.target.value
//   })
// }
//
// render = () => {
//   return <div>
//   <h2> Make A Bid! </h2>
//   <form onSubmit={this.createHome}>
//   <input onKeyUp={this.changeNewHomeBid_price} type="text" placeholder="Bid" /> <br/>
//   <input onKeyUp={this.changeNewHomeCallback_phone} type="text" placeholder="Phone Number" /> <br/>
//   <input onKeyUp={this.changeNewHomeSet_date} type="text" placeholder="Set A Date"/> <br/>
// }
//
//
//
//
//
// }