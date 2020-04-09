import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import Errorboundary from "../components/Errorboundry";
import { setSearchField, requestRobots } from "../actions";
import Header from "../components/Header";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};
// Will be called at connect function.

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
// Will be called at connect function.

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    const { onSearchChange, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    
    return(
      <div className="tc ma5 ">
        <Header />
        <SearchBox SearchChange={onSearchChange} />
        <Scroll>
          <Errorboundary>
            <CardList robots={filteredRobots} isPending={isPending}/>
          </Errorboundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect Redux's store to App.
