import React from 'react';
import { getData, options } from '../apis/coinranking'

class DisplayCoins extends React.Component {
    state = {selection: ''};

    

    render() {
        return (
            <div className="ui container">
                <form className="ui form">
                    <label>Choose your crypto currency: </label>
                    <select>
                        {console.log(getData)}
                        <option>Bitcoin</option>
                        <option>Ethereum</option>
                        <option>Link</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default DisplayCoins;