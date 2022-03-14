// import axios from "axios";
import { useState, useRef } from "react";
// import { Navigate } from "react-router-dom";
// import { useUser } from "../../context/userContext";
import "./CreateStory.css"
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Config from "../../Config.json";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Zoom } from 'react-toastify';

export default function CreateStory() {
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);
  const [color, setColor] = useState("1C1C0C");
  const [error, setError] = useState("");
  // const { state, dispatch } = useUser();
  const fileRef = useRef();
  const [previewimages, setPreviewimages] = useState([]);
  const navigate = useNavigate();

  toast.configure();
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err);
      };
    });
  };

  const setFiles = async (files) => {
    setImages([]);
    setPreviewimages([]);
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const base64 = await convertToBase64(file);
      setPreviewimages((prev) => [...prev, base64])
      setImages((prev) => [...prev, file]);
    }
    return "done";
  };

  function handleOnClick(e) {
    
    // axios
    //   .post("http://localhost:3002/fcc41880-31aa-478b-87ed-f946f56f6365", {
    //     text: caption,
    //   })
    //   .then((response) => console.log(response));
    if (images.length > 4) {
      setError("You can only upload 4 files maximum at a time");
      toast.error('You can only upload 4 files maximum at a time', {
        transition: Zoom //Zoom, Flip, Bounce
      })
      setTimeout(() => setError(""), 3000);
      return;
    }
    else {
          var jwt = require("jsonwebtoken");
          var result = jwt.decode(localStorage.getItem('token'));
  
          let sid=uuidv4();

          //let newStory={"id":`${sid}`,"userId": result.sub,"caption":caption,"color":color,"date": new Date().toISOString(), "image":images};

          //console.log("new sttttorryy",newStory);
          const formData = new FormData();
          console.log(images);
          for(let i=0;i<images.length;i++)
          {
            formData.append('image', images[i]);
          }
          formData.append("sid", `${sid}`);
          formData.append("userId", result.sub);
          formData.append("tag",caption);
          formData.append("color",color);
          formData.append("time", new Date().toISOString());
      console.log(formData);
    fetch(Config.STORY_SERVER_URL+"file/uploadImage",{
            
      method: 'POST',
     
      body: formData
  
    }).then(e => {
      toast.success('Story added Successfully', {
        transition: Zoom //Zoom, Flip, Bounce
      })
      navigate("/");
    }).catch(e => {
      toast.error('Something went wrong!', {
        transition: Zoom //Zoom, Flip, Bounce
      })
  }) }
    // axios
    //   .post("http://localhost:3002/data", {
    //     userId: state.userInfo.id,
    //     caption,
    //     images,
    //     color,
    //     date: new Date().toISOString(),
    //   })
    //   .then(() => {
    //     dispatch({
    //       type: "POSTNEW",
    //       payload: {
    //         userId: state.userInfo.id,
    //         caption,
    //         images,
    //         color,
    //         date: new Date(),
    //       },
    //     });
    //     setCaption("");
    //     setImages([]);
    //     setColor("#1C1C0C");
    //     fileRef.current.value = null;
    //     navigate("/");
    //   });
    
  }

  const handleFileChange = async (e) => {
    if (e.target.files.length > 4) {
      setImages([]);
      setError("You can only upload 4 files maximum at a time");
      toast.error('You can only upload 4 files maximum at a time', {
        transition: Zoom //Zoom, Flip, Bounce
      })
      setTimeout(() => setError(""), 3000);
      return;
    }

    await setFiles(e.target.files);
    console.log(fileRef);
  };

  return (
    <>
          <section className="ftco-section pt-3 pb-5 mb-4">
              <div className="container">
                <div className="row justify-content-center mt-3 mb-3">
                  <div className="col-md-6 text-center">
                    <h2 className="heading-section">How you are feeling?</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="wrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                          <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4">Lets Go</h3>
                            
                            <div id="alert alert-danger" className="mb-4">
                            {error}
                            </div>
                            <form id="contactForm" className="contactForm" enctype="multipart/form-data">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label className="label" htmlFor="#">Caption</label>
                              <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Give caption to your memory" style={{
                                height: "100px",
                                resize: "none",
                                color,
                              }}
                              onChange={(e) => setCaption(e.target.value)}
                              value={caption} />
                                  </div>
                                 </div>
                          <div className="col-md-12">
                            <div className="form-group">
                            <label className="label" htmlFor="#">Choose a Text Color :)</label>
                                <input
                                  type="color"
                                  className="form-control form-control-color"
                                  value={color}
                                  title="Choose your color"
                                  onChange={(e) => setColor(e.target.value)}
                              />
                            </div>
                                 </div>
                                  <div className="col-md-12">
                                      <div class="file-upload">
              

                                    <div class="image-upload-wrap">
                                      <input class="file-upload-input" type='file' multiple onChange={handleFileChange}  ref={fileRef}/>
                                      <div class="drag-text">
                                        <h3>Add Image of your memory</h3>
                                      </div>
                                    </div>

                                    </div>
                                </div>
                                <div className="col-md-12">
                            <div className="form-group">
                                    <input  onClick={handleOnClick} defaultValue="Post Memory" className="btn btn-primary" />
                                  
                              </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            {previewimages.map((el) => {
                              console.log(`data:image/png;base64,` + el);
                                return <img key={el} className="img-fluid w-25" src={el} alt="" />;
                              })}
                          </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                           <img src="img/bgimg3.jpg" alt="" srcset=""  style={{width:"100%"}}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

    </>

  );
}
