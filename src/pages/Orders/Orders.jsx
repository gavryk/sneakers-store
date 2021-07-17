import React from "react";
import Card from "../../components/Cards/Card/Card";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import AppContext from "../../context";

function Orders() {
    const { apiURL } = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${ apiURL }/order`);
            setOrders(data);
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40">
                <Link to="/" className='mr-15'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <h2>My Orders</h2>
            </div>
            {
                orders
                    .map(order => {
                        const orderItems = order.items;
                        return (
                            <div key={ order.id } className='order-wrapper'>
                                <h2 className='mb-20'>Order #{ order.id }</h2>
                                <div className="cardsWrapper d-flex flex-wrap">
                                    {
                                        orderItems.map((card, index) => {
                                            return (
                                                <Card
                                                    {...card}
                                                    key={ index }
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }).reverse()
            }

        </div>
    )
}

export default Orders;