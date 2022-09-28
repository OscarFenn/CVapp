import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            company:'',
            position:'',
            responsibilities:'',
            from:'',
            to:'',
        }

    this.handleCompany = this.handleCompany.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleResponsibilities = this.handleResponsibilities.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    }

    handleCompany(event) {
        this.setState({ company: event.currentTarget.value });
      }
    
      handlePosition(event) {
        this.setState({ position: event.currentTarget.value });
      }
    
      handleResponsibilities(event) {
        this.setState({ responsibilities: event.currentTarget.value });
      }

      handleFrom(event) {
        this.setState({ from: event.currentTarget.value });
      }
    
      handleTo(event) {
        this.setState({ to: event.currentTarget.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.setState({ editing: false });
      }
    
      handleEdit(event) {
        this.setState({ editing: true });
      }

      render() {
        const editing = this.state.editing;
        const [toValue, setToValue] = this.state.to;
        if (editing) {    
        return (
            
    <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Work Experience</h1>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <TextField
                fullWidth
                type="text"
                value={this.state.company} 
                id="standard-basic" 
                label="Company:" 
                variant="standard"
                onChange={this.handleCompany} 
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                fullWidth
                type="text"
                value={this.state.position} 
                id="standard-basic" 
                label="Position:" 
                variant="standard"
                onChange={this.handlePosition}  
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            fullWidth
                type="text"
                value={this.state.responsibilities} 
                id="standard-basic" 
                label="Responsibilities:"
                multiline
                rows={3} 
                variant="standard"
                onChange={this.handleResponsibilities}  
            />
            </Grid>
            <Grid item xs={6}>
            <label>From: </label>
            <input type="date" 
                    name="From:"
                    value={this.state.from}
                    onChange={this.handleFrom} 
            />
            </Grid>
            <Grid item xs={6}>
            <label>To: </label>
            <input type="date" 
                    name="To:"
                    value={this.state.to}
                    onChange={this.handleTo} 
            />
            </Grid>
            </Grid>
            <Button sx={{ mt: "2rem" }} type="submit" variant="contained">Submit</Button>
        </form>
    </div>
        );
    }
    return (
        <div>
            <h1>Experience</h1>
          <p> Company: {this.state.company} </p>
          <p> Position: {this.state.position} </p>
          <p> Responsibilities: {this.state.responsibilities} </p>
          <p> From: {this.state.from} </p>
          <p> To: {this.state.to} </p>
          <Button sx={{ mt: "2rem" }} type="submit" variant="contained" startIcon={<EditIcon />} onClick={this.handleEdit}>Edit</Button>
        </div>
      );
    }
}

export default Experience;