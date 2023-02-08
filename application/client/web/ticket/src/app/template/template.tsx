import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./template.scss";

import  {service}  from './template.service';


class Template extends React.Component<any, any> {

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
    this.state={ 
    tickets : {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    },
    rowData :[],options:[],
 }  }

   
    handlechange = (e: any) => {
         if(e?.target){
            this.setState({ tickets: { ...this.state.tickets, [e.target.name]: e.target.value } }) 
         }
    }
    

    componentDidMount() {
        this.state.tickets.created_by = sessionStorage.getItem('email')||'{}'; 
    }
    GpCreate  () {
      this.test.GpCreate(this.state.tickets).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }

    render(){
        return(
            <>
            <h2 className="screen-align">template</h2>
            <div id="template-ifzd" className="gjs-row">
    <div id="template-irum" className="gjs-cell">
        <input id="template-iwxk" placeholder="Name" onChange={this.handlechange}
        name="name" value={this.state.test.name}className="input form-control "
        />
    </div>
</div>
<div id="template-i82x" className="gjs-row"></div>
<button id="template-ip7h" onClick={()=>this.GpCreate()} className="button btn btn-primary "> Send</button>
            </>
        );
    };
};

export default Template;