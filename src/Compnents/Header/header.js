import img1 from "../asserts/Screenshot-20230720202651.png"
function Header() {
    return(
        <div>
              <nav className="navbar bg-body-tertiary">
        <div className="container-fluid" style={{backgroundColor: 'rgb(46, 45, 45)'}}>
          <a className="navbar-brand"><img src={img1} style={{width: '70%'}} /></a>
          <p style={{color: 'aliceblue'}}>Marketplace</p>
          <p style={{color: 'aliceblue'}}>Rankings</p>
          <p style={{color: 'aliceblue'}}>Connect a wallet</p>
          <form className="d-flex" role="search" style={{marginRight: '20px'}}>
            <button type="button" className="btn btn-primary" style={{backgroundColor: 'rgb(129, 62, 168)', borderColor: 'rgb(129, 62, 168)'}}>Sign Up</button>
          </form>
        </div>
      </nav>
        </div>
    )
}
export default Header ;