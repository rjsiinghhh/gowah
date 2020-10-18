class App extends React.Component{
  state = {
    homes : []
  }

  componentDidMount = () => {
    axios.get('/homes').then(
      (response) => {
        this.setState(
          {
            homes: response.data
          }
        )
      }
    )
  }

deleteHome = (event) => {
  axios.delete('/homes/') + event.target.value).then(
    (response) =>{
      this.setState(
        {
          homes: response.data
        }
      )
    }
  )
}

updateHomes = (allPeople) => {
  this.setState(
    {
      homes: allHomes
    }
  )
}


}


render = () => {
  return <div>
  <CreateForm createCallback= {this.updateHomes}> </CreateForm>
  <h2> Listings</h2>
  <ul>
  {
    this.state.homes.map(
      (home) => {
        return <li>
        {home.bid_price}: {home.callback_phone}
        <button value={home.id} onClick={this.deleteHome}>
        Delete
        </button>
        <UpdateForm
        updateCallback={this.updateHomes}
        home={home}>
        </UpdateForm>
        </li>
      }
    )
  }

  <ul>
  </div>



}



ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
