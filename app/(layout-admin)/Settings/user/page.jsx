"use client";

// import Table from "@/app/components/Admin/TableAdmin";
import { Button, message, Modal, Popover, Tooltip, Popconfirm } from "antd";
import { Icon } from "@iconify/react";
import { Space, Table, Tag } from "antd";
import { Form, Input, Select, Row, Col } from "antd";
import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";

export default function Userpage() {
  const getData = () => {};

  const { Search } = Input;

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    form.setFieldsValue({
      [name]: value,
    });
  };

  const handleSelect = (value, name) => {
    form.setFieldValue(name, value);
  };

  const handleCancel = () => {
    if (editData,form) {
      setEditData(null)
      form.resetFields(["id", "name", "email", "age"]);
    }
    setModal(false);
  };

  const [modal, setModal] = useState(false);

  // const selectOptions = ["chair", "furniture", "table", "mirror", "set"].map(
  //   (el) => ({
  //     label: `${el[0].toUpperCase()}${el.slice(1)}`,
  //     value: el,
  //   })
  // );

  const handleDelete = async (id) => {
    // try {
    //   const data = await fetch(`/api/product/${id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const p = await data.json();

    //   if (p.status == 200) {
    //     // messageApi.success("Success change product status");
    //     getData();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // messageApi.error("Failed change product status");
    // }
  };


  const handleStatus = async (id, status) => {
    // try {
    //   const data = await fetch(`/api/product/${id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       status: !status,
    //     }),
    //   });
    //   const p = await data.json();

    //   if (p.status == 200) {
    //     // messageApi.success("Success change product status");
    //     getData();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // messageApi.error("Failed change product status");
    // }
  };

  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(false);

  const handleEdit = async (record) => {
    // setEditData(record);
    // setModal(true);
    // const detailData = await fetch(`/api/product/${record.id}`);
  };

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    // try {
    //   setLoadingSubmit(true);
    //   console.log(values);
    //   const resp = await fetch(`/api/product`, {
    //     method: editData ? "PUT" : "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(
    //       editData
    //         ? {
    //             ...values,
    //             id: editData.id,
    //           }
    //         : values
    //     ),
    //   });
    //   console.log(resp);
    //   if (resp.status == 200) {
    //     getData();
    //     handleCancel();
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoadingSubmit(false);
    // }
  };

  const rules = {
    name: [
      {
        required: true,
        message: "please input your name!",
      },
    ],
    email: [
      {
        required: true,
        message: "please input your email!",
      },
    ],
    age: [
      {
        required: true,
        message: "please input your age!",
      },
    ],
  };

  const srcdata = [
    {
      key: '1',
      name: 'Mike',
      email: 'Anom Wardoyo',
      age: 32,
      active: true
    },
    {
      key: '2',
      name: 'John',
      email: 'Restu Anom wardoyo',
      age: 42,
      active: false
    },
  ];

  const columns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="!text-black">{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => <a className="!text-black">{email}@gmail.com</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active) => (
        <>
          <Tag
            className={
              active
                ? "!bg-secondary !font-bold !text-white !rounded-xl !py-1"
                : "!bg-error !font-bold !text-white !rounded-xl !py-1"
            }
            key={active}
          >
            {active ? "Active" : "Not Active"}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id, record) => (
        // <Popover
        //   content={(record)}
        //   title={record.name}
        //   id={id}
        //   placement="right"
        // >
          <Button type="primary" className="!bg-lightbackground">
            <Icon
              icon="bi:three-dots-vertical"
              className="text-md text-black"
            />
          </Button>
        // </Popover>
      ),
    },
  ];
  return (
    <>
    <div>
        <div className="pb-4 flex">
          <p className="!bg-primaryLight py-1 px-8 text-lg font-semibold rounded-xl !text-primaryAccent">
            User
          </p>
        </div>
        <div className="bg-white pt-1 px-2 rounded-xl">
          <>
            <div className="flex justify-between items-center">
              <div>
                <Search placeholder="Search" />
              </div>
              <Button
                type="primary"
                icon={<Icon icon="mdi:plus" />}
                className="!my-2 !bg-primary"
                onClick={() => setModal(true)}
              >
                User
              </Button>
            </div>
            <Modal
              open={modal}
              footer={null}
              destroyOnClose
              onClose={() => {}}
              onCancel={() => {}}
              closeIcon={null}
            >
              <Form
                onFinish={onFinish}
                form={form}
                labelWrap
                requiredMark
                className="flex flex-col "
                initialValues={editData ? editData : null}
              >
                <p className="font-bold text-2xl text-center pb-6">
                  Add Product
                </p>
                <div className="!w-full flex flex-col gap-y-3">
                  <Row align={"middle"} gutter={[8, 8]}>
                    <Col span={24}>
                      <Form.Item
                        name={"name"}
                        label={"Name"}
                        rules={rules.name}
                      >
                        <Input
                          placeholder="Name"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row align={"middle"} gutter={[8, 8]}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name={"price"}
                        label={"Email"}
                        rules={rules.email}
                      >
                        <Input
                          type="email"
                          placeholder="Email"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name={"age"}
                        label={"Age"}
                        rules={rules.age}
                      >
                        <Input
                          type="number"
                          placeholder="Age"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  {/* <Row align={"middle"} gutter={[8, 8]}>
                    <Col span={24}>
                      <Form.Item
                        name={"category"}
                        label={"Category"}
                        rules={rules.category}
                      >
                        <Select
                          options={selectOptions}
                          onChange={(value) => {
                            handleSelect(value, "Category");
                          }}
                          mode="multiple"
                          placeholder="Product Category"
                        />
                      </Form.Item>
                    </Col>
                  </Row> */}
                  <div className="flex justify-between">
                    <Button
                      className="!bg-transparent !text-red-600 !border-transparent"
                      // htmlType="submit"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="!bg-primary !text-white"
                      htmlType="submit"
                      loading={loadingSubmit}
                      // onClick={()=> onFinish(values, "PUT")}
                      onClick={onFinish}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            </Modal>
          </>
      <Table columns={columns} dataSource={srcdata} />
        </div>
      </div>
    </>
  );
}
