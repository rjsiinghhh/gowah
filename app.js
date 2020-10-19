class App extends React.Component {
    state = {
        homes: []
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

    render = () => {
        return <div>
            <h2>Listings</h2>
            <ul>
                {
                    this.state.homes.map(
                        (home) => {
                            return <div className="container">
                            <li>
                             <img className="pics" src={home.image_link} alt="home-pics"/>
                                {home.price}<br/>
                                {home.bedrooms}<br/>
                                {home.bathrooms}<br/>
                                {home.sqaureft}<br/>
                                {home.housenumber}
                                {home.streetname}
                                {home.city}<br/>
                                 {home.state}<br/>
                                 {home.zip}<br/>

                                 <br/>{home.bid_price}
                                 <br/> {home.callback_phone}

                                <form id={home.id} onSubmit={this.updateHome}>
                                    <input onKeyUp={this.changeUpdateHomeBid_price} type="text" placeholder="Make An Offer?" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeCallback_phone} type="text" placeholder="Leave Your Phone Number" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeSet_date} type="text" placeholder="Set An Appointment" /> <br />
                                    <input type="submit" value="Update Bid" />
                                </form>
                                <button value={home.id} onClick={this.deleteHome}>
                                    Delete
                                </button>
                            </li>
                            </div>
                        }
                    )
                }
            </ul>
        </div>
    }
}


ReactDOM.render(
    <App></App>,
    document.querySelector('main')

)
