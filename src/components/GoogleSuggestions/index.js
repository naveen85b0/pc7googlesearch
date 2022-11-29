import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onFullSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
    )

    return (
      <div className="maincontainer">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleimage"
          />
        </div>

        <div className="suggestioncontainer">
          <div className="insideinput">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchimage"
            />
            <input
              type="search"
              placeholder="search"
              className="searchtext"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
          <ul className="suggestions-list">
            {filteredList.map(each => (
              <SuggestionItem
                key={each.id}
                suggestion={each.suggestion}
                onFullSuggestion={this.onFullSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
