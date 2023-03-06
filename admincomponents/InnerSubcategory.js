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

function InnerSubcategory() {
  // add category modal
  const categorylists = useSelector((state) => state.products.categorylist);
console.log(categorylists)

  const [Subcategory,setSubcategroy]=useState()
   

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

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

 
   const subsubsubcategory = (categories, option = []) => {
    if (!categories) return null;
  
    for (let category of categories) {
      if (category.children.length > 0) {
        for (let subcategory of category.children) {
          if (subcategory.children && subcategory.children.length > 0) { // Check if subcategory has children
            for (let subsubCategory of subcategory.children) {
              option.push({
                value: subsubCategory._id,
                name: subsubCategory.name
              });
            }
          }
        }
      }
    }
  
    return option;
  };

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

  //   const modalLoaded = () => {
  //     setTitle("Modal Ready");
  //   };
  return (
    <>
<h1>subsub</h1>

{
  subsubsubcategory(categorylists) &&   subsubsubcategory(categorylists) .map((data)=>{
    console.log(data)
    return(
      <>


        <tr>{data.name}</tr>
      </>
    )
  })
}

      <div className="col-12 admin-dash-cont">
        {/* Add category modal */}
        <Modal show={subcatopen} onHide={hideModal}>
          <ModalHeader closeButton>
            <ModalTitle>Add Inner Sub Category</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="contaInner">
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
                    value={parentIdset}
                    onChange={(e)=>setPARENTid(e.target.value)}
                  >
                    <option selected="">Select Category</option>
                  {
                    SetSubcategories(categorylists) &&  SetSubcategories(categorylists).map(data=>{
                      return (
                        <>
                          <option  value={data.value}>{data.name}</option>
                        </>
                      )
                    })
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
              Savesssssssssssssssssss
            </button>
          </ModalFooter>
        </Modal>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper ">
          <div className="adminSubNav">
            <h3 className="admin-nav-titlee">Add Inner Sub Category</h3>
            <div className="mt-2 d-flex">
              <button
                type="button"
                className="btn btn-secondary modal-btn"
              
                onClick={showModal}
              >
                Add InnerSub Category
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
              {
  subsubsubcategory(categorylists) &&   subsubsubcategory(categorylists) .map((data)=>{
    console.log(data)
    return(
      <>


        <tr>{data.name}</tr>
      </>
    )
  })
}
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
                  <th scope="col">S.No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Subcategory Name</th>
                  <th scope="col">InnerSubcategory Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Display order</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {/* <tr>
                  <th scope="row">1</th>
                  <td>Agriculture</td>
                  <td>Vegetable</td>
                  <td>Chilli</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <div className="buttonsEnq">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm p-0"
                        title="Edit"
                        onClick={showModal2}
                      >
                        <AiOutlineEdit />
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger btn-sm p-0"
                        title="Delete"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr> */}



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
            <ModalTitle>Edit Inner Sub Category</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="contaInner">
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

export default InnerSubcategory;
