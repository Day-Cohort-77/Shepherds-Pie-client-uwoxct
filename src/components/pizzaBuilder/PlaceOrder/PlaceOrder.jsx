import { createOrder } from "../../../services/ordersService"
import React from "react"


export const OrderButton = () => {

    const saveChoice = ({ prop }) => {
        createOrder(prop)
    }

    return (
        <div className="conatainer-order-btn" >
            <button
                className="order-btn btn-info"
                type="order"
                onClick={saveChoice}>
                Place Order
            </button>
        </div>

    )
}

