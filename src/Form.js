import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class FormDialog extends Component {
  state ={
    open:false,
    city:[]

  }

  handleClickOpen = () => {
    this.setState({
      open:!this.state.open
    })
  };
  addCity(){
    this.setState({city:[...this.state.city,""]})
  }
  handleChange(e,index){
    this.state.city[index] = e.target.value

    this.setState({city:this.state.city});
  }
  handleRemove(index){
    this.state.city.splice(index,1);
    console.log(this.state.city,"$$$$");
    this.setState({city:this.state.city})
    
  }
  
  

  render(){
    const {open}= this.state;
  return (
    <div>
      <Fab style={{float:'right'}} color="primary" aria-label="add" onClick={this.handleClickOpen} >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={this.handleClickOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Fill Form</DialogTitle>
        <DialogContent>
            <form onSubmit={this.onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} >
              {
          this.state.city.map((city,index)=>{
            return(
              <div key={index}> 
              <InputGroup>
              <Input type="text" style={{marginBottom:'10px'}} value={city} onChange={(e)=>this.handleChange(e,index)}/>
                <InputGroupAddon addonType="prepend">
                  <Button onClick={()=>this.handleRemove(index)} style={{color:'red'}}>x</Button>
                </InputGroupAddon>
              </InputGroup>
              </div>
            )
          })
        }
             </Grid>
          </Grid>
          <Button onClick={(e)=>this.addCity(e)} style={{backgroundColor:"blue",display:"flex",color:'#fff'}} >Add city</Button>
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onSubmit} style={{backgroundColor:'blue',color:"#fff"}} >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}


export default FormDialog;
