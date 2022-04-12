import React from 'react';

class Search extends React.Component {

        state = {term: ''};

        handleChange = (e) => {
            this.setState( {term: e.target.value} )
            // console.log(this.state)
        }

        onFormSubmit = (e) => {
            e.preventDefault();
            this.props.onTermSubmit(this.state.term)
        }

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Crypto CCY Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.handleChange}
                        />
                    <button className="ui button">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;