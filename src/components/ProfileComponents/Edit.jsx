import React, { useState } from "react";
import { Form, Input, Button, Row, Col, message } from "antd";
import { checkUsernameAvailability, updateProfile } from "../../services/profileService";

const { TextArea } = Input;

const Edit = ({ initialFormData, onSave }) => {
  const [form] = Form.useForm();
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);

  const handleCheckUsername = async () => {
    const username = form.getFieldValue("userName");
    if (!username) {
      message.error("Please enter a username to check.");
      return;
    }

    try {
      setIsChecking(true);
      const data = await checkUsernameAvailability(username);
      if (data.isAvailable) {
        message.success("Username is available!");
        setIsAvailable(true);
      } else {
        message.error("Username is already taken.");
        setIsAvailable(false);
      }
    } catch (error) {
      message.error("Failed to check username availability. Try again later.");
    } finally {
      setIsChecking(false);
    }
  };

  const handleSubmit = async (values) => {
    try {
      const profileData = {
        bio: values.bio,
        socialLinks: {
          snapchat: values.snapchat,
          linkedin: values.linkedin,
          twitter: values.twitter,
          instagram: values.instagram,
        },
        userName: values.userName,
      };
      const updatedProfile = await updateProfile(profileData);
      onSave(updatedProfile.profile);
      message.success("Profile updated successfully!");
    } catch (error) {
      message.error("Failed to update profile. Try again later.");
    }
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialFormData}
        onFinish={handleSubmit}
        style={{
          background: "#fff",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="User Name"
              name="userName"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input
                placeholder="Enter username"
                suffix={
                  <Button type="link" onClick={handleCheckUsername} loading={isChecking}>
                    Check Availability
                  </Button>
                }
              />
            </Form.Item>
            {isAvailable === true && <p style={{ color: "green" }}>Username is available!</p>}
            {isAvailable === false && <p style={{ color: "red" }}>Username is already taken.</p>}
          </Col>

          <Col span={24}>
            <Form.Item
              label="Bio"
              name="bio"
              rules={[{ required: true, message: "Please input your bio!" }]}
            >
              <TextArea placeholder="Enter bio" rows={4} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Snapchat" name="snapchat">
              <Input placeholder="Enter Snapchat username" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="LinkedIn" name="linkedin">
              <Input placeholder="Enter LinkedIn profile link" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Twitter" name="twitter">
              <Input placeholder="Enter Twitter handle" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Instagram" name="instagram">
              <Input placeholder="Enter Instagram handle" />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
