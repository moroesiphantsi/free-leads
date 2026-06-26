import * as XLSX from "xlsx";
import { Button } from "@mui/material";


const ExportExcel = ({ leads }: any) => {



const exportData = () => {



const month = new Date().getMonth();

const year = new Date().getFullYear();



const monthlyLeads = leads.filter((lead:any)=>{


const date = new Date(
lead.createdAt
);



return (

date.getMonth() === month &&
date.getFullYear() === year

);


});





const worksheet = XLSX.utils.json_to_sheet(
monthlyLeads
);



const workbook = XLSX.utils.book_new();



XLSX.utils.book_append_sheet(
workbook,
worksheet,
"Monthly Fibre Leads"
);



XLSX.writeFile(
workbook,
"monthly-fibre-applications.xlsx"
);



};



return (

<Button
variant="contained"
onClick={exportData}
sx={{
background:
"linear-gradient(90deg,#4DA3FF,#0066FF)",
fontWeight:"bold"
}}
>

📤 Export This Month Excel

</Button>


);


};



export default ExportExcel;