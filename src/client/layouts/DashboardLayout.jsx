// import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { Grid } from "@mui/material"
import MenuGenerator from "../MenuGenerator"

const DashboardLayout = () => {

    return (
        <Grid sx={{}}>
            <Header />
            <Grid>
                <MenuGenerator />
            </Grid>
        </Grid>

    )
}

export default DashboardLayout