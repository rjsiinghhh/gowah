class App extends React.Component {
    state = {
        homes: []
    }
    componentDidMount = () => {
        this.updateHomes();
    }
    changeUpdateHomePrice = (event) => {
        this.setState({
            updateHomePrice:event.target.value
        })
    }
    changeUpdateHomeBedrooms = (event) => {
        this.setState({
            updateHomeBedroom:event.target.value
        })
    }
    changeUpdateHomeBathrooms = (event) => {
        this.setState({
            updateHomeBathrooms:event.target.value
        })
    }
    changeUpdateHomeSquareft = (event) => {
        this.setState({
            updateHomeSquareft:event.target.value
        })
    }
    changeUpdateHomeHouseNumber = (event) => {
        this.setState({
            updateHomeHouseNumber:event.target.value
        })
    }
    changeUpdateHomeStreetName = (event) => {
        this.setState({
            updateHomeStreetName:event.target.value
        })
    }
    changeUpdateHomeCity = (event) => {
        this.setState({
            updateHomeCity:event.target.value
        })
    }
    changeUpdateHomeState = (event) => {
        this.setState({
            updateHomeState:event.target.value
        })
    }
    changeUpdateHomeZip = (event) => {
        this.setState({
            updateHomeZip:event.target.value
        })
    }
    changeUpdateHomeImage_Link = (event) => {
        this.setState({
            updateHomeImage_Link:event.target.value
        })
    }
    changeUpdateHomeBid_Price = (event) => {
        this.setState({
            updateHomeBid_Price:event.target.value
        })
    }
    changeUpdateHomeCallBack_Phone = (event) => {
        this.setState({
            updateHomeCallBack_Phone:event.target.value
        })
    }
    changeUpdateHomeSet_Date = (event) => {
        this.setState({
            updateHomeSet_Date:event.target.value
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
                price:this.state.updateHomePrice,
                bedrooms:this.state.updateHomeBedrooms,
                bathrooms:this.state.updateHomeBathrooms,
                squareft:this.state.updateHomeSquareft,
                housenumber:this.state.updateHomeHouseNumber,
                streetname:this.state.updateHomeStreetName,
                city:this.state.updateHomeCity,
                state:this.state.updateHomeState,
                zip:this.state.updateHomeZip,
                image_link:this.state.updateHomeImage_Link,
                bid_price:this.state.updateHomeBid_Price,
                callback_phone:this.state.updateHomeCallBack_Phone,
                set_date:this.state.updateHomeSet_Date,
                    
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
    updateHome = () => {
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
            <CreateForm createCallback={this.updateHomes}></CreateForm>
            <h2>Houses for Sale!</h2>
            <ul>
                {
                    this.state.homes.map(
                        (home) => {
                            return <li>
                                {home.price}: {home.bedrooms}: {home.bathrooms}: {home.squareft}: {home.housenumber}: {home.streetname}: {home.city}: {home.state}: {home.zip}: {home.image_link}: {home.bid_price}: {home.callback_phone}: {home.set_date}
                                <button value={home.id} onClick={this.deleteHome}>
                                    Delete
                                </button>
                                <form id={home.id} onSubmit={this.updateHome}>
                                    <input onKeyUp={this.changeUpdateHomePrice} type="number" placeholder="price" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeBedrooms} type="number" placeholder="bedrooms" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeBathrooms} type="number" placeholder="bathrooms" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeSquareft} type="number" placeholder="squareft" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeHouseNumber} type="number" placeholder="housenumber" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeStreetName} type="text" placeholder="streetname" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeCity} type="text" placeholder="city" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeState} type="text" placeholder="state" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeZip} type="number" placeholder="zip" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeImage_Link} type="image" placeholder="imagelink" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeBid_Price} type="number" placeholder="bidprice" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeCallBack_Phone} type="number" placeholder="callbackphone" /><br/>
                                    <input onKeyUp={this.changeUpdateHomeSet_Date} type="number" placeholder="setdate" /><br/>
                                    <input type="submit" value="Update Home" />
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    }
}
const App = (props) => {
    return <h2>Functional {props.name}!</h2>
}
ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)