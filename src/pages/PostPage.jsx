import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

import SubmitButton from "../components/buttons/CTA/CallToAction";

import {
  Alert,
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
  font-size: 24px;
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

const DescriptionText = styled.span`
  font-weight: 500;
  font-size: 11px;
  margin: 0px;
  padding: 0px;
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
  state = {
    submitted: undefined
  };

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
      if (err) this.setState({ submitted: false });
      else {
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

        // http call
        // get response
        console.log(finalResults);

        this.props.form.resetFields();
        this.setState({ submitted: true });
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    return (
      <Container>
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
                })(<Input size="large" placeholder="Software Developer" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol lg={4}>
              <Badge dot style={{ marginRight: 8 }}>
                <FormTitle>Main Language</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("main-language", {
                  rules: [{ required: true, message: "Please select the main language!" }]
                })(
                  <Select size="large" placeholder="Golang">
                    <Option value="react">React</Option>
                    <Option value="golang">Golang</Option>
                  </Select>
                )}
              </FormItem>
            </StyledCol>
            <StyledCol lg={4}>
              <Badge dot>
                <FormTitle>Optional Languages</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("optional-language", {
                  rules: [{ required: true, message: "Please select optional languages!" }]
                })(
                  <Select mode="multiple" size="large" placeholder="Node.js, React">
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
                    placeholder="800"
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
            <StyledCol md={6} lg={4}>
              <Badge dot>
                <FormTitle>Company Name</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("company-name", {
                  rules: [{ required: true, message: "Please input your companies name!" }]
                })(<Input size="large" placeholder="Company" />)}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={6} lg={4}>
              <Badge dot>
                <FormTitle>Company Email</FormTitle>
              </Badge>
              <FormItem hasFeedback>
                {getFieldDecorator("company-email", {
                  rules: [{ required: true, message: "Please input your companies email!" }]
                })(<Input size="large" placeholder="HR@company.com" />)}
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
                  rules: [{ required: true, message: "Don't be shy to tell about yourself!" }]
                })(
                  <TextArea
                    placeholder="A fast growing company who is taking over the Fintech industry..."
                    autosize={{ minRows: 6 }}
                    size="large"
                  />
                )}
              </FormItem>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol md={4}>
              <FormTitle>Facebook</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("facebook", {
                  rules: [{ required: false }]
                })(<Input size="large" placeholder="https://www.facebook.com/company" />)}
              </FormItem>
            </StyledCol>
            <StyledCol md={4}>
              <FormTitle>Instagram</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("instagram", {
                  rules: [{ required: false }]
                })(<Input size="large" placeholder="https://www.instagram/@company" />)}
              </FormItem>
            </StyledCol>
            <StyledCol md={4}>
              <FormTitle>Twitter</FormTitle>
              <FormItem hasFeedback>
                {getFieldDecorator("twitter", {
                  rules: [{ required: false }]
                })(<Input size="large" placeholder="https://www.twitter.com/company" />)}
              </FormItem>
            </StyledCol>
          </Row>
          {this.state.submitted == true ? (
            <Alert
              message="Success Tips"
              description="Your job posting was succesfully submitted!"
              type="success"
              showIcon
              style={{ margin: "20px 0" }}
            />
          ) : null}
          {this.state.submitted == false ? (
            <Alert
              message="Error"
              description="Please double check all the errors!"
              type="error"
              showIcon
              style={{ margin: "20px 0" }}
            />
          ) : null}

          <SubmitButton onClick={this.handleSubmit} title="Submit" htmlType="submit" />
        </Form>
      </Container>
    );
  }
}

export default Form.create()(PostPage);
