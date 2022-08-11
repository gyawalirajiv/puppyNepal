import React, {useState, useEffect, Component} from "react";
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Header from "../../components/Header"
import Home from "../Home";
import About from "../About";
import List from "../List";
import Details from "../Details";
import FilterPage from "../FilterPage";
import Login from "./Login";
import Table from "react-bootstrap/Table";
import axiosclient from "../../util/axiosClient";




class DashboardCategory extends Component{
    state = {
        data: []
    }

    componentDidMount() {
        axiosclient.get('/category').then((res) => {
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
                            <span><Link to="/admin/dashboard"> ORDERS</Link></span>
                            <span>CATEGORIES</span>
                            <Link to="/admin/dashboard/products"><span>PRODUCTS</span></Link>
                        </div>
                    </div>
                    <div style={{backgroundColor: "#f4f3ef", padding: "20px"}}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p style={{fontSize: "2em"}}>Dashboard | Categories</p>
                            <Link to="/"><p style={{marginRight: "50px", fontWeight: "700", backgroundColor: "#9a9a9a", color: "#f4f3ef", padding: "10px 20px", borderRadius: "10px"}}>Logout</p></Link>
                        </div>
                        <hr/>
                        <div style={{display: "flex", flexDirection: "column", gap: "20px", paddingLeft: "20px"}}>
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.map((item) => {
                                        return (<tr>
                                            <td>{item.categoryId}</td>
                                            <td>{item.title}</td>
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



export default DashboardCategory;