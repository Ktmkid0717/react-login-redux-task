import React from "react";
import { Table } from "antd";

const SlotListing = (props) => {
  console.log(props.dataSource);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      // render: (text) => <a>{text}</a>,
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
