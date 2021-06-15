import {  Button, Space, message, InputNumber,Card,Col,Row,Table } from "antd"
import React,{ useState,useEffect,useRef } from "react";
import { getAllEntries } from "../dbHandler";
import  ReactToPrint  from "react-to-print"
import { PrinterOutlined } from "@ant-design/icons"

const ComponentToPrint = React.forwardRef((props, ref) => {
return <div className="printCard" ref={ref} style={{ display: "flex", justifyContent: "center" }}>
        <Card bordered style={{ width:"90%",marginTop: "10px"}}>
            <Row style={{ justifyContent: "center" }}>
                RECORD OF  INSPECTION OF HYDROSTATIC STRETCH TESTING OF CYLINDERS
            </Row>
            <Row> <br /></Row>
            <Row>
                DATE OF INSPECTION
            </Row>
            <Row> <br /></Row>
            <Row>
                <Col span={6}>PARTY NAME:</Col>
                <Col span={6}>TYPE OF GAS</Col>
                <Col span={6}>WORKING PRESSURE</Col>
                <Col span={6}>NO. OF CYLINDERS TESTED</Col>
            </Row>
            <Row> <br /></Row>
            <Table
                columns={props.columns}
                dataSource={props.data}
            pagination={false}
            >
            </Table>
        </Card>
    </div>
})



const Report = ()=>{

    const pageStyle = `
@media print {
  .ant-table-pagination.ant-pagination{
      display :none
  }
 

.ant-card-bordered{
    width: fit-content!important;
}
.ant-table table{
     overflow-x: auto!important;
}
.printCard {transform: scale(.5);

}
}`

const componentRef = useRef();
const [from,setFrom] = useState(1)
const [to,setTo] = useState(100)
    function onChange(value,type) {
        type==="f"?setFrom(value):setTo(value)
       
    }
 const onButtonClick = ()=>{
     if(from > to)
     message.error("From should be less than to")
     else
     getAllEntries(from, to).then(entries => {
         let modified = entries.map((entry, index) => {
             entry.key = index
             entry.slNo = index + 1
             return entry
         })
         console.log(modified);
         setData(modified)
     })
    }
const [data,setData] = useState()
useEffect(()=>{
    getAllEntries(0,101).then(entries => {
        let modified = entries.map((entry, index) => {
            entry.key = index
            entry.slNo = index+1
            return entry
        })
        console.log(modified);
        setData(modified)
    })
},[])
 
  
    const columns = [
        {
            title: "Sl No.",
            dataIndex: "slNo",
            key: "Sl No",
            align: "center",
        },
        
        {
            title: "Cylinder Number",
            dataIndex: "Cylinder",
            key: "Cylinder Number",
            align: "center",
        },
        {
            title: "Specification/ Year of Manufacture",
            dataIndex: "Spfno",
            key: "Specification",
            align: "center",
        },
        {
            title: "MFR's Cylinder Number",
            dataIndex: "Cylinder",
            key: "MFR's Cylinder Number",
            align: "center",
        },
        {
            title: "Cylinder Capacity",
            dataIndex: "CylCap",
            key: "Cylinder Capacity",
            align: "center",

        },
        {
            title: "Original Weight Kg",
            dataIndex: "OrgWg",
            key: "id",
            align: "center",

        },
        {
            title: "Current Weight Kg",
            dataIndex: "CrtWg",
            key: "Current Weight",
            align: "center",

        },
        {
            title: "Weigh Loss %",
            dataIndex: "Operation",
            key: "id",
            align: "center",

        },
        {
            title: "Water Capacity Ltrs",
            dataIndex: "Cylwatercap",
            key: "Water Capacity ",
            align: "center",

        },
        {
            title: "Test Pressure Kg/ Cm", //edit
            dataIndex: "TestPrs",
            key: "Test Pressure",
            align: "center",

        },
        {
            title: "Temporary Expansion of water in CC",
            dataIndex: "Operation",
            key: "id",
            align: "center",

        },

        {
            title: "Permanent Expansion of water in CC",
            dataIndex: "Operation",
            key: "id",
            align: "center",

        },
        {
            title: "Ratio of Perm to Temp Exp. ", //edit
            dataIndex: "Operation",
            key: "id",
            align: "center",

        },
        {
            title: "Inspection Results",
            dataIndex: "Operation",
            key: "id",
            align: "center",

        },
        {
            title: "Last Year",
            dataIndex: "LastTstDate",
            key: "Last Year",
            align: "center",

        },
    ];

    return <>
       
        <Row>
        <Col span={16}>
            <Space >
        <span> From</span>
            <InputNumber size="small" value={from} onChange={(val)=>{onChange(val,"f")}} />
            <span> To</span>
            <InputNumber size="small" value={to} onChange={(val) => { onChange(val, "t") }}/>
            <Button type="primary" onClick={onButtonClick}>  Generate Report </Button>
            </Space>
            </Col>
        <Col span={8} style={{justifyContent:"flex-end"}}>
            <ReactToPrint
              
                pageStyle={pageStyle}
                    trigger={() => <Button type="primary"  >Print Report <PrinterOutlined /></Button>}
                content={() => componentRef.current}
                    
           />
        </Col>
        
        </Row>
        <ComponentToPrint ref={componentRef} data={data} columns={columns}/>
        


            
    </>
  
}

export default Report
