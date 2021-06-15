import {Card, Button,Space ,Form, Row,Col,Input,DatePicker,message} from "antd"
import { addEntry,getNewRef } from "../dbHandler";
import {  useState,useEffect } from "react";
const Entry = ()=>{
    const [form] = Form.useForm();
   const [ref,setref] = useState()
  
    useEffect(() => {
        getNewRef().then((r) => {
            setref(r)
        })
    }, [])

    const submitHandler =async ()=>{

        form
            .validateFields()
            .then(async (values) => {
                addEntry(Object.values(values)).then(()=>{
                    message.success("Entry " +ref + " Added")
                    getNewRef().then(async (r) => {
                        await setref(r)
                        form.resetFields()
                    })
                })
                
            })
        
    }
    

return <Card style={{marginTop:"20px"}}>

 <Form size="small" labelCol={{ span: 8 }} wrapperCol={{ span: 12 }} form={form}  >
    <Row>
    <Col span={12}>

                <Form.Item label="Reference Number">
                    {ref}
                </Form.Item>
            
                <Form.Item name="tubeSize" label="Tube Size">
                    <Input />
                </Form.Item>
                <Form.Item name="date" label="Date">
                    <DatePicker format="DD/MM/YY"/>
                </Form.Item>
                <Form.Item name="party" label="Party Name">
                    <Input />
                </Form.Item>
                <Form.Item name="cylinderNo" label="Cylider No">
                    <Input />
                </Form.Item>
                <Form.Item name="make" label="Make">
                    <Input />
                </Form.Item>
                <Form.Item name="specNo" label="Specification No">
                    <Input />
                </Form.Item>
                <Form.Item name="cylinderCapacity" label="Cylinder Capacity">
                  <Input />
                </Form.Item>
                <Form.Item name="originalWeight" label="Original Weight">
                    <Input />
                </Form.Item>
                <Form.Item name="currWeight" label="Current Weight">
                    <Input />
                </Form.Item>

    </Col>
    
    <Col span={12}>
                <Form.Item name="waterWeight" label="With Water Weight">
                    <Input />
     </Form.Item>
                <Form.Item name="testPressure" label="Test Pressure">
                    <Input />
                </Form.Item>
                <Form.Item name="lastTestDate" label="Last test Date">
                    <DatePicker format="DD/MM/YY"/>
                </Form.Item>
                <Form.Item name="C1" label="C1">
                    <Input />
                </Form.Item>
                <Form.Item name="C2" label="C2">
                    <Input />
                </Form.Item>
                <Form.Item name="C3" label="C3">
                    <Input />
                </Form.Item>
                <Form.Item name="cylWaterCapacity" label="Cyl. Water Capacity">
                    <Input />
                </Form.Item>
                <Form.Item name="gas" label="Working Gas">
                    <Input />
                </Form.Item>
                  <Form.Item name="gasCapacity" label="Capacity gas in c. mts">
    <Input />
      </Form.Item>
                

    </Col>

    </Row>



    </Form> 
    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
     
        <Button key="reset" onClick={()=>form.resetFields()}> Reset</Button>
        <Button key="save" onClick={submitHandler}> Save</Button>
     

</Space>
  

            
        
</Card>
 


}



export default Entry