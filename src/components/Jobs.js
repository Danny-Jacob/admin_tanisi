import React from "react";
import Navbar from "./Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  useNavigate } from "react-router-dom";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  
  
];
const Jobs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div id="main" class="flexbox-col">
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
            marginRight: "5rem",
          }}
        >
          <button onClick={() => navigate("/add_job")}>Add Job</button>
        </div>
        <br></br>
        <div style={{display: "flex",
            width: "100%",padding:"0 2rem"}}>
        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        
        <p style={{ color: "transparent" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          corporis, rerum doloremque iste sed voluptates omnis molestias
          molestiae animi recusandae labore sit amet delectus ad necessitatibus
          laudantium qui! Magni quisquam illum quaerat necessitatibus sint
          quibusdam perferendis! Aut ipsam cumque deleniti error perspiciatis
          iusto accusamus consequuntur assumenda. Obcaecati minima sed natus?
        </p>
      </div>
    </div>
  );
};

export default Jobs;
