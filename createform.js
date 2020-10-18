class CreateForm extends React.Component {
    createHome = () => {
        event.preventDefault();
        axios.post(
            '/homes',
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
                this.props.createCallback();
            }
        )
    }
    changeNewHomePrice = (event) => {
        this.setState({
            newHomePrice:event.target.value
        })
    }
    changeNewHomeBedrooms = (event) => {
        this.setState({
            newHomeBedroom:event.target.value
        })
    }
    changeNewHomeBathrooms = (event) => {
        this.setState({
            newHomeBathrooms:event.target.value
        })
    }
    changeNewHomeSquareft = (event) => {
        this.setState({
            newHomeSquareft:event.target.value
        })
    }
    changeNewHomeHouseNumber = (event) => {
        this.setState({
            newHomeHouseNumber:event.target.value
        })
    }
    changeNewHomeStreetName = (event) => {
        this.setState({
            newHomeStreetName:event.target.value
        })
    }
    changeNewHomeCity = (event) => {
        this.setState({
            newHomeCity:event.target.value
        })
    }
    changeNewHomeState = (event) => {
        this.setState({
            newHomeState:event.target.value
        })
    }
    changeNewHomeZip = (event) => {
        this.setState({
            newHomesip:event.target.value
        })
    }
    changeNewHomeImage_Link = (event) => {
        this.setState({
            newHomeImage_Link:event.target.value
        })
    }
    changeNewHomeBid_Price = (event) => {
        this.setState({
            newHomeBid_Price:event.target.value
        })
    }
    changeNewHomeCallBack_Phone = (event) => {
        this.setState({
            newHomeCallBack_Phone:event.target.value
        })
    }
    changeNewHomeSet_Date = (event) => {
        this.setState({
            newHomeSet_Date:event.target.value
        })
    }
    render = () => {
        return <div>
            <h2>Create Homes</h2>
            <form onSubmit={this.createHome}>
                    <input onKeyUp={this.changeNewHomePrice} type="number" placeholder="price" /><br/>
                    <input onKeyUp={this.changeNewHomeBedrooms} type="number" placeholder="bedrooms" /><br/>
                    <input onKeyUp={this.changeNewHomeBathrooms} type="number" placeholder="bathrooms" /><br/>
                    <input onKeyUp={this.changeNewHomeSquareft} type="number" placeholder="squareft" /><br/>
                    <input onKeyUp={this.changeNewHomeHouseNumber} type="number" placeholder="housenumber" /><br/>
                    <input onKeyUp={this.changeNewHomeStreetName} type="text" placeholder="streetname" /><br/>
                    <input onKeyUp={this.changeNewHomeCity} type="text" placeholder="city" /><br/>
                    <input onKeyUp={this.changeNewHomeState} type="text" placeholder="state" /><br/>
                    <input onKeyUp={this.changeNewHomeZip} type="number" placeholder="zip" /><br/>
                    <input onKeyUp={this.changeNewHomeImage_Link} type="image" placeholder="imagelink" /><br/>
                    <input onKeyUp={this.changeNewHomeBid_Price} type="number" placeholder="bidprice" /><br/>
                    <input onKeyUp={this.changeNewHomeCallBack_Phone} type="number" placeholder="callbackphone" /><br/>
                    <input onKeyUp={this.changeNewHomeSet_Date} type="number" placeholder="setdate" /><br/>
                    <input type="submit" value="Create Home"/>
            </form>
        </div>
    }
}