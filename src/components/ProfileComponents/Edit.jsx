import React, { useState } from "react";
import { Form, Input, Button, Row, Col, message, Upload } from "antd";
import { checkUsernameAvailability, updateProfile } from "../../service/profileService";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Edit = ({ initialFormData, onSave }) => {
  const [form] = Form.useForm();
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [previewImage, setPreviewImage] = useState(initialFormData.profileImg || null); // Set initial profile image

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

  const handleImageChange = (info) => {
    const file = info.file.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result); // Update preview with the selected image
      reader.readAsDataURL(file);
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
        profileImg: previewImage, // Include updated profile image
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
          {/* Profile Image Section */}
          <Col span={24} className="text-center">
            <Upload
              accept="image/*"
              showUploadList={false}
              beforeUpload={() => false} // Prevent automatic upload
              onChange={handleImageChange}
            >
              <div className="relative">
                <img
                  src={previewImage || "https://via.placeholder.com/150"} // Display current or placeholder image
                  alt="Profile Preview"
                  className="rounded-full w-40 h-40 border-4 border-gray-300 object-cover"
                />
                <Button
                  type="link"
                  icon={<PlusOutlined />}
                  className="absolute bottom-2 right-2 text-white bg-blue-500 p-2 rounded-full"
                >
                  Change
                </Button>
              </div>
            </Upload>
          </Col>

          {/* Username */}
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

          {/* Bio */}
          <Col span={24}>
            <Form.Item
              label="Bio"
              name="bio"
              rules={[{ required: true, message: "Please input your bio!" }]}
            >
              <TextArea placeholder="Enter bio" rows={4} />
            </Form.Item>
          </Col>

          {/* Social Links */}
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
