import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

class GeneralInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: true,
            firstName: '',
            lastName:'',
            email:'',
            phone:'',
        }

        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }
    
      handleFirstName(event) {
        this.setState({ firstName: event.target.value });
      }
      handleLastName(event) {
        this.setState({ lastName: event.target.value });
      }
    
      handleEmail(event) {
        this.setState({ email: event.target.value });
      }
    
      handlePhone(event) {
        this.setState({ phone: event.target.value });
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
    <h1>General Information</h1>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            type="text"
            value={this.state.firstName} 
            id="standard-basic" 
            label="First Name:" 
            variant="standard"
            onChange={this.handleFirstName} 
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            type="text"
            value={this.state.lastName} 
            id="standard-basic" 
            label="Last Name:" 
            variant="standard"
            onChange={this.handleLastName}  
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            type="text"
            value={this.state.email} 
            id="standard-basic" 
            label="Email:" 
            variant="standard"
            onChange={this.handleEmail}  
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            fullWidth
            type="text"
            value={this.state.phone} 
            id="standard-basic" 
            label="Phone:" 
            variant="standard"
            onChange={this.handlePhone}  
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
      <h1>General Information</h1>
      <p> First Name: {this.state.firstName} </p>
      <p> Last Name: {this.state.lastName} </p>
      <p> Email: {this.state.email} </p>
      <p> Phone: {this.state.phone} </p>
      <Button sx={{ mt: "2rem" }} type="submit" variant="contained" startIcon={<EditIcon />} onClick={this.handleEdit}>Edit</Button>
    </div>
  );
}
}

export default GeneralInformation;