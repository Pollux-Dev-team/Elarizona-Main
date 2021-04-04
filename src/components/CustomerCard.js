import React from "react";
import Card from "./Card";
import { StaticImage } from "gatsby-plugin-image";

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 bg-white bg-opacity-75">
    <p className="text-xl font-semibold">{customer.title}</p>
    <p className="mt-6">{customer.content}</p>
    <div className="flex items-center mt-8">
      <StaticImage
        src="../images/panel1.png"
        alt={customer.customerName}
        placeholder="blurred"
        layout="fixed"
        width={100}
        className="w-12 h-12 mr-4 rounded-full"
      />
      <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div>
    </div>
  </Card>
);

export default CustomerCard;
