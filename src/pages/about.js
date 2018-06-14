import React from 'react'
import Link from 'gatsby-link'

class AboutPage extends React.Component {
  state={ count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 })

  render() {
    return (
      <div>
        <h1>Learn about my website</h1>
        <p onClick={this.increment}>lorem ipsum {this.state.count}</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    );
  }
}

export default AboutPage
