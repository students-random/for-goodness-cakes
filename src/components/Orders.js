import React, { useState, useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

const Orders = props => {
	const [orders, setOrders] = useState([]);
	const [updatedOrder, setUpdatedOrder] = useState({});
	const [orderToUpdate, setOrderToUpdate] = useState({});
	const [showUpdateForm, setShowUpdateForm] = useState(false);
	let [index, setIndex] = useState(0);

	const toggleShowUpdateForm = (id, dex) => {
		setShowUpdateForm(!showUpdateForm);
		setOrderToUpdate(id);
		setIndex(dex);
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/orders');
				const data = await response.json();
				setOrders(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="Orders">
			<h1>Orders</h1>

			<div className="table-responsive">
				<table className="table table-hover">
					{!showUpdateForm && (
						<>
							<thead>
								<tr>
									<th scope="col" className="font-weight-bold">
										Order #
									</th>
									<th scope="col" className="font-weight-bold">
										Pickup/Delivery
									</th>
									<th scope="col" className="font-weight-bold">
										Order
									</th>
									<th scope="col" className="font-weight-bold">
										Flavors
									</th>
									<th scope="col" className="font-weight-bold">
										Design Ideas
									</th>
									<th scope="col" className="font-weight-bold">
										Allergies
									</th>
									<th scope="col" className="font-weight-bold">
										Name
									</th>
									<th scope="col" className="font-weight-bold">
										Email
									</th>
									<th scope="col"></th>
								</tr>
							</thead>

							{orders.map((order, index) => {
								return (
									<>
										<tbody>
											<tr>
												<th scope="row" key={order._id}>
													{index + 1}
												</th>
												<td>{order.selectedDate}</td>
												<td>{order.orderType}</td>
												<td>{order.flavor}</td>
												<td>{order.ideas}</td>
												<td>{order.allergies}</td>
												<td>{order.name}</td>
												<td>{order.email}</td>
												<td>
													<button
														onClick={() => toggleShowUpdateForm(order, index)}
													>
														Edit
													</button>
												</td>
											</tr>
										</tbody>
									</>
								);
							})}
						</>
					)}
					{showUpdateForm && (
						<>
							<UpdateOrder
								props={props}
								order={orderToUpdate}
								setOrders={setOrders}
								index={index}
								form={setShowUpdateForm}
								showUpdateForm={showUpdateForm}
							/>
						</>
					)}
				</table>
			</div>
		</div>
	);
};

export default Orders;
