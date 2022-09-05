import React, { useState } from "react";
import { Form, Container, Button, Dropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Adddata(){
    let navigate = useNavigate();
    function gotoBack(){
        navigate("/")
    }

    const [form, setForm] = useState({
        nomorRegistrasi:"",
        namaPemilik:"",
        alamat: "",
        merekKendaraan:"",
        tahunPembuatan:"",
        kapasitasSilinder:"",
        warnaKendaraan:"",
        bahanBakar:"",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();

            const config = {
                headers: {
                    "content-type": "application/json",
                },
            }

            const body = JSON.stringify(form);

            const response = await axios.post("http://localhost:8080/kendaraan/add", body, config);
            navigate("/")
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div>
            <h3 style={{marginTop:"2em", marginBottom:"1.5em", marginLeft:"4em"}}>Tambah Data Kendaraan</h3>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="group-form-left" >
                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Nomor Registrasi</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nomorRegistrasi"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                    required
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Nama Pemilik</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="namaPemilik"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Merek Kendaraan</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="merekKendaraan"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                />
                            </Form.Group>

                            <label for="floatingTextarea">Alamat Pemilik Kendaraan</label>
                            <textarea
                            class="form-control"
                            style={{ resize: "none", height: "100px", width:"20em",marginBottom:"1.5em" }}
                            onChange={handleChange}
                            id="floatingTextarea"
                            name="alamat"
                            ></textarea>
                            
                            
                        </div>

                        <div >
                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Tahun Pembuatan</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tahunPembuatan"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Kapasitas Silinder</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="kapasitasSilinder"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                />
                            </Form.Group>

                            <label>Warna Kendaraan</label>
                            <select class="form-select" aria-label="Default select example" name="warnaKendaraan" onChange={handleChange}
                                style={{width:"20em", marginBottom:"1.5em"}}
                            >
                                <option selected>Pilih warna</option>
                                <option value="Merah">Merah</option>
                                <option value="Hitam">Hitam</option>
                                <option value="Biru">Biru</option>
                                <option value="Abu-abu">Abu-abu</option>
                            </select>

                            

                            <Form.Group
                                className="mb-1"
                                >
                                <Form.Label>Bahan Bakar</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="bahanBakar"
                                    onChange={handleChange}
                                    style={{width:"20em", marginBottom:"1.5em"}}
                                />
                            </Form.Group>
                        </div>
                    </div>

                    <div>
                        <Button style={{width: "135px", marginRight:"0.5em"}} type="submit"  >Simpan</Button>
                        <Button style={{width: "135px"}} onClick={gotoBack} >Kembali</Button>
                    </div>

                    
                </Form>
                
            </Container>

        </div>
    )
}

export default Adddata;