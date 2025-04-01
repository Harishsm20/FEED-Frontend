import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Row, Col } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { createBlog } from "../../service/blogService";

const { TextArea } = Input;

const CreatePost = ({ onPostCreated }) => {
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState(null);
  const [fileList, setFileList] = useState([]);

  /** Handle Image Upload */
  const handleImageUpload = ({ file }) => {
    const imageFile = file.originFileObj || file;
    if (!imageFile || !(imageFile instanceof Blob)) {
      message.error("Invalid file format.");
      return;
    }

    setFileList([imageFile]);

    // Create preview image
    const reader = new FileReader();
    reader.onload = (e) => setPreviewImage(e.target.result);
    reader.readAsDataURL(imageFile);
  };

  /** Handle Form Submission */
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("tags", values.tags);
      if (fileList.length > 0) {
        formData.append("headImage", fileList[0]);
      }

      const createdPost = await createBlog(formData);
      message.success("Post created successfully!");
      onPostCreated(createdPost);
      form.resetFields();
      setPreviewImage(null);
      setFileList([]);
    } catch (error) {
      message.error("Failed to create post. Try again later.");
    }
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{
          background: "#fff",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <Row gutter={[16, 16]}>
          {/* Image Preview Box */}
          <Col span={24} className="text-center">
            <div
              style={{
                width: "400px",
                height: "250px",
                borderRadius: "8px",
                border: "2px dashed #d9d9d9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Post Preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <p style={{ color: "#999", fontSize: "16px", textAlign: "center" }}>
                  Upload an image or <br /> Post your FEED
                </p>
              )}
            </div>
          </Col>

          {/* Image Upload Button */}
          <Col span={24} className="text-center">
            <Upload
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageUpload}
            >
              <Button icon={<UploadOutlined />} type="dashed">
                Upload Image
              </Button>
            </Upload>
          </Col>

          {/* Post Title */}
          <Col span={24}>
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please enter a title!" }]}
            >
              <Input placeholder="Enter post title" />
            </Form.Item>
          </Col>

          {/* Post Description */}
          <Col span={24}>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Please enter a description!" }]}
            >
              <TextArea placeholder="Write something about your post..." rows={4} />
            </Form.Item>
          </Col>

          {/* Tags */}
          <Col span={24}>
            <Form.Item label="Tags" name="tags">
              <Input placeholder="Enter tags separated by commas" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
          Create Post
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
