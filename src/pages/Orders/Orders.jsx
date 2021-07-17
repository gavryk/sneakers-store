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
    //Loading
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${ apiURL }/order`);
                setOrders(data);
                setIsLoading(false);
            } catch (err) {
                alert(err)
            }
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
                        const orderItems = isLoading ? [...Array(8)] : order.items;
                        return (
                            <div key={ order.id } className='order-wrapper'>
                                <div className="flex justify-between">
                                    <h2 className='mb-20'>Order #{ order.id }</h2>
                                </div>
                                <div className="cardsWrapper d-flex flex-wrap">
                                    {

                                        orderItems.map((card, index) => {
                                            return (
                                                <Card
                                                    {...card}
                                                    key={ index }
                                                    loading={ isLoading }
                                                    hideBtn={ true }
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