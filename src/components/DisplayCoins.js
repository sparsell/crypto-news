import React from 'react';

class DisplayCoins extends React.Component {
    state = {selection: ''};

    render() {
        return (
            <div className="ui container">
                <form className="ui form">
                    <label>Choose your crypto currency: </label>
                    <select>
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