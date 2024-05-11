
const recentOrderData = [
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
  {
    customer_name: "Abdul",
    hospital_name: "Hilltop Hospital",
    address: "Wellness Road",
    contact_no: "0219453567325 ",
    customer_detail: "View Full Detail",
  },
];

export default function Table() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 flex-1 mx-11 my-4">
      <div>
        <table className="w-full text-xl text-[#1D242E]">
          <thead>
            <tr className="border">
              <th className="font-medium py-4">Username</th>
              <th className="font-medium">Hostel Name</th>
              <th className="font-medium">Address</th>
              <th className="font-medium">Contact No</th>
              <th className="font-medium">Plan</th>
            </tr>
          </thead>
          <tbody className="font-normal text-lg">
            {recentOrderData.map((order) => (
              <tr className="border" key={order.id}>
                <td className="py-4 px-8">{order.customer_name}</td>
                <td>{order.hospital_name}</td>
                <td>{order.address}</td>
                <td>{order.contact_no}</td>
                <td>{order.customer_detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
