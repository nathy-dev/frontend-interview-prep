import { useState } from 'react'
import Coin from './coin'

const Flipper = () => {
    const [isHeads, setIsHeads] = useState(true);
    const [totalFlips, setTotalFlips] = useState(0);
    const [totalHeads, setTotalHeads] = useState(0)
    const handleFlip = () => {
        Math.random() > 0.5 ? setIsHeads(true) : setIsHeads(false);
    }

    const handleButtonClick = () => {
        handleFlip();
        let flipCount = totalFlips;
        flipCount++;
        setTotalFlips(flipCount);
        if(isHeads) {
            let headCount = totalHeads;
            headCount++;
            setTotalHeads(headCount)
        } 
    }

    return (
        <div>
            <Coin isHeads={ isHeads }/>
            <button onClick={handleButtonClick}>Flip Me!</button>
            <p> You have flipped a coin {totalFlips} times! </p>
            <span>{Math.round((totalHeads * 100 / totalFlips) * 100) / 100 }% of your flips have been Heads</span>
        </div>
    )

}

export default Flipper;