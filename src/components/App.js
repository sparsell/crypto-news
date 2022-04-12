import React from 'react';
import Search from './Search';
import DisplayCoins from './DisplayCoins';
import { getData, options } from '../apis/coinranking';


class App extends React.Component {

    onTermSubmit = () => {
        console.log(getData(options))
    };

    onCoinSelect = (e) => {
        
    }

    render() {
        return (
            <div className="ui container">
                <Search onTermSubmit={this.onTermSubmit} />
                <DisplayCoins ccyData={this.ccyData} onCoinSelect={this.onCoinSelect}/>

            </div>
        )
    }

}

export default App;