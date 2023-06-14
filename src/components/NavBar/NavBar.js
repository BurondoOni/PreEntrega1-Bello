import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return( 
    <nav>
        <h3>Tipa</h3>
        <div>
            <button>Latas</button>
            <button>Botellas</button>
            <button>Barriles</button>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar