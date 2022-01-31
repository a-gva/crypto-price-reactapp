function Coin({ name, icon, price, symbol }) {
    return <div className="coin">
        <h1>{name} </h1>
        <h3>({symbol})</h3>
        <img src={icon} alt="" />
        <h3>$ {price}</h3>
    </div>;
}

export default Coin;
