import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
// import { Modal, Button } from 'react-bootstrap'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { useSelector, useDispatch } from "react-redux";
import { getCategory, CreateCategories } from "../action/productAction";

function Subcategory() {

  const categorylists = useSelector((state) => state.products.categorylist);
  console.log();
  
  const [stat,setstat]=useState([categorylists])

  const [Subcategory,setSubcategroy]=useState()
   

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

     
   
   
   
  // add category modal
  const [subcatopen, setsubcatopen] = React.useState(false);
  const showModal = () => {
    setsubcatopen(true);
  };
  const hideModal = () => {
    setsubcatopen(false);
  };

  //   edit category modal
  const [subcatedit, setsubcatedit] = React.useState(false);
  const showModal2 = () => {
    setsubcatedit(true);
  };

  const hideModal2 = () => {
    setsubcatedit(false);
  };

  const [parentIdset,setPARENTid]=useState()
  const [CategoryName,setCategoryName]=useState()

 const AddSub=(e)=>{
  e.preventDefault()

  
  const Sub={
    name:CategoryName,
    parentId:parentIdset
  }
  dispatch(CreateCategories(Sub))
 }
 const createcategory=(categories,option=[])=>{
    if(!categories) return null

  for(let Category  of categories){
    console.log(Category)
    option.push(
      {
        value:Category._id,name:Category.name
      }
    )
   
  }
  return option
 }


 const SetSubcategories=(categories,option=[])=>{
   if(!categories) return null

    for(let category of categories){
      if(category.children.length>0){
        option.push({
          value:category.children[0]._id,
          name:category.children[0].name
        })
      }
    }
    return option

 } 


  return (
    <>
    <ul>
 
    </ul>
      <div className="col-12 admin-dash-cont">
        {/* Add category modal */}
        <Modal show={subcatopen} onHide={hideModal}>
          <ModalHeader closeButton>
            <ModalTitle>Add Sub Category</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="container ">
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    onChange={(e)=>setCategoryName(e.target.value)}
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select pt-2"
                    aria-label="Disabled select example"
                    value={Subcategory}
                    onChange={(e)=>setPARENTid(e.target.value)}
                  >
                    <option selected="">Select Category</option>
                    {
    createcategory(categorylists) &&  createcategory(categorylists).map(option=>
    <option value={option.value}>{option.name}</option>
  )
  }
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <input
                  // style={{ fontSize: "12px" }}
                  type="file"
                  className="form-control"
                  //   placeholder="Icon"
                  //   aria-label="Icon"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={hideModal}
            >
              Cancel
            </button>
            <button
            onClick={AddSub}
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Save Categories
            </button>
          </ModalFooter>
        </Modal>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper ">
          <div className="adminSubNav">
            <h3 className="admin-nav-titlee">Add Sub Category</h3>
            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={showModal}
              >
                Add Sub Category
                <IoAdd />
              </button>
            </div>
          </div>
          <hr />
          <div className="table-section">
            <div className="tablenav">
              <div className="sorting ml-2">
                <label>
                  Show{" "}
                  <select
                    name="example_length"
                    aria-controls="example"
                    className=""
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <div className="tableSearchbar mb-3 mr-2">
                <form className="d-flex " role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                <th scope="col">Category Name</th>

                  <th scope="col">S.No</th>
                  <th scope="col">Subcategory Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Display order</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
              <h1>category</h1>
            <td>   
{
  categorylists && categorylists.map((data)=>{
    return(
      <>


        <tr>{data.name}</tr>
      </>
    )
  })
}
</td> 
  

<tr>
<h1>Subcategory</h1>

{
SetSubcategories(categorylists) && SetSubcategories(categorylists).map((data)=>{
return(
<>

<tr>{data.name}</tr>
</>
)
})
}
</tr>



              </tbody>
            
            </table>
          </div>
        </div>

        
        {/* Add category modal */}
        <Modal show={subcatedit} onHide={hideModal2}>
          <ModalHeader closeButton>
            <ModalTitle>Edit Sub Category</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="container ">
              <div className="d-flex justify-content-between">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="dropdown">
                  <select
                    className="form-select pt-2"
                    aria-label="Disabled select example"
                  >
                    <option selected="">Select Category</option>
                    <option value="1">Agriculture</option>
                    <option value="2">Food</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <input
                  // style={{ fontSize: "12px" }}
                  type="file"
                  className="form-control"
                  //   placeholder="Icon"
                  //   aria-label="Icon"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={hideModal2}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: "#0e5176",
                color: "white",
                padding: "5px 10px 5px 10px",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Save
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default Subcategory;
