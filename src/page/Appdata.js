import React, { useState, useEffect } from "react";
import { Container, Table, Button, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import DeleteData from "../modal/DeleteData";
import { useMutation } from "react-query"

function Appdata(){
    let navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("")
    function gotoAdd(){
        navigate("/add-data")
    }

    function gotoDetail(id){
        navigate("/detail/"+id)
    }

    function gotoEdit(id){
        navigate("/update/"+id)
    }

    const [transportation, setTransportation] = useState([]);
    const getTransportation = async () => {
        try{
            const response = await axios.get("http://localhost:8080/kendaraan/getAll");
            setTransportation(response.data)
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getTransportation();
    },[])

    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };
    
    const deleteById = useMutation(async (id) => {
        try {
          await axios.delete(`http://localhost:8080/kendaraan/${id}`);
          getTransportation();
          
        } catch (error) {
          console.log(error);
        }
    });

    useEffect(() => {
        if (confirmDelete) {
          handleClose();
          deleteById.mutate(idDelete);
          setConfirmDelete(null);
        }
    }, [confirmDelete]);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    
    return(
        <div>
            <h1 style={{marginLeft:"2.5em"}}>Aplikasi Data Kendaraan</h1>
            <Container className="container-data" >
                <div style={{marginLeft:"2em", marginTop:"1.5em"}}>
                    <div >
                        <h5>Nomor Registrasi</h5>
                    </div>
                    <input
                    className="fs-5 p-2 text-dark fw-bold rounded w-50 mb-2 mt-2 text-center "
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div style={{marginLeft:"2em"}}>
                    <div>
                        <h5>Nama Pemilik</h5>
                    </div>
                    <input
                    className="fs-5 p-2 text-dark fw-bold rounded w-50 text-center "
                    type="text"
                    // onChange={(e) => setSearchTerm(e.target.value)}
                    onChange={handleChange}
                    // value={searchTerm}
                    />
                    
                </div>
            </Container>
            <div className="handle-button">
                <Button style={{width: "135px", marginRight:"0.5em"}} onChange={handleChange}>Search</Button>
                <Button style={{width: "135px"}} onClick={gotoAdd} >Add</Button>
            </div>
            <Container>
            <Table striped hover size="lg">
                <thead>
                    <tr className="bg-info">
                    <th width="1%" className="text-center">No</th>
                    <th width="10%">Nomor Registrasi</th>
                    <th width="10%">Nama</th>
                    <th width="10%">Merek Kendaraan</th>
                    <th width="10%">Tahun Pembuatan</th>
                    <th width="10%">Kapasitas Silinder</th>
                    <th width="10%">Warna Kendaraan</th>
                    <th width="10%">Bahan Bakar</th>
                    <th style={{textAlign:"center"}} width="29%" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transportation.filter((item) => {
                        if(searchTerm === "" ){
                            return item;
                        }else if(item.nomorRegistrasi.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item;
                        }else if(item.namaPemilik.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item;
                        }
                        
                    }).map((item, index) => (
                    <tr>
                    <td>{index + 1}</td>
                    <td>{item.nomorRegistrasi}</td>
                    <td>{item.namaPemilik}</td>
                    {/* <td>{item.alamat}</td> */}
                    <td>{item.merekKendaraan}</td>
                    <td>{item.tahunPembuatan}</td>
                    <td>{item.kapasitasSilinder}</td>
                    <td>{item.warnaKendaraan}</td>
                    <td className="align-middle">{item.bahanBakar}</td>
                    <td style={{alignItems:"center"}}>
                        <Container>
                            <Row>
                        
                            <Button onClick={() => gotoDetail(item.id)} style={{width: "75px", marginRight:"7px"}} variant="warning">Detail</Button>
                            <Button variant="primary" style={{width: "75px", marginRight:"7px"}} onClick={() => {gotoEdit(item.id)}}>Edit</Button>
                            <Button variant="danger" onClick={() => {handleDelete(item.id)}} style={{width: "75px"}}>Delete</Button>
                        </Row>
                        </Container>
                    </td>
                    </tr>
                 ))}   
                </tbody>
                </Table>
            </Container>
            <DeleteData
              setConfirmDelete={setConfirmDelete}
              show={show}
              handleClose={handleClose}
            />
        </div>
    )
}

export default Appdata;