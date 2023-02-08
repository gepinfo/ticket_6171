import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./Sample Screen.scss";

import  {service}  from './Sample Screen.service';


class Sample Screen extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'column_6', field: ''  },{ headerName: 'column_5', field: ''  },{ headerName: 'column_4', field: ''  },{ headerName: 'column_5', field: ''  },{ headerName: 'column_6', field: ''  },{ headerName: 'column_3', field: ''  },];

     gridApi: any;
     gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
       super(props);
     this.onRowSelected = this.onRowSelected.bind(this)
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
        this.GpGetAllValues();
    }
    GpCreate  () {
      this.test.GpCreate(this.state.tickets).then((data:any) => {
            
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues  () {
      this.test.GpGetAllValues().then((data:any) => {
            this.setState({rowData:data.data})
        },
        (error:any) => {
            console.log('Error', error);
        });
    }
    onRowSelected(event:any) {
         this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
        return(
            <>
            <h2 className="screen-align">Sample Screen</h2>
            <div id="template-imedn" className="gjs-row">
    <div id="template-ihnwn" className="gjs-cell">
        <div id="template-id4cw">Flo's Clothes
            <br id="template-icuj9"></br>
        </div>
        <div id="template-i75o4" className="gjs-row">
            <div id="template-iayfi" className="gjs-cell"></div>
            <div id="template-iwk03" className="gjs-cell"></div>
            <div id="template-iyhls" className="gjs-cell"></div>
        </div>
    </div>
    <div id="template-i9k9h" className="gjs-cell"></div>
</div>
            </>
        );
    };
};

export default Sample Screen;