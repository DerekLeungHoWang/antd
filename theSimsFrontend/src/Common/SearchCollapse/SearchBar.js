import React, { useState, useEffect } from 'react';
import intl from 'react-intl-universal';
import classes from './SearchCollapse.less'
import { Form, Input, Button, Radio } from 'antd';
import CustomDatePicker from './CustomDatePicker';
import { UndoOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/en-gb';
import { searchEmployee } from '../../Components/Employee/actions/EmployeeAction';
const SearchBar = (props) => {



    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');

    const { RangePicker } = DatePicker;


    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;

    const onFinish = values => {
        const { currentDept } = props

        const startDate = moment(values.lastModifiedDate ?? [0]._d).format('L')
        const endDate = moment(values.lastModifiedDate ?? [1]._d).format('L')

        values.lastModifiedDate = { startDate, endDate }
        const payload = { values, currentDept }
        props.searchEmployee(payload)


    };

    const handleReset = () => {
        const payload = {
            values: "",
            currentDept: null
        }
        form.resetFields();
        props.searchEmployee(payload)
    }

    useEffect(() => {
        // Update the document title using the browser API

    });

    return (
        <>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onFinish={onFinish}
            >

                <Form.Item name="lastModifiedDate" label={intl.get('lastModifiedDate')}>   
                    <RangePicker />
                </Form.Item>

                <Form.Item name="id" label={intl.get('id')}>
                    <Input placeholder={intl.get('id')} />
                </Form.Item>

                <Form.Item name="employeeName" label={intl.get('employeeName')}>
                    <Input placeholder={intl.get('employeeName')} />

                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button htmlType="submit" type="primary">{intl.get('search')}</Button>
                </Form.Item>

                <Form.Item  {...buttonItemLayout}>
                    <Button onClick={handleReset} type="link" size="large">
                        <UndoOutlined />  {intl.get('reSet')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
const mapStateToProps = (state) => {


    return {
        employeeList: state.EmployeeReducer.employeeList,
        currentDept: state.EmployeeReducer.currentDept
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchEmployee: (payload) => dispatch(searchEmployee(payload))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))
