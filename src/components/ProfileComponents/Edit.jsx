import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Row, Col } from "antd";
import { updateProfile, checkUsernameAvailability } from "../../service/profileService";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Edit = ({ initialFormData, onSave, profileImg }) => {
  const [form] = Form.useForm();
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null);
  const [previewImage, setPreviewImage] = useState(profileImg || null);
  const [fileList, setFileList] = useState([]);

  /** Handle Username Check */
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

  /** Handle Image Upload */
  const handleImageUpload = ({ file }) => {
    console.log("Uploaded file:", file);
    
    const imageFile = file.originFileObj || file; // Ensure we're using a valid file object
    
    if (!imageFile || !(imageFile instanceof Blob)) {
      console.error("Invalid file object:", imageFile);
      message.error("Invalid file format.");
      return;
    }
  
    setFileList([imageFile]); // Store only the latest file
  
    // Create preview image
    const reader = new FileReader();
    reader.onload = (e) => setPreviewImage(e.target.result);
    reader.readAsDataURL(imageFile);
  };
  

  /** Handle Form Submission */
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      formData.append("bio", values.bio);
      formData.append("header", values.header);
      formData.append("userName", values.userName);
      formData.append(
        "socialLinks",
        JSON.stringify({
          snapchat: values.snapchat,
          linkedin: values.linkedin,
          twitter: values.twitter,
          instagram: values.instagram,
        })
      );

      // Attach Profile Image
      if (fileList.length > 0) {
        formData.append("profileImg", fileList[0]);
      }

      console.log("Submitting Data:", values);
      console.log("File List:", fileList[0]);
      
      const updatedProfile = await updateProfile(formData);
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
              showUploadList={false}
              beforeUpload={() => false} // Prevent automatic upload
              onChange={handleImageUpload}
            >
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={previewImage || "https://via.placeholder.com/150"}
                  alt="Profile Preview"
                  style={{
                    borderRadius: "50%",
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    border: "4px solid #d9d9d9",
                  }}
                />
                <Button
                  type="link"
                  icon={<PlusOutlined />}
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    backgroundColor: "#1890ff",
                    color: "#fff",
                    borderRadius: "50%",
                    padding: "8px",
                    fontSize: "16px",
                  }}
                />
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

          {/* Header */}
          <Col span={24}>
            <Form.Item
              label="Header"
              name="header"
              rules={[{ required: true, message: "Please enter a header" }]}
            >
              <TextArea placeholder="Enter Header" />
            </Form.Item>
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
