class App extends React.Component {
    state = {
        homes: []
    }
    componentDidMount = () => {
        this.updateHome();
    }
    changeUpdateHomesPrice = (event) => {
        this.setState({
            updateHomesPrice:event.target.value
        })
    }
    changeUpdateHomesBedrooms = (event) => {
        this.setState({
            updateHomesBedroom:event.target.value
        })
    }
    changeUpdateHomesBathrooms = (event) => {
        this.setState({
            updateHomesBathrooms:event.target.value
        })
    }
    changeUpdateHomesSquareft = (event) => {
        this.setState({
            updateHomesSquareft:event.target.value
        })
    }
    changeUpdateHomesHouseNumber = (event) => {
        this.setState({
            updateHomesHouseNumber:event.target.value
        })
    }
    changeUpdateHomesStreetName = (event) => {
        this.setState({
            updateHomesStreetName:event.target.value
        })
    }
    changeUpdateHomesCity = (event) => {
        this.setState({
            updateHomesCity:event.target.value
        })
    }
    changeUpdateHomesState = (event) => {
        this.setState({
            updateHomesState:event.target.value
        })
    }
    changeUpdateHomesZip = (event) => {
        this.setState({
            updateHomesZip:event.target.value
        })
    }
    changeUpdateHomesImage_Link = (event) => {
        this.setState({
            updateHomesImage_Link:event.target.value
        })
    }
    changeUpdateHomesBid_Price = (event) => {
        this.setState({
            updateHomesBid_Price:event.target.value
        })
    }
    changeUpdateHomesCallBack_Phone = (event) => {
        this.setState({
            updateHomesCallBack_Phone:event.target.value
        })
    }
    changeUpdateHomesSet_Date = (event) => {
        this.setState({
            updateHomesSet_Date:event.target.value
        })
    }
    deleteHomes = (event) => {
        axios.delete('/realestate/' + event.target.value).then(
            (response) => {
                this.setState(
                    {
                        home:response.data
                    }
                )
            }
        )
    }
    updateHomes = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/realestate/'+id,
            {
                price:this.state.updateHomesPrice,
                bedrooms:this.state.updateHomesBedrooms,
                bathrooms:this.state.updateHomesBathrooms,
                squareft:this.state.updateHomesSquareft,
                housenumber:this.state.updateHomesHouseNumber,
                streetname:this.state.updateHomesStreetName,
                city:this.state.updateHomesCity,
                state:this.state.updateHomesState,
                zip:this.state.updateHomesZip,
                image_link:this.state.updateHomesImage_Link,
                bid_price:this.state.updateHomesBid_Price,
                callback_phone:this.state.updateHomesCallBack_Phone,
                set_date:this.state.updateHomesSet_Date,
                    
            }
        ).then(
            (response) => {
                this.setState(
                    {
                        home:response.data
                    }
                )
            }
        )
    }
    updateHomes = () => {
        axios.get('/realestate').then(
            (response) => {
                this.setState(
                    {
                        home:response.data
                    }
                )
            }
        )
    }
    render = () => {
        return <div>
            <CreateForm createCallback={this.updateHome}></CreateForm>
            <h2>Houses for Sale!</h2>
            <ul>
                {
                    this.state.home.map(
                        (homes) => {
                            return <li>
                                {homes.price}: {homes.bedrooms}: {homes.bathrooms}: {homes.squareft}: {homes.housenumber}: {homes.streetname}: {homes.city}: {homes.state}: {homes.zip}: {homes.image_link}: {homes.bid_price}: {homes.callback_phone}: {homes.set_date}
                                <button value={homes.id} onClick={this.deleteHomes}>
                                    Delete
                                </button>
                                <form id={homes.id} onSubmit={this.updateHomes}>
                                    <input onKeyUp={this.changeUpdateHomesPrice} type="number" placeholder="price" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesBedrooms} type="number" placeholder="bedrooms" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesBathrooms} type="number" placeholder="bathrooms" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesSquareft} type="number" placeholder="squareft" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesHouseNumber} type="number" placeholder="housenumber" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesStreetName} type="text" placeholder="streetname" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesCity} type="text" placeholder="city" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesState} type="text" placeholder="state" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesZip} type="number" placeholder="zip" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesImage_Link} type="image" placeholder="imagelink" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesBid_Price} type="number" placeholder="bidprice" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesCallBack_Phone} type="number" placeholder="callbackphone" /><br/>
                                    <input onKeyUp={this.changeUpdateHomesSet_Date} type="number" placeholder="setdate" /><br/>
                                    <input type="submit" value="Update Homes" />
                                </form>
                            </li>
                        }
                    )
                }
            </ul>
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