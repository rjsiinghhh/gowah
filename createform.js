class CreateForm extends React.Component {
    createBids = (event) => {
        event.preventDefault();
        axios.post(
            '/realestate',
            {
                price:this.state.newBidsPrice,
                listing:this.state.newBidsListing
            }
        ).then(
            (response) => {
                this.props.createCallback();
            }
        )
    }
    changeNewBidsListing = (event) => {
        this.setState({
            newBidsListing:event.target.value
        })
    }
    changeNewBidsPrice = (event) => {
        this.setState({
            newBidsPrice:event.target.value
        })
    }
    render = () => {
        return <div>
            <h2>Create Bids</h2>
            <form onSubmit={this.createBids}>
                <input onKeyUp={this.changeNewBidsPrice} type="number" placeholder="price" /><br/>
                <input onKeyUp={this.changeNewBidsListing} type="text" placeholder="listing" /><br/>
                <input type="submit" value="Create BIds"/>
            </form>
        </div>
    }
}