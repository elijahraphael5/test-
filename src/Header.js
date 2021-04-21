import logo from './logo.svg'

function Header({name}) {
    console.log(name)
    return(
        <header className="App-header">
                my name is {name}
      </header>
    )
}

export default Header