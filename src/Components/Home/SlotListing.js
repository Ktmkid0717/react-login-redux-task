import React from "react";
import { Space, Table, Tag } from "antd";

const SlotListing = (props) => {
  console.log(props.dataSource);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
      // responsive: ["sm"],
    },
    {
      title: "DoctorName",
      dataIndex: "doctorName",
      key: "doctorName",
      // responsive: ["sm"],
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
      // responsive: ["sm"],
    },
    {
      title: "organisation",
      dataIndex: "organisation",
      key: "organisation",
      // responsive: ["sm"],
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      // responsive: ["sm"],
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      // responsive: ["sm"],
    },
    {
      title: "Fee",
      dataIndex: "fee",
      key: "fee",
      // responsive: ["sm"],
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <>
      <Table
        pagination={false}
        columns={columns}
        dataSource={props.dataSource}
        scroll={{ x: true }}
      />
    </>
  );
};

export default SlotListing;
