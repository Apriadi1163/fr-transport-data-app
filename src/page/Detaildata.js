import React, { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

function Detaildata(){
    let navigate = useNavigate();
    let {id} = useParams();
    function gotoBack(){
        navigate("/")
    }

    const [transportation, setTransportation] = useState([]);

    const getTransportation = async () => {
        try{
            const response = await axios.get("http://localhost:8080/kendaraan/" + id);
            setTransportation(response.data);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getTransportation(id);
    },[])

    return(
        <div>
            <h3 style={{marginTop:"2em", marginBottom:"1.5em", marginLeft:"4em"}}>Detail Data Kendaraan</h3>
            <Container>
                <Form >
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="group-form-left" >
                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Nomor Registrasi</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.nomorRegistrasi}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Nama Pemilik</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    value={transportation.namaPemilik}
                                    disabled
                                    // placeholder={transportation.namaPemilik}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Merek Kendaraan</Form.Label>
                                <Form.Control
                                    type="text"
                                    
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.merekKendaraan}
                                />
                            </Form.Group>

                            <label for="floatingTextarea">Alamat Pemilik Kendaraan</label>
                            <textarea
                            class="form-control"
                            style={{ resize: "none", height: "100px", width:"20em", marginBottom:"1.5em" }}
                            id="floatingTextarea"
                            placeholder={transportation.alamat}
                            ></textarea>
                            
                            
                        </div>

                        <div >
                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Tahun Pembuatan</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.tahunPembuatan}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Kapasitas Silinder</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.kapasitasSilinder}
                                />
                            </Form.Group>

                           

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Warna Kendaraan</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.warnaKendaraan}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Bahan Bakar</Form.Label>
                                <Form.Control
                                    type="text"
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    placeholder={transportation.bahanBakar}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div>
                        <Button style={{width: "135px", marginRight:"0.5em"}} variant="secondary"  disabled>Simpan</Button>
                        <Button style={{width: "135px"}} onClick={gotoBack} >Kembali</Button>
                    </div>

                    
                </Form>
                
            </Container>

        </div>
    )
}

export default Detaildata;