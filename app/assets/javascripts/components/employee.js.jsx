var Employee = React.createClass({
  getInitialState() {
    return {
      employee: this.props.employee
    }
  },

  render() {
   employees = this.state.employees.map( function(employee) 
    return (
      <tr>
       <Employee employee={employee} key={employee.id} />
      </tr>

        <tbody>
        {employees}
        <tr>
          <td>
            <input type="text" onChange={this.handleNameChange} /><br />
            <span style={{color: 'red'}}>{this.state.errors.name}</span>
          </td>
          <td>
            <input type="text" onChange={this.handleEmailChange} /><br />
            <span style={{color: 'red'}}>{this.state.errors.email}</span>
          </td>
          <td><input type="checkbox" onChange={this.handleManagerChange} /></td>
          <td><button onClick={this.handleHireEmployee}>Hire</button></td>
        </tr>
      </tbody>
    );
  }
});