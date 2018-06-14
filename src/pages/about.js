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

        <form name="hiring" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Why do you want to work for us?: <textarea name="why"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default AboutPage
