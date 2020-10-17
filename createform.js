class CreateForm extends React.Component {
    createHomes = (event) => {
        event.preventDefault();
        axios.post(
            '/homes',
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
                this.props.createCallback();
            }
        )
    }
    changeNewHomesPrice = (event) => {
        this.setState({
            newHomesPrice:event.target.value
        })
    }
    changeNewHomesBedrooms = (event) => {
        this.setState({
            newHomesBedroom:event.target.value
        })
    }
    changeNewHomesBathrooms = (event) => {
        this.setState({
            newHomesBathrooms:event.target.value
        })
    }
    changeNewHomesSquareft = (event) => {
        this.setState({
            newHomesSquareft:event.target.value
        })
    }
    changeNewHomesHouseNumber = (event) => {
        this.setState({
            newHomesHouseNumber:event.target.value
        })
    }
    changeNewHomesStreetName = (event) => {
        this.setState({
            newHomesStreetName:event.target.value
        })
    }
    changeNewHomesCity = (event) => {
        this.setState({
            newHomesCity:event.target.value
        })
    }
    changeNewHomesState = (event) => {
        this.setState({
            newHomesState:event.target.value
        })
    }
    changeNewHomesZip = (event) => {
        this.setState({
            newHomesZip:event.target.value
        })
    }
    changeNewHomesImage_Link = (event) => {
        this.setState({
            newHomesImage_Link:event.target.value
        })
    }
    changeNewHomesBid_Price = (event) => {
        this.setState({
            newHomesBid_Price:event.target.value
        })
    }
    changeNewHomesCallBack_Phone = (event) => {
        this.setState({
            newHomesCallBack_Phone:event.target.value
        })
    }
    changeNewHomesSet_Date = (event) => {
        this.setState({
            newHomesSet_Date:event.target.value
        })
    }
    render = () => {
        return <div>
            <h2>Create Homes</h2>
            <form onSubmit={this.createHomes}>
            <input onKeyUp={this.changeNewHomesPrice} type="number" placeholder="price" /><br/>
                                    <input onKeyUp={this.changeNewHomesBedrooms} type="number" placeholder="bedrooms" /><br/>
                                    <input onKeyUp={this.changeNewHomesBathrooms} type="number" placeholder="bathrooms" /><br/>
                                    <input onKeyUp={this.changeNewHomesSquareft} type="number" placeholder="squareft" /><br/>
                                    <input onKeyUp={this.changeNewHomesHouseNumber} type="number" placeholder="housenumber" /><br/>
                                    <input onKeyUp={this.changeNewHomesStreetName} type="text" placeholder="streetname" /><br/>
                                    <input onKeyUp={this.changeNewHomesCity} type="text" placeholder="city" /><br/>
                                    <input onKeyUp={this.changeNewHomesState} type="text" placeholder="state" /><br/>
                                    <input onKeyUp={this.changeNewHomesZip} type="number" placeholder="zip" /><br/>
                                    <input onKeyUp={this.changeNewHomesImage_Link} type="image" placeholder="imagelink" /><br/>
                                    <input onKeyUp={this.changeNewHomesBid_Price} type="number" placeholder="bidprice" /><br/>
                                    <input onKeyUp={this.changeNewHomesCallBack_Phone} type="number" placeholder="callbackphone" /><br/>
                                    <input onKeyUp={this.changeNewHomesSet_Date} type="number" placeholder="setdate" /><br/>
                <input type="submit" value="Create Homes"/>
            </form>
        </div>
    }
}