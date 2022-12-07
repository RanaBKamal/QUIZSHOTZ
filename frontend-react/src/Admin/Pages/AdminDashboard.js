import { Outlet } from "react-router-dom"

const { Fragment } = require("react")

const AdminDashboard = () => {
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    )
}

export default AdminDashboard