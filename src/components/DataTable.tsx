import { useState } from 'react'
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import { createTheme, ThemeProvider} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
      green: Palette['primary'];
    }
  
    interface PaletteOptions {
      green?: PaletteOptions['primary'];
    }
  }

const customtheme = () =>
    createTheme({
        palette:{
            green: {
                main:'#22C55E',
                light:'#22C55E',
                dark:'#22C55E',
                contrastText: '#22C55E',
            },
        },
    });
const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90},
    { field: 'first', headerName: "First Name", flex: 1},
    { field: 'last', headerName: "Last Name", flex: 1},
    { field: 'email', headerName: "Email", flex: 1},
    { field: 'phone', headerName: "Phone Number", flex: 1},
    { field: 'company', headerName: "Company", flex: 1},
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


  return (
    <div className='flex flex-col font-thin font-mono text-green-500 items-center bg-[#0F172A]/100 bg-fixed min-h-screen'>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-800 rounded m-3 hover:bg-slate-700 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Contact
                </button>
            </div> 
            <Button onClick={handleOpen} className="p-3 bg-slate-800 rounded m-3 hover:bg-slate-700 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-slate-800 rounded m-3 hover:bg-slate-700 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-slate-800 my-2 rounded">My Cars</h2>
            <ThemeProvider theme={customtheme()}>
            <DataGrid 
            rows={contactData} 
            columns={columns}
            checkboxSelection={true} 
            sx={{
                borderColor: 'green.main',
                color: 'green.main'
            }}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [5]
                }
            }}
            />
            </ThemeProvider>
        </div>
    </div>
  )
}

export default DataTable