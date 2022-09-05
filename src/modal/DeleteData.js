import { Modal, Button } from 'react-bootstrap'

export default function DeleteData({ show, handleClose, setConfirmDelete }) {

    const handleDelete = () => {
        setConfirmDelete(true)
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="text-dark">
                <div style={{fontSize: '20px', fontWeight: '900'}}>
                    Delete Data
                </div>
                <div style={{fontSize: '16px', fontWeight: '500'}} className="mt-2">
                    Anda yakin menghapus data?
                </div>
                <div className="text-end mt-5">
                    <Button onClick={handleDelete} size="sm" className="btn-primary me-2" style={{width: '135px'}}>Ok</Button>
                    <Button onClick={handleClose} size="sm" className="btn-secondary" style={{width: '135px'}}>Batal</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
