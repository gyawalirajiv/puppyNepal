import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import Table from "react-bootstrap/Table";
import axiosclient from "../../util/axiosClient";


class Dashboard extends Component{
    state = {
        data: []
    }

    componentDidMount() {
        axiosclient.get('/order').then((res) => {
            this.setState({data: res.data});
        });
    }

    render() {
        return (
            <>
                {/*<Header />*/}
                <div style={{display: "grid", gridTemplateColumns: "1.5fr 6fr", color: "#9a9a9a"}}>
                    <div style={{display: "flex", flexDirection: "column", padding: "20px", fontSize: "1.2em"}}>
                        <div>
                            <Link to="/"><img src={ require('../../assets/images/puppyNepal.png')} /></Link>
                        </div>
                        <hr/>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px"}}>
                            <span><NavLink exact to={`/admin/dashboard`}> ORDERS</NavLink></span>
                            <Link to="/admin/dashboard/categories"><span>CATEGORIES</span></Link>
                            <span><Link to="/admin/dashboard/categories">PRODUCTS</Link></span>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#f4f3ef", padding: "20px"}}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style={{fontSize: "2em"}}>Dashboard | Orders</p>
                            <Link to="/"><p style={{marginRight: "50px", fontWeight: "700", backgroundColor: "#9a9a9a", color: "#f4f3ef", padding: "10px 20px", borderRadius: "10px"}}>Logout</p></Link>
                        </div>
                        <hr/>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px"}}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Phone Number</th>
                                    <th>Date</th>
                                    <th>Product Object #</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.map((item) => {
                                        return (<tr>
                                            <td>{item.orderId}</td>
                                            <td>{item.fullName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.createdAt}</td>
                                            <td>{item.product}</td>
                                        </tr>);
                                    })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default Dashboard;