import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state with default values
  state = {
    person: {
      fullName: 'Abdoulaye',
      bio: 'Yes We Can',
      imgSrc: './logo.jpg', // Placeholder image
      profession: 'Etudiant',
    },
    show: false,
    mountTime: null,
  };

  // Lifecycle method: component did mount
  componentDidMount() {
    this.setState({ mountTime: new Date() });

    // Set interval to update the component every second
    this.intervalId = setInterval(() => {
      this.forceUpdate(); // Force update to re-render component
    }, 1000);
  }

  // Lifecycle method: component will unmount
  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval to avoid memory leaks
  }

  // Toggle the show state
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="App">
        <h1>Mon  Profil</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Component mounted at: {mountTime && mountTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
