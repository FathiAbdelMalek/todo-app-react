import React from "react";
import EditForm from "../EditForm";
import Job from "../Job";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      isEdit: false,
    };
  }

  change = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.edit(this.props.index, this.state.value);
    this.toggle();
  };

  renderJob = () => {
    return (
      <Job
        job={this.props.job}
        toggle={this.toggle}
        delete={() => this.props.delete(this.props.index)}
        index={this.props.index}
      />
    );
  };

  renderForm = () => {
    return (
      <EditForm
        value={this.props.job}
        submit={this.submit}
        change={this.change}
      />
    );
  };

  toggle = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  render() {
    return this.state.isEdit ? this.renderForm() : this.renderJob();
  }
}
