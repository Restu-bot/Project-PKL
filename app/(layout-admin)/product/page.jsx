"use client";

// import Table from "@/app/components/Admin/TableAdmin";
import { Button, message, Modal, Popover, Tooltip, Popconfirm } from "antd";
import { Icon } from "@iconify/react";
import { Space, Table, Tag } from "antd";
import { Form, Input, Select, Row, Col } from "antd";
import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";

export default function form() {
  const content = (record) => {
    return (
      <>
        <div className="flex flex-col-4 gap-x-4">
          <Tooltip placement="top" title="Status">
            <button
              className="bg-secondary p-2 rounded-full text-white"
              onClick={() => handleStatus(record.id, record.status)}
            >
              <Icon
                icon={record.status ? "gg:toggle-on" : "gg:toggle-off"}
                className="text-3xl"
              />
            </button>
          </Tooltip>
          <Tooltip placement="top" title="Detail">
            <button className="bg-cyan-200 p-2 rounded-full">
              <Icon icon="bx:detail" className="text-3xl text-white" />
            </button>
          </Tooltip>
          <Tooltip placement="top" title="Edit">
            <button
              className="bg-primaryLight p-2 rounded-full"
              onClick={() => handleEdit(record)}
            >
              <Icon icon="mynaui:edit-one" className="text-3xl text-white" />
            </button>
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <Popconfirm
              title={`Are you sure delete this ${record.name}?`}
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
            <button
              className="bg-error p-2 rounded-full"
              onConfirm={() => handleDelete(record.id)}
              onCancel={()=>{}}
            >
              <Icon icon="mynaui:trash-solid" className="text-3xl text-white" />
            </button>
              </Popconfirm>
          </Tooltip>
        </div>
      </>
    );
  };

  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(false);

  const handleEdit = async (record) => {
    setEditData(record);
    setModal(true);
    // const detailData = await fetch(`/api/product/${record.id}`);
  };

  const handleStatus = async (id, status) => {
    try {
      const data = await fetch(`/api/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: !status,
        }),
      });
      const p = await data.json();

      if (p.status == 200) {
        // messageApi.success("Success change product status");
        getData();
      }
    } catch (error) {
      console.log(error);
      // messageApi.error("Failed change product status");
    }
  };

  const handleDelete = async (id) => {
    try {
      const data = await fetch(`/api/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const p = await data.json();

      if (p.status == 200) {
        // messageApi.success("Success change product status");
        getData();
      }
    } catch (error) {
      console.log(error);
      // messageApi.error("Failed change product status");
    }
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="!text-black">{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => (
        <>
          {category.map((category) => {
            let color = category.lenght > 5;
            return (
              <Tag
                color={color}
                key={category}
                className="!bg-primaryLight !text-white"
              >
                {category}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Stock Available",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          <Tag
            className={
              status
                ? "!bg-secondary !font-bold !text-white !rounded-xl !py-1"
                : "!bg-error !font-bold !text-white !rounded-xl !py-1"
            }
            key={status}
          >
            {status ? "For Sale" : "Not Ready"}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (id, record) => (
        <Popover
          content={content(record)}
          title={record.name}
          id={id}
          placement="right"
        >
          <Button type="primary" className="!bg-lightbackground">
            <Icon
              icon="bi:three-dots-vertical"
              className="text-md text-black"
            />
          </Button>
        </Popover>
      ),
    },
  ];

  const [modal, setModal] = useState(false);

  const selectOptions = ["chair", "furniture", "table", "mirror", "set"].map(
    (el) => ({
      label: `${el[0].toUpperCase()}${el.slice(1)}`,
      value: el,
    })
  );

  const [loading, setLoading] = useState(true);
  // const showModal = () => {
  //   setModal(true);
  // };
  // const handleOk = () => {
  //   setModal(false);
  // };
  const handleCancel = () => {
    if (editData,form) {
      setEditData(null)
      form.resetFields(["id", "name", "price", "category", "stock"]);
    }
    setModal(false);
  };
  
  const handleSelect = (value, name) => {
    form.setFieldValue(name, value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    form.setFieldsValue({
      [name]: value,
    });
  };

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setLoadingSubmit(true);
      console.log(values);
      const resp = await fetch(`/api/product`, {
        method: editData ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          editData
            ? {
                ...values,
                id: editData.id,
              }
            : values
        ),
      });
      console.log(resp);
      if (resp.status == 200) {
        getData();
        handleCancel();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  const { Search } = Input;

  const rules = {
    name: [
      {
        required: true,
        message: "please input your name!",
      },
    ],
    price: [
      {
        required: true,
        message: "please input your price!",
      },
    ],
    stock: [
      {
        required: true,
        message: "please input your stock!",
      },
    ],
    category: [
      {
        required: true,
        message: "please input your category!",
      },
    ],
  };

  const getData = async () => {
    const data = await fetch(`/api/product`);
    const p = await data.json();

    console.log(p);

    setData(p.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="pb-4 flex">
          <p className="!bg-primaryLight py-1 px-8 text-lg font-semibold rounded-xl !text-primaryAccent">
            Product
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
                Product
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
                          placeholder="Product Name"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row align={"middle"} gutter={[8, 8]}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name={"price"}
                        label={"Price"}
                        rules={rules.price}
                      >
                        <Input
                          type="number"
                          placeholder="Product Price"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name={"stock"}
                        label={"Stock"}
                        rules={rules.stock}
                      >
                        <Input
                          type="number"
                          placeholder="Product Stock"
                          onChange={handleChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row align={"middle"} gutter={[8, 8]}>
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
                  </Row>
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
          <Table dataSource={data} columns={columns} />
        </div>
      </div>
    </>
  );
}
