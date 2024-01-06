import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { addToCategory, deleteCategory, getAllCategory } from "../services/allAPI";
import { toast } from "react-toastify";

function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async () => {
    if (categoryName) {
      let body = { categoryName, allVideos: [] };
      const response = await addToCategory(body);
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success("Category added successfully");
        // to empty state
        setCategoryName("");
        handleClose();
      } else {
        toast.danger("Something Went Wrong, Please try again");
      }
    } else {
      toast.warning("Please fill Category name");
    }
  };

  const allCategory = async () => {
    const { data } = await getAllCategory();
    // console.log(data);
    setCategory(data);
  };

  const removeCategory=async(id)=>{
    await deleteCategory(id)
    allCategory()
  }

  console.log(category);

  useEffect(() => {
    allCategory();
  }, []);

  return (
    <>
      <div className="d-grid ms-3">
        <button className="btn btn-warning" onClick={handleShow}>
          Add new category
        </button>
      </div>

      {category?.length > 0 ? (
        category?.map((item) => (
          <div className="border border-light p-3 rounded">
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h6>{item.categoryName}</h6>
              <button onClick={()=>removeCategory(item?.id)} className="btn btn-danger">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nothing to display</p>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border border-secondary rounded p-2">
            <Form.Group className="mb-3" controlId="category">
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;