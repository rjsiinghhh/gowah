class App extends React.Component {
    state = {
        bids: []
    }
    componentDidMount = () => {
        this.updaterealEstate();
    }
    changeUpdateBidsListing = (event) => {
        this.setState({
            updateBidsListing:event.target.value
        })
    }
    changeUpdateHomePrice = (event) => {
        this.setState({
            updateBidsPrice:event.target.value
        })
    }
    deletePerson = (event) => {
        axios.delete('/realestate/' + event.target.value).then(
            (response) => {
                this.setState(
                    {
                        realEstate:response.data
                    }
                )
            }
        )
    }
    updateBids = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/realestate/'+id,
            {
                listing:this.state.updateBidsListing,
                pricew:this.state.updateBidsPrice
            }
        ).then(
            (response) => {
                this.setState(
                    {
                        realEstate:response.data
                    }
                )
            }
        )
    }
    updateBids = () => {
        axios.get('/realestate').then(
            (response) => {
                this.setState(
                    {
                        bids:response.data
                    }
                )
            }
        )
    }
    render = () => {
        return <div>
            <CreateForm createCallback={this.updaterealEstate}></CreateForm>
            <h2>Houses for Sale!</h2>
            <ul>
                {
                    this.state.realEstate.map(
                        () => {
                            return <li>
                                {bids.price}: {bids.listing}
                                <button value={bids.id} onClick={this.deleteBids}>
                                    Delete
                                </button>
                                <form id={bids.id} onSubmit={this.updateBids}>
                                    <input onKeyUp={this.changeUpdateBidsPrice} type="number" placeholder="price" /><br/>
                                    <input onKeyUp={this.changeUpdateBidsListing} type="text" placeholder="listing" /><br/>
                                    <input type="submit" value="Update Bids" />
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