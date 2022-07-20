import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import "../../Style/lead_deatail_table.css";

const { Column } = Table;
const data = [
  {
    key: "1",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
  {
    key: "2",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
  {
    key: "3",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
  {
    key: "4",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
  {
    key: "5",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
  {
    key: "6",
    firstName: "Manojith",
    phone: "+91 8634666666",
    email: "manojith@gmail.com",
    dateAdded: "05-01-2022",
    course: "Art and Culture",
    status: "Application Initiated",
  },
];

const Lead_details_table = () => (
  <Table dataSource={data}>
    <Column title="Name" dataIndex="firstName" key="firstName" />
    <Column title="Phone" dataIndex="phone" key="phone" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Lead Added on" dataIndex="dateAdded" key="dateAdded" />
    <Column title="Course" dataIndex="course" key="course" />
    <Column
      title="Referral Status"
      dataIndex="status"
      key="status"
      // render={(status) => {
      //   if (status == 'Application Initiated') {
      //     <Tag color="#7BA8D3">Hello</Tag>;
      //   } else {
      //     <Tag color="#CB9CE2">Hello</Tag>;
      //   }
      // }}
    />
    <Column title="Details" key="action" render={() => <a>View Details</a>} />
  </Table>
);
export default Lead_details_table;