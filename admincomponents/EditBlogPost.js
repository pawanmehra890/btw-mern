import React, { useState, useRef, useMemo } from "react";
// import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import JoditEditor from "jodit-react";
import "jodit";
import "jodit/build/jodit.min.css";

import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const copyStringToClipboard = function (str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const facilityMergeFields = [
  "FacilityNumber",
  "FacilityName",
  "Address",
  "MapCategory",
  "Latitude",
  "Longitude",
  "ReceivingPlant",
  "TrunkLine",
  "SiteElevation",
];
const inspectionMergeFields = ["InspectionCompleteDate", "InspectionEventType"];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
  let optionGroupElement = document.createElement("optgroup");
  optionGroupElement.setAttribute("label", optionGrouplabel);
  for (let index = 0; index < mergeFields.length; index++) {
    let optionElement = document.createElement("option");
    optionElement.setAttribute("class", "merge-field-select-option");
    optionElement.setAttribute("value", mergeFields[index]);
    optionElement.text = mergeFields[index];
    optionGroupElement.appendChild(optionElement);
  }
  return optionGroupElement;
};
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  "|",
  {
    name: "insertMergeField",
    tooltip: "Insert Merge Field",
    iconURL: "images/merge.png",
    popup: (editor, current, self, close) => {
      function onSelected(e) {
        let mergeField = e.target.value;
        if (mergeField) {
          console.log(mergeField);
          editor.selection.insertNode(
            editor.create.inside.fromHTML("{{" + mergeField + "}}")
          );
        }
      }
      let divElement = editor.create.div("merge-field-popup");

      let labelElement = document.createElement("label");
      labelElement.setAttribute("class", "merge-field-label");
      labelElement.text = "Merge field: ";
      divElement.appendChild(labelElement);

      let selectElement = document.createElement("select");
      selectElement.setAttribute("class", "merge-field-select");
      selectElement.appendChild(
        createOptionGroupElement(facilityMergeFields, "Facility")
      );
      selectElement.appendChild(
        createOptionGroupElement(inspectionMergeFields, "Inspection")
      );
      selectElement.onchange = onSelected;
      divElement.appendChild(selectElement);

      console.log(divElement);
      return divElement;
    },
  },
  {
    name: "copyContent",
    tooltip: "Copy HTML to Clipboard",
    iconURL: "images/copy.png",
    exec: function (editor) {
      let html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: 800,
  height: 842,
};

const initialContent = ``;

function EditBlogPost() {
     //   const editor = useRef(null);
  //   const [content, setContent] = useState("");

  const [data, setData] = useState(initialContent);

  // mui dropdown
  const [BlogCategory, setBlogCategory] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  return (
    <>
    <div className="col-12 admin-dash-cont">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <div
          className="adminSubNav"
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <h3
            className=" mt-2"
            style={{
              margin: "auto",
              color: "#0e5176",
              fontWeight: "bold",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            Edit Blog Post
          </h3>
        </div>
        <hr />
        <div className="container">
          <div className="addblogform d-flex">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
              />
            </Box>

            <Box sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">
                  Blog Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={BlogCategory}
                  label="BlogCategory"
                  //   onChange={handleChange}
                >
                  <MenuItem value={10}>Agriculture</MenuItem>
                  <MenuItem value={20}>Hardaware</MenuItem>
                  <MenuItem value={30}>Honey</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div className="container mt-4 w-50">
            <label htmlFor="thumbimg">
              Upload Blog thumbnail here
              <input
                id="thumbimg"
                // style={{ fontSize: "12px" }}
                type="file"
                className="form-control"
                //   placeholder="Icon"
                //   aria-label="Icon"
                aria-describedby="basic-addon1"
              />
            </label>
          </div>

          <div className="mt-4">
            <div
              // className="App"
              style={{ maxWidth: editorConfig.width, margin: "0 auto" }}
              // style={{width:"100%"}}
            >
              <JoditEditor
                value={data}
                config={editorConfig}
                onChange={(value) => setData(value)}
              />
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Button variant="contained" color="success">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
        {/* {content} */}
      </div>
    </div>
  </>
  )
}

export default EditBlogPost
