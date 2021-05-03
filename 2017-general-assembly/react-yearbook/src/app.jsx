const React = require('react');
const ReactDOM = require('react-dom');
const YearBook = require('./components/YearBook');
const PersonShow = require('./components/PersonShow');

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Yearbook Component</h1>
        <YearBook />
        <h1>PersonShow Component (Hardcoded to Person 0)</h1>
        <PersonShow />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('container'));
