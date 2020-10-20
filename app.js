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
                bid_price:this.state.updateHomeBid_price,
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
      const bid_price = this.state.home.bid_price;
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
              <ul>
                {
                    this.state.homes.map(
                        (home) => {
                            return <div className="container">

                            <li>

                             <img className="pics" src={home.image_link} alt="home-pics"/><br/>
                                Asking ${home.price}<br/>
                                {home.housenumber}<br/>
                                {home.streetname}<br/>
                                {home.city},
                                 {home.state}<br/>
                                <details>
                                {home.bedrooms}<br/>
                                {home.bathrooms}<br/>
                                Square FT:{home.squareft}



                                 {home.zip}<br/>

                                 Highest Bid: {home.bid_price}
                                 <br/>For More Info {home.callback_phone}

                                <form id={home.id} onSubmit={this.updateHome}>
                                    <input onKeyUp={this.changeUpdateHomeBid_price} type="text" placeholder="Make An Offer?" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeCallback_phone} type="text" placeholder="Leave Your Number" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeSet_date} type="text" placeholder="Set An Appointment" /> <br />
                                    <input type="submit" value="Make An Offer" />
                                </form>
                                <button value={home.id} onClick={this.deleteHome}>
                                    Delete
                                </button>
                                {
                                          this.state.homes.filter(home => {
                                            return home.bid_price == home.id
                                          })

                                .map((home, i) => {

                      <div key={i}>
                        <p>Name: {home.bid_price}</p>
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
                        <label htmlFor="review_content">Review</label>
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
                      <button onClick={this.deleteHome} id={home._id}>delete</button>
                        </details>
                      </div>

                  })
                }

                <summary>Make An Offer?</summary>
                <form onSubmit={this.createBid}>
                  <input id='home_id' type='hidden' value={home.id} />
                  <label htmlFor="name">Name: </label>
                  <input id='name' type='text' onChange={this.bidChange} />
                  <br/>
                  <label htmlFor="review">Review: </label>
                  <input id='review_content' type='text' onChange={this.bidChange} />
                  <br/>

                  <input className="submit" type="submit" value="Make An Offer" />
                </form>
                </details>


                            </li>


                            </div>


                        }
                    )
                }
                </ul>

            </div>

        </div>
    }

}


ReactDOM.render(
    <App></App>,
    document.querySelector('main')

)