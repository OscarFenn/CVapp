import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: true,
            college:'',
            degree:'',
            from:'',
            to:'',
        }
        
  
    
    this.handleCollege = this.handleCollege.bind(this);
    this.handleDegree = this.handleDegree.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    }

    handleCollege(event) {
        this.setState({ college: event.currentTarget.value });
      }
    
      handleDegree(event) {
        this.setState({ degree: event.currentTarget.value });
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
        if (editing) {    
        return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Education</h1>
        <Grid container spacing={3}>
        <Grid item xs={6}>
            <TextField
                fullWidth
                type="text"
                value={this.state.college} 
                id="standard-basic" 
                label="College:" 
                variant="standard"
                onChange={this.handleCollege} 
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
                fullWidth
                type="text"
                value={this.state.degree} 
                id="standard-basic" 
                label="Degree:" 
                variant="standard"
                onChange={this.handleDegree}  
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
            <h1>Education</h1>
          <p> College: {this.state.college} </p>
          <p> Degree: {this.state.degree} </p>
          <p> From: {this.state.from} </p>
          <p> To: {this.state.to} </p>
          <Button sx={{ mt: "2rem" }} type="submit" variant="contained" startIcon={<EditIcon />} onClick={this.handleEdit}>Edit</Button>
        </div>
      );
    }
}

export default Education;