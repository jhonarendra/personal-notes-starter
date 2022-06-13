import React from 'react'
import SearchIcon from './icon/SearchIcon'
import XIcon from './icon/XIcon'

class HeaderSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      showSearchForm: false
    }
  }
  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
    this.props.handleSearch(e.target.value)
  }
  toggleSearchForm = () => {
    this.setState({
      ...this.state,
      showSearchForm: !this.state.showSearchForm
    })
  }
  render() {
    return (
      <div className='note-app__header-wrapper'>
        <div className='note-app__header'>
          <h1>Notes</h1>
          {
            (this.state.showSearchForm) ? (
              <div className="note-search">
                <input
                  type="text"
                  placeholder="Cari catatan ..."
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </div>
            ) : ''
          }
          
          <button
            type="button"
            className='button-transparent'
            onClick={this.toggleSearchForm}
          >
            {
              (this.state.showSearchForm) ? (
                <XIcon />
              ) : (
                <SearchIcon />
              )
            }
            
          </button>
        </div>
      </div>
    )
  }
}

export default HeaderSection