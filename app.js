//
class App extends React.Component {
    state = {
        homes: []
    }


    createBid = (event) => {
     event.preventDefault()
     axios.post('/homes', this.state.review).then(response => {
       this.setState({
         homes: response.data
       })
     })
    }


    componentDidMount = () => {
        this.updateHomes();
    }

    changeUpdateHomeName = (event) => {
        this.setState({
            updateHomeBid_price:event.target.value
        })
    }

    changeUpdateHomeCallback_phone = (event) => {
        this.setState({
            updateHomeCallback_phone:event.target.value
        })
    }
    changeUpdateHomeSet_date = (event) => {
      this.setState({
        changeUpdateHomeSet_date: event.target.value
      })
    }

    deleteHome = (event) => {
        axios.delete('/homes/' + event.target.value).then(
            (response) => {
                this.setState(
                    {
                        homes:response.data
                    }
                )
            }
        )
    }

    updateHome = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/homes/'+id,
            {
                bid_price:this.state.updateHomePrice,
                callback_phone:this.state.updateHomeCallback_phone,
                set_date: this.state.updateHomeSet_date
            }
        ).then(
            (response) => {
                this.setState(
                    {
                        homes:response.data
                    }
                )
            }
        )
    }

    updateHomes = () => {
        axios.get('/homes').then(
            (response) => {
                this.setState(
                    {
                        homes:response.data
                    }
                )
            }
        )
    }


    handleChange = (event) => {
      this.setState({
          [event.target.id]: event.target.value
      })
    }


    bidChange = (event) => {
      const bid_price = this.state.home.price;
      const bidInput = event.target.parentElement.querySelector('#home_id') // Have to find specific restaurant input element
      bid_price.home_id = bidInput.value;
      bid_price[event.target.id] = event.target.value
      this.setState({
        bid_price: bid_price
      })
    }




    render = () => {
        return <div>

            <div className="container">
                <div className="row">

                {
                    this.state.homes.map(
                        (home) => {
                            return <div className="col m6">

                               <div className="card">
                               <div className="card-image"><img src={home.image_link} alt="home-pics"/><br/></div>
                                 <div className="card-content">
                                Asking ${home.price}<br/>
                                Address: {home.housenumber}<br />
                                {home.streetname}<br/>
                                {home.city},
                                 {home.state}<br/>
                                  {home.zip}<br/>
                                <details>

                                {home.bedrooms}<br/>
                                {home.bathrooms}<br/>
                                Square FT:{home.squareft}<br />
                                 Highest Bid: {home.bid_price}
                                 <br/>For More Info {home.callback_phone}<br />
                                 <form id={home.id} onSubmit={this.updateHome}>
                                     <div className="input-field">
                                  <input onKeyUp={this.changeUpdateHomeBid_price} type="text" placeholder="Make An Offer?" /><br/>
                                  <input onKeyUp={this.changeUpdateHomeCallback_phone} type="text" placeholder="Leave Your Number" /><br/>
                                  <input onKeyUp={this.changeUpdateHomeSet_date} type="text" placeholder="Set An Appointment" /> <br />
                                  <input className="btn waves-effect waves-white findbtn" type="submit" value="Make An Offer" />
                                  </div>
                                    </form>
                                  <button className="btn waves-effect waves-white findbtn" value={home.id} onClick={this.deleteHome}>
                                          Sold!
                                                                </button>

                                {
                                          this.state.homes.filter(home => {
                                            return home.price == home.id
                                          })

                                .map((home, i) => {

                      <div key={i}>
                        <p>Name: {home.price}</p>
                        <p>Rating: {home.callback_phone}</p>
                        <p>Review: {home.set_date}</p>
                        <details>
                        <summary>Edit Bid</summary>
                        <form id={home._id} onSubmit={this.updateHome}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input
                          type="text"
                          id="name"
                          onChange={this.handleChange}
                          placeholder={home.bid_price}
                        />
                        <br />
                        <label htmlFor="review_content">More Info</label>
                        <br />
                        <input
                          type="text"
                          id="review_content"
                          onChange={this.handleChange}
                          placeholder={home.callback_phone}
                        />

                        <br />
                        <input className="submit" type="submit" value="Edit Review" />
                      </form>

                        </details>
                      </div>


                  })
                }

                <summary>More Info</summary>
                </details>

                            </div>
                            </div>



                            </div>


                        }
                    )
                }
                </div>
            </div>
            <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Acknowledgements</h5>
                <p class="grey-text text-lighten-4">Thanks to GA instructors and TAs for your help with this project!<br/>
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>

                  <li><a class="grey-text text-lighten-3" href="https://www.redfin.com/city/17151/CA/San-Francisco/housing-market">SF Housing Trends</a> </li>
                  <li><a class="grey-text text-lighten-3" href="https://www.bayareamarketreports.com/trend/san-francisco-home-prices-market-trends-news">Post Pandemic Bay Area Housing Stats</a> </li>
                  </ul>
                  <h5 class="white-text">Cast & Crew</h5>
                  <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/arjunsinghh/">RJ</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/molly-haughey/">Molly</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/alex-volokhov/">Alex</a></li>


                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Gowąh
            © MRA 2020
            </div>
          </div>
        </footer>
        </div>
    }

}

// const App = (props) => {
//     return <h2>Functional {props.name}!</h2>
// }

ReactDOM.render(
    <App></App>,
    document.querySelector('main')

)
