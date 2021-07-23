import React, {useState, useRef } from 'react'
import { Modal, Dropdown } from "react-bootstrap";
import "../../styles/paula.css";
import iconfoto from "../../images/fotos.png";
import { storage } from '../../firebase/config';

export const ModalReviewPost = () => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState(null);
    // const [imageSource, setImageSource] = useState(undefined);
    // const initialStateValue = {description:"", image:imageSource}
    // const [value, setValue] = useState(initialStateValue)
    // const uploadImage = async(e) => {
    //   const image = e.target.images['']
    //   const storageImage = storage.ref()
    //   const imageRef = storageImage.child(image.name)
    //   await imageRef.put(image)
    //   setImageSource(await imageRef.getDownloadURL())
    // }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


//     const handleUpload = () => {
//       const uploadTask = storage.ref(`fotos/${image.name}`).put(image);
//       uploadTask.on(
//         "state_changed",
//         snapshot => {},
//         error => {
//           console.log(error);
//         },
//         () => {
//           storage
//             .ref("images")
//             .child(image.name)
//             .getDownloadURL()
//             .then(url => {
//               console.log(url);
//             });
//         }
//       );
//     };

// console.log('image:', image);

    const mystyle = {
      color: "white",
      backgroundColor: "#0D0B6E",
      margin: "5px 43px 5px",
      marginBottom:"60px"
    };
    const categories = {
      backgroundColor: "#108AB0",
      borderRadius:"3px",
      padding:"5px 10px",
      textAlign: "center",
    }
    const cancel = {
      color: "white",
      backgroundColor: "#FCAC04",
      borderRadius:"10px",
      padding:"5px 10px",
      fontSize: "20px",
      position:"relative",
      marginRight: "30px",
    };

    const rechazar = {
      color: "white",
      backgroundColor: "red",
      borderRadius:"10px",
      padding:"5px 10px",
      fontSize: "20px",
      marginRight: "40px",
    };
    
    const post = {
      color: "white",
      backgroundColor: "#0D0B6E",
      borderRadius:"10px",
      padding:"5px 10px",
      fontSize: "20px",
      marginRight: "40px",
    };
    
let previewImg = useRef(null);
let imageRef= useRef(null);


function onChangeFile(){
// console.log(imageRef);
// console.log(previewImg);
    let $imageRef = setImage(imageRef.current.files[0]);
    // console.log($imageRef);
    let $previewImg = previewImg.current;
    let $readFile = new FileReader();

    if ($imageRef){
      $readFile.readAsDataURL($imageRef);
      $readFile.onloadend = function(){
        $previewImg.src = $readFile.result;
      };
    } else {
      $previewImg.src= "";
    }
    console.log("hola")
}

const handleChange = e =>{
  if(e.target.files[0]){
    setImage(e.target.files[0]);
  }
}

    return (
      <>
        <button
        className="btn-finalizar d-block mt-4"
        id="btnFinaly"
        onClick={handleShow}
      >
        <b>Post</b>
      </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <div>
              <input type="text" placeholder="Agrega un mensaje" className= "Upload__form-inputtext" name="title"></input>
            </div>
          </Modal.Header>
          <Modal.Body  className="modalDialog add-new-photo first" id="add-photo">            
            <div className="Upload__form-container-im">
                <img src={iconfoto} alt=""></img>
            </div>
            {/* ref={imageRef} */}
         <div id="add-photo">
         <input type="file"   name="images[]" style={{backgroundColor:"#0D0B6E"}} className="Upload__form-inputfile" onChange={onChangeFile}></input>
         </div>
         </Modal.Body>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={mystyle}> 
            Categorías
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" style={categories}>Salud</Dropdown.Item>
            <Dropdown.Item href="#/action-2" style={categories}>Seguridad</Dropdown.Item>
            <Dropdown.Item href="#/action-3" style={categories}>Beneficios</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Modal.Footer>
            <button style={cancel} onClick={handleClose}>
              Cancelar
            </button>
            <button style={rechazar} onClick={handleClose}>Rechazar</button>
            <button style={post} onClick={handleChange}>Publicar</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
