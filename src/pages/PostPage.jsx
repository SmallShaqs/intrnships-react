import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

import SubmitButton from "../components/buttons/CTA/CallToAction";

import {
  Form,
  Badge,
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

const NAMES = {
  0: "jobActivities",
  1: "techRequirements",
  2: "personalRequirements",
  3: "weOffer"
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
          <FormItem label="" required={false} key={NAMES[distincID] + k}>
            {getFieldDecorator(`${NAMES[distincID]}[${k}]`, {
              validateTrigger: ["onChange", "onBlur"],
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: "Please add information or delete this field."
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
      // if (!err) {
      console.log("Received values of form: ", values);
      console.log(values);

      const results = {
        weOffer: [],
        personalRequirements: [],
        techRequirements: [],
        jobActivities: [],
        ...values
      };

      const finalResults = {
        ...results,
        weOffer: results.weOffer.filter(String),
        personalRequirements: results.personalRequirements.filter(String),
        techRequirements: results.techRequirements.filter(String),
        jobActivities: results.jobActivities.filter(String)
      };

      console.log(finalResults);
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    return (
      <div>
        <Form>
          <Title>Job Information</Title>
          <Row>
            <StyledCol md={4}>
              <Badge dot>
                <FormTitle>Position</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("position", {
                  rules: [{ required: true, message: "Please input the position!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol lg={4}>
              <Badge dot>
                <FormTitle>Main Language</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("main-language", {
                  rules: [{ required: true, message: "Please select the main language!" }]
                })(
                  <Select size="large">
                    <Option value="react">React</Option>
                    <Option value="golang">Golang</Option>
                  </Select>
                )}
              </FormItem>
            </StyledCol>
            <StyledCol lg={4}>
              <Badge dot>
                <FormTitle>Optional Language</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("optional-language", {
                  rules: [{ required: true, message: "Please select optional languages!" }]
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
            <StyledCol md={4}>
              <Badge dot>
                <FormTitle>Salary</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("salary", {
                  rules: [{ required: true, message: "Please input the salary!" }]
                })(
                  <InputNumber
                    initialValue={0}
                    formatter={value => `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    parser={value => value.replace(/\€\s?|(,*)/g, "")}
                    size="large"
                    style={{ width: 150 }}
                  />
                )}
              </FormItem>
            </StyledCol>
          </Row>
          <Title>Company Information</Title>
          <Row>
            <StyledCol md={4}>
              <Badge dot>
                <FormTitle>Company Name</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("company-name", {
                  rules: [{ required: true, message: "Please input your companies name!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={4}>
              <Badge dot>
                <FormTitle>Company Email</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("company-email", {
                  rules: [{ required: true, message: "Please input your companies email!" }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={8}>
              <Badge dot>
                <FormTitle>About Us</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("about-us", {
                  rules: [{ required: true, message: "Please tell more about you :)" }]
                })(<TextArea autosize={{ minRows: 6 }} size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol>
              <FormTitle>Facebook</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("facebook", {
                  rules: [{ required: false }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
            <StyledCol>
              <FormTitle>Instagram</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("instagram", {
                  rules: [{ required: false }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
            <StyledCol>
              <FormTitle>Twitter</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("twitter", {
                  rules: [{ required: false }]
                })(<Input size="large" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <SubmitButton onClick={this.handleSubmit} title="Submit" htmlType="submit" />
        </Form>
      </div>
    );
  }
}

export default Form.create()(PostPage);
