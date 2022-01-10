import React from "react";
import AddForm from "../../components/AddForm";
import List from "../../components/List";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        "Study something",
        "Practice in something",
        "Do something",
        "Complete something",
      ],
      current: "",
    };
  }

  render() {
    const list = this.state.jobs.map((job, index) => {
      return (
        <List
          key={index}
          index={index}
          job={job}
          edit={this.edit}
          delete={this.delete}
        />
      );
    });
    return (
      <main>
        <h1>TODO List</h1>
        <AddForm
          submit={this.submit}
          change={this.change}
          current={this.state.current}
        />
        <ul>{list}</ul>
      </main>
    );
  }

  componentDidMount() {
    document.title = "Home Page";
  }

  submit = (e) => {
    e.preventDefault();
    let { jobs } = this.state;
    jobs.push(this.state.current);
    this.setState({
      jobs,
      current: "",
    });
  };

  change = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  edit = (i, val) => {
    let { jobs } = this.state;
    jobs[i] = val;
    this.setState({
      jobs,
    });
  };

  delete = (index) => {
    let jobs = this.state.jobs;
    jobs.splice(index, 1);
    this.setState({
      jobs,
    });
  };
}
