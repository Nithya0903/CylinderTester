import { Form, Row, Col, Input, DatePicker,Card,Space, Button} from "antd"
import { useEffect } from "react"

const FormComponent = (props)=>{
    const [formi] = Form.useForm();
    useEffect(() => { formi.resetFields() }, [props.initialValues, formi])
    useEffect(() => { }, [props.initialValues])
    return <>
        <Form size="small" labelCol={{ span: 8 }} wrapperCol={{ span: 12 }} form={formi}  >
        <Row>
            <Col span={12}>

                <Form.Item label="Reference Number">
                   {props.initialValues.Id}
                </Form.Item>


               <Form.Item name="tubeSize" label="Tube Size" initialValue={props.initialValues.TubeSize}>
                    <Input />
                </Form.Item>
               <Form.Item name="date" label="Date" >
                    <DatePicker format="DD/MM/YY" />
                </Form.Item>
               <Form.Item name="party" label="Party Name" initialValue={props.initialValues.PartyName}>
                    <Input />
                </Form.Item>
               <Form.Item name="cylinderNo" label="Cylider No" initialValue={props.initialValues.Cylinder}>
                    <Input />
                </Form.Item>
               <Form.Item name="make" label="Make" initialValue={props.initialValues.Make}>
                    <Input />
                </Form.Item>
               <Form.Item name="specNo" label="Specification No" initialValue={props.initialValues.Spfno}>
                    <Input />
                </Form.Item>
               <Form.Item name="cylinderCapacity" label="Cylinder Capacity" initialValue={props.initialValues.CylCap}>
                    <Input />
                </Form.Item>
               <Form.Item name="originalWeight" label="Original Weight" initialValue={props.initialValues.OrgWg}>
                    <Input />
                </Form.Item>
               <Form.Item name="currWeight" label="Current Weight" initialValue={props.initialValues.CrtWg}>
                    <Input />
                </Form.Item>

            </Col>

            <Col span={12}>
               <Form.Item name="waterWeight" label="With Water Weight" initialValue={props.initialValues.wtrWg}>
                    <Input />
                </Form.Item>
               <Form.Item name="testPressure" label="Test Pressure" initialValue={props.initialValues.TestPrs}>
                    <Input />
                </Form.Item>
               <Form.Item name="lastTestDate" label="Last test Date" >
                    <DatePicker format="DD/MM/YY" />
                </Form.Item>
               <Form.Item name="C1" label="C1" initialValue={props.initialValues.C1}>
                    <Input />
                </Form.Item>
               <Form.Item name="C2" label="C2" initialValue={props.initialValues.C2}>
                    <Input />
                </Form.Item>
               <Form.Item name="C3" label="C3" initialValue={props.initialValues.C3}>
                    <Input />
                </Form.Item>
               <Form.Item name="cylWaterCapacity" label="Cyl. Water Capacity" initialValue={props.initialValues.Cylwatercap}>
                    <Input />
                </Form.Item>
               {/* <Form.Item name="gas" label="Working Gas" >
                    <Input />
                </Form.Item> */}
               <Form.Item name="gasCapacity" label="Capacity gas in c. mts" initialValue={props.initialValues.capgas}>
                    <Input />
                </Form.Item>


            </Col>

        </Row>



    </Form>
      <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>

            <Button key="reset" onClick={() => formi.resetFields()}> Reset</Button>
            <Button key="save" onClick={()=>{props.submitHandler(formi)}}> Save</Button>
            <Button key="delete" onClick={() => { props.DeleteHandler() }} > Delete</Button>

        </Space>
       </>
}


export default FormComponent