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
        const { data } = axios.get(`${ apiURL }/order`);

    }, []);


    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40">
                <Link to="/" className='mr-15'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <h2>My Orders</h2>
            </div>

            <div className="cardsWrapper d-flex flex-wrap">
                {
                    []
                        .map((card, index) => {
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
}

export default Orders;