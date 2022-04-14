import heads from '../images/heads.jpeg'
import tails from '../images/tails.jpeg'

const Coin = ({isHeads}) => {
    if(isHeads) {
        return (
            <img alt='heads' src={heads}></img>
        )
    }
    return (
        <img alt='tails' src={tails}></img>
    )
}

export default Coin;