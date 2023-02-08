import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./profitandloss.scss";

import  {service}  from './profitandloss.service';


class Profitandloss extends React.Component<any, any> {
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
            <h2 className="screen-align">profitandloss</h2>
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
    <div id="template-i9k9h" className="gjs-cell">
        <div id="template-i3gvo" className="gjs-row">
            <div id="template-if09g" className="gjs-cell">
                <div id="template-itl8h">Profit and Loss</div>
            </div>
            <div id="template-ij43m" className="gjs-cell">
                <button id="template-i93yw" className="button btn btn-primary ">export</button>
                <button id="template-in2gc" className="button btn btn-primary ">
                    <</button>
                        <input id="template-ivczj" className="input form-control " />
            </div>
        </div>
        <div id="template-i4b8d" className="gjs-row">
            <div id="template-iyimn" className="gjs-cell">
                <div id="template-is4nr" className="gjs-row">
                    <div id="template-ikj4d" className="gjs-cell">
                        <div id="template-int79">Based On</div>
                        <select id="template-ijvvh" className="select ">
                            <option value="" id="template-ifn6t">Until Date</option>
                            <option id="template-io3rj">Option 1</option>
                        </select>
                    </div>
                    <div id="template-iv2n2j" className="gjs-cell">
                        <div id="template-i5guwp">Prioritcity
                            <br id="template-i45th9"></br>
                        </div>
                        <select id="template-ijph1k" className="select ">
                            <option value="" id="template-i7ywnd">Until Date</option>
                            <option id="template-ip1bhi">Option 1</option>
                        </select>
                    </div>
                    <div id="template-ijbwlj" className="gjs-cell">
                        <div id="template-iph26j">To Date
                            <br id="template-iyk9sr"></br>
                        </div>
                        <select id="template-ikr8ds" className="select ">
                            <option value="" id="template-i0i1oz">Until Date</option>
                            <option id="template-iavljp">Option 1</option>
                        </select>
                    </div>
                    <div id="template-imzadw" className="gjs-cell">
                        <div id="template-iym4mf">Number of Months
                            <br id="template-iedvp8"></br>
                        </div>
                        <select id="template-i24v8z" className="select ">
                            <option value="" id="template-i9a9yx">Until Date</option>
                            <option id="template-ia9ysw">Option 1</option>
                        </select>
                    </div>
                    <div id="template-ifc3j" className="gjs-cell">
                        <div id="template-ih76y">Prioritcity
                            <br id="template-ip073"></br>
                        </div>
                        <select id="template-i7362" className="select ">
                            <option value="" id="template-ilzkn">Until Date</option>
                            <option id="template-ij5xj">Option 1</option>
                        </select>
                    </div>
                    <div id="template-ilex16" className="gjs-cell">
                        <input type="checkbox" id="template-id7zgd" className="checkbox form-control "
                        />
                        <div id="template-ip3e7k">consolidate colum</div>
                    </div>
                </div>
                <div id="template-ik0x9e" className="gjs-row">
                    <div id="template-iies3b" className="gjs-cell">
                        <input type="checkbox" id="template-iqy2gh" className="checkbox form-control "
                        />
                        <div id="template-iaxcpq">Hide Group of Amount</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="template-iva7j" className="gjs-row">
            <div id="template-ikc8x" className="gjs-cell">
                <div id="template-i2m44r">Amout
                    <br id="template-i76q61"></br>
                </div>
            </div>
            <div id="template-i82aa9" className="gjs-cell">
                <div id="template-ilde2e">
<span id="template-iijwt5">
Jan 9, 2023</span>

                </div>
            </div>
            <div id="template-ipic6u" className="gjs-cell">
                <div id="template-i6ge29">
<span id="template-it6ykc">
Jan 9, 2023</span>

                </div>
            </div>
            <div id="template-i0jnt5" className="gjs-cell">
                <div id="template-ijia14">
<span id="template-idnwqd">
Dec 9, 2022</span>

                </div>
            </div>
        </div>
        <div id="template-il7ttn" className="gjs-row">
            <div id="template-ihhrkq" className="gjs-cell">
                <div id="template-ilczkt">
<span id="template-iq6951">
Income</span>

                </div>
            </div>
            <div id="template-iyxoqf" className="gjs-cell">
                <div id="template-ief4lc">
<span id="template-ikvwm4">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ifj856" className="gjs-cell">
                <div id="template-ijehwn">
<span id="template-iyno0e">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i85mha" className="gjs-cell">
                <div id="template-i4szdh">
<span id="template-id9k47">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-irl0ml" className="gjs-row">
            <div id="template-iwvprv" className="gjs-cell">
                <div id="template-i9vqrj">
<span id="template-inen0d">
Direct Income</span>

                </div>
            </div>
            <div id="template-i797ae" className="gjs-cell">
                <div id="template-ijlh87">
<span id="template-i18u8k">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ik9vjp" className="gjs-cell">
                <div id="template-ijj0gf">
<span id="template-i4ovuy">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iqye2l" className="gjs-cell">
                <div id="template-ihaq21">
<span id="template-i0l3ju">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i0omeb" className="gjs-row">
            <div id="template-id6x1b" className="gjs-cell">
                <div id="template-imogps">
<span id="template-ip56xl">
Service</span>

                </div>
            </div>
            <div id="template-iivrep" className="gjs-cell">
                <div id="template-i2gyeh">
<span id="template-ip1bbk">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iftvgs" className="gjs-cell">
                <div id="template-i1qhak">
<span id="template-i0l8gi">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ix981l" className="gjs-cell">
                <div id="template-i8zxh8">
<span id="template-ixy7ho">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i228n5" className="gjs-row">
            <div id="template-iwgazj" className="gjs-cell">
                <div id="template-ic2mha">
<span id="template-ieax51">
Sales</span>

                </div>
            </div>
            <div id="template-ilvfqk" className="gjs-cell">
                <div id="template-ifagum">
<span id="template-iw3dao">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i24cqd" className="gjs-cell">
                <div id="template-ibs6aw">
<span id="template-id1zty">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i8y49p" className="gjs-cell">
                <div id="template-ivmnce">
<span id="template-i6xsax">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-ia5dm9" className="gjs-row">
            <div id="template-ipmr7o" className="gjs-cell">
                <div id="template-i3f7q3">
<span id="template-i5nurg">
Total Income (Credit)</span>

                </div>
            </div>
            <div id="template-ie4t7p" className="gjs-cell">
                <div id="template-is3o5l">
<span id="template-iz5q8s">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-igeato" className="gjs-cell">
                <div id="template-ik0bj6">
<span id="template-isq4ca">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i1nlo8" className="gjs-cell">
                <div id="template-ifiihm">
<span id="template-i3kwy2">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-iapuq5" className="gjs-row">
            <div id="template-il2dbd" className="gjs-cell">
                <div id="template-ixjjjj">
<span id="template-ituups">
Expenses</span>

                </div>
            </div>
            <div id="template-iwvovv" className="gjs-cell">
                <div id="template-i91y3u">
<span id="template-iyqxzl">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iyz86z" className="gjs-cell">
                <div id="template-ilfmqj">
<span id="template-iq0qal">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i7bpkt" className="gjs-cell">
                <div id="template-iw79yi">
<span id="template-imkbxr">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-iep08h" className="gjs-row">
            <div id="template-ifeo36" className="gjs-cell">
                <div id="template-iwnbxh">
<span id="template-iunoml">
Indirect Expenses</span>

                </div>
            </div>
            <div id="template-ihr4my" className="gjs-cell">
                <div id="template-i1sswp">
<span id="template-i2o33s">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ilj9qj" className="gjs-cell">
                <div id="template-ijz7tg">
<span id="template-iqplel">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ilr2hh" className="gjs-cell">
                <div id="template-ietajx">
<span id="template-ihcv1d">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i4hekc" className="gjs-row">
            <div id="template-ie243o" className="gjs-cell">
                <div id="template-izr3cx">
<span id="template-ilrodf">
Utility Expenses</span>

                </div>
            </div>
            <div id="template-iwcoix" className="gjs-cell">
                <div id="template-icjtmu">
<span id="template-i8fhrs">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i5tnpk" className="gjs-cell">
                <div id="template-idh8ph">
<span id="template-i8d6gv">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iqj3ek" className="gjs-cell">
                <div id="template-ivw8rh">
<span id="template-i4iwhj">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-iximtd" className="gjs-row">
            <div id="template-if3uso" className="gjs-cell">
                <div id="template-imsbji">
<span id="template-i1ryg2">
Office Rent</span>

                </div>
            </div>
            <div id="template-i8j6tb" className="gjs-cell">
                <div id="template-iwkdl1">
<span id="template-i18xha">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-inxycj" className="gjs-cell">
                <div id="template-im5f3a">
<span id="template-i3nar4">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-im74ap" className="gjs-cell">
                <div id="template-ipiyaw">
<span id="template-i3ef9c">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i7th1i" className="gjs-row">
            <div id="template-ie6zby" className="gjs-cell">
                <div id="template-ix3foc">
<span id="template-iyexwz">
Office Maintenance Expenses</span>

                </div>
            </div>
            <div id="template-icajnk" className="gjs-cell">
                <div id="template-i3bhez">
<span id="template-itwp8a">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i9npvi" className="gjs-cell">
                <div id="template-ikooff">
<span id="template-i1s2ld">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ilwcsz" className="gjs-cell">
                <div id="template-i4uo9h">
<span id="template-iys9pc">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-ih0sg2" className="gjs-row">
            <div id="template-i13mw3" className="gjs-cell">
                <div id="template-ie3o5p">
<span id="template-ivpvs9">
Marketing Expenses</span>

                </div>
            </div>
            <div id="template-iu4lqi" className="gjs-cell">
                <div id="template-i7pqrg">
<span id="template-iy90em">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-idt571" className="gjs-cell">
                <div id="template-ixhpf6">
<span id="template-ih1i4t">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i08h3g" className="gjs-cell">
                <div id="template-i9otkr">
<span id="template-iatisq">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i702vs" className="gjs-row">
            <div id="template-ib3wm5" className="gjs-cell">
                <div id="template-i9ymyz">
<span id="template-id64an">
Direct Expenses</span>

                </div>
            </div>
            <div id="template-ilducj" className="gjs-cell">
                <div id="template-icn6gi">
<span id="template-ip9fih">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-it7oe9" className="gjs-cell">
                <div id="template-ihmzci">
<span id="template-ifv8zq">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-icnpav" className="gjs-cell">
                <div id="template-ieavaa">
<span id="template-itodyb">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-iu74eg" className="gjs-row">
            <div id="template-ihacyq" className="gjs-cell">
                <div id="template-i6hfkv">
<span id="template-i89ko8">
Stock Expenses</span>

                </div>
            </div>
            <div id="template-ikw34q" className="gjs-cell">
                <div id="template-iqdexv">
<span id="template-ihlwy7">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iz8rn2" className="gjs-cell">
                <div id="template-i9x6e8">
<span id="template-idorkg">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iwfl6k" className="gjs-cell">
                <div id="template-id71ej">
<span id="template-i5mc1n">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i5hsri" className="gjs-row">
            <div id="template-ie3wky" className="gjs-cell">
                <div id="template-itq9ef">
<span id="template-imzgue">
Cost of Goods Sold</span>

                </div>
            </div>
            <div id="template-ifx8s8" className="gjs-cell">
                <div id="template-it1d7i">
<span id="template-iod9wt">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-ij6p53" className="gjs-cell">
                <div id="template-i74gn9">
<span id="template-is1rml">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-iidjxw" className="gjs-cell">
                <div id="template-ikkxph">
<span id="template-it819e">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
        <div id="template-i2anab" className="gjs-row">
            <div id="template-i1qdrh" className="gjs-cell">
                <div id="template-ixt7qe">
<span id="template-iagves">
Total Expense (Debit)</span>

                </div>
            </div>
            <div id="template-il5xvb" className="gjs-cell">
                <div id="template-iabn4z">
<span id="template-i8cak7">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-i95nvg" className="gjs-cell">
                <div id="template-iwiwp2">
<span id="template-ifvlx3">
₹ 9,67,228.00</span>

                </div>
            </div>
            <div id="template-izpwej" className="gjs-cell">
                <div id="template-ilkpn6">
<span id="template-ibm0df">
₹ 9,67,228.00</span>

                </div>
            </div>
        </div>
    </div>
</div>
            </>
        );
    };
};

export default Profitandloss;