import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

import JobInformationInputs from "./postPage/JobInformation/JobInformation";
import CompanyInformation from "./postPage/CompanyInformation/CompanyInformation";

import SubmitButton from "../components/buttons/CTA/CallToAction";
import AdvancedInput from "./postPage/AdvancedInput/AdvancedInput";

import {
  Form,
  Select,
  Button,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Upload,
  Icon,
  Rate
} from "antd";
import TextArea from "antd/lib/input/TextArea";

const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const FormItem = Form.Item;

const Title = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 22px;
  color: #000000;
  letter-spacing: 1.8px;

  margin-top: 100px;
  margin-bottom: 60px;
`;

const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

const FormTitle = styled.p`
  color: #000000 !important;
  font-weight: 500 !important;
  font-family: "MaisonNeue-Medium" !important;
  font-size: 16px !important;
  letter-spacing: 1.2px !important;
  text-transform: uppercase;
`;

const CONST = {
  jobActivities: 0,
  techRequirements: 1,
  personalRequirements: 2,
  weOffer: 3
};
let multipleFields = [0, 0, 0, 0];

class PostPage extends React.Component {
  remove = (k, distinctID) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    const newKeys = keys;
    keys[distinctID] = keys[distinctID].filter(key => key !== k);

    form.setFieldsValue({ keys: newKeys });
  };

  add = distinctFormID => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue("keys");

    let lastEl = keys[distinctFormID][keys[distinctFormID].length - 1];
    if (!lastEl) lastEl = 0;

    const nextKeys = keys;
    nextKeys[distinctFormID].push(1 + lastEl);

    form.setFieldsValue({
      keys: nextKeys
    });
  };

  componentDidMount() {
    const { form } = this.props;
    form.setFieldsValue({ keys: [[], [], [], []] });
  }

  getAllInputFields = distincID => {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    getFieldDecorator("keys", { initialValue: [] });
    const keys = getFieldValue("keys");

    let formItems = null;
    if (keys[distincID])
      formItems = keys[distincID].map((k, index) => {
        return (
          <FormItem label="" required={false} key={distincID + k}>
            {getFieldDecorator(`names[${distincID}${k}]`, {
              validateTrigger: ["onChange", "onBlur"],
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: "Please input passenger's name or delete this field."
                }
              ]
            })(<Input size="large" style={{ width: "90%", marginRight: 8 }} />)}
            {keys.length > 1 ? (
              <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                disabled={keys.length === 1}
                onClick={() => this.remove(k, distincID)}
              />
            ) : null}
          </FormItem>
        );
      });
    return formItems;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Title>Job Information</Title>
          <Row>
            <StyledCol md={4}>
              <FormTitle>Position</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("position", {
                  rules: [{ required: true, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol lg={4}>
              <FormTitle>Main Language</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("main-language", {
                  rules: [{ required: true, message: "Please select your country!" }]
                })(
                  <Select size="large">
                    <Option value="react">React</Option>
                    <Option value="golang">Golang</Option>
                  </Select>
                )}
              </FormItem>
            </StyledCol>
            <StyledCol lg={4}>
              <FormTitle>Optional Language</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("optional-language", {
                  rules: [{ required: true, message: "Please select your country!" }]
                })(
                  <Select mode="multiple" size="large">
                    <Option value="node">Node.js</Option>
                    <Option value="golang">Golang</Option>
                  </Select>
                )}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <FormTitle>Job Activities</FormTitle>
              {this.getAllInputFields(CONST.jobActivities)}
              <FormItem>
                <Button
                  type="dashed"
                  onClick={() => this.add(CONST.jobActivities)}
                  style={{ width: "60%" }}
                >
                  <Icon type="plus" /> Add field
                </Button>
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <FormTitle>Tech Requirements</FormTitle>
              {this.getAllInputFields(CONST.techRequirements)}
              <FormItem>
                <Button
                  type="dashed"
                  onClick={() => this.add(CONST.techRequirements)}
                  style={{ width: "60%" }}
                >
                  <Icon type="plus" /> Add field
                </Button>
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <FormTitle>People Requirements</FormTitle>
              {this.getAllInputFields(CONST.personalRequirements)}
              <FormItem>
                <Button
                  type="dashed"
                  onClick={() => this.add(CONST.personalRequirements)}
                  style={{ width: "60%" }}
                >
                  <Icon type="plus" /> Add field
                </Button>
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <FormTitle>We Offer</FormTitle>
              {this.getAllInputFields(CONST.weOffer)}
              <FormItem>
                <Button
                  type="dashed"
                  onClick={() => this.add(CONST.weOffer)}
                  style={{ width: "60%" }}
                >
                  <Icon type="plus" /> Add field
                </Button>
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={2}>
              <FormTitle>Salary</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("salary", {
                  rules: [{ required: true, message: "Please input your username!" }]
                })(<Input size="large" type="number" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Title>Company Information</Title>
          <Row>
            <StyledCol md={4}>
              <FormTitle>Company Name</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("company-name", {
                  rules: [{ required: true, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={4}>
              <FormTitle>Company Email</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("company-email", {
                  rules: [{ required: true, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <FormTitle>About Us</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("facebook", {
                  rules: [{ required: false, message: "Please input your username!" }]
                })(<TextArea size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol>
              <FormTitle>Facebook</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("facebook", {
                  rules: [{ required: false, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
            <StyledCol>
              <FormTitle>Instagram</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("instagram", {
                  rules: [{ required: false, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
            <StyledCol>
              <FormTitle>Twitter</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("twitter", {
                  rules: [{ required: false, message: "Please input your username!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Form.create()(PostPage);
