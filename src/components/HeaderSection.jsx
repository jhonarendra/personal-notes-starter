import React from 'react'

class HeaderSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
    this.props.handleSearch(e.target.value)
  }
  render() {
    return (
      <div className='note-app__header-wrapper'>
        <div className='note-app__header'>
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan ..."
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderSection