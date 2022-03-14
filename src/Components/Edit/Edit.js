import React, { useEffect, useState, useRef } from 'react';
import {useParams } from 'react-router-dom';
// import { useUser } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./Edit.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Zoom } from 'react-toastify';

function Edit() {
    toast.configure();
    let {userid,id} = useParams();
    console.log("in EDIT userid & pid",userid, id);
    // const [userIdAfterFetch, setUserIdAfterFetch] = useState("");
    const [caption, setCaption] = useState("");
    const [images, setImages] = useState([]);
    const [color, setColor] = useState("#FFFFFF");
    const [error, setError] = useState("");
    const [previewimages, setPreviewimages] = useState([]);
    // const { state, dispatch } = useUser();
    const fileRef = useRef();
    const navigate = useNavigate();

    var jwt = require("jsonwebtoken");
    var result = jwt.decode(localStorage.getItem('token'));
    
    useEffect(() => {
        // fetch(`http://localhost:3002/data/${id}`)
        //     .then(res => res.json()).then((data) => {
        //         console.log(data)
        //         console.log(data.userId);
        //         setUserIdAfterFetch(data.userId);
        //         setCaption(data.caption);
        //         setColor(data.color);
        //         setFilesAfterReading(data.images);
        //         console.log(images)
        //         console.log(JSON.stringify({ "userId": userIdAfterFetch, "color": color, "caption": caption, "date": "2021-12-09","images": images}))
        //     })
        

        fetch(`http://localhost:8088/api/stcontrol/story/${id}`)
        .then(res=>res.json())
        .then(res=>{
            console.log("found story----",res);
            setCaption(res.title);
          setColor(res.color);
          setImages(res.image);
        })   
        
    }, [])    
    
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      console.log(file);
      const fileReader = new FileReader(file);
      console.log(fileReader);
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
      setPreviewimages((prev) => [...prev, base64]);
      setImages((prev) => [...prev, file]);
    }
    return "done";
    };
    
  // const setFilesAfterReading = async (files) => {
  //   setPreviewimages([]);
  //   for (let index = 0; index < files.length; index++) {
  //     const file = files[index];
  //     // console.log(file);
  //     // const base64 = await convertToBase64AfterFetch(file);
  //     setPreviewimages((prev) => [...prev, file]);
  //   }
  //   return "done";
  // };

  function handleEditClick(e) {
    
    console.log("edit function",images);

                    
    const formData = new FormData();
    for(let i=0;i<images.length;i++)
    {
        formData.append('image', images[i]);

        //formData.delete('file');
    }


    formData.append("sid",`${id}`);
    formData.append("tag", caption);
    formData.append("userId", result.sub)
    formData.append("color",color);
    formData.append("time", new Date().toISOString());
    




    fetch("http://localhost:8088/api/stcontrol/story",{
    
    method: 'PUT',
   
    body: formData

}).then(e => {
  toast.success('Story updated Successfully', {
    transition: Zoom //Zoom, Flip, Bounce
  })
  navigate("/");
  window.location.reload(false);
}).catch(e => {
  toast.error('Something went wrong!', {
    transition: Zoom //Zoom, Flip, Bounce
  })
}) 
    // if (images.length > 4) {
    //   setError("You can only upload 4 files maximum at a time");
    //   setTimeout(() => setError(""), 3000);
    //   return;
    //   }
    //   fetch(`http://localhost:3002/data/${id}`, {
    //       method: "PUT",
    //       header: {
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ "userId": userIdAfterFetch, "color": color, "caption": caption, "date": "2021-12-09","images": images})
    //   });
      console.log(JSON.stringify({ color, caption, images}))
      console.log(id);
      console.log(caption);
      console.log(color);
      console.log(images);
      
      navigate("/");
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
    //     setColor("#FFFFFF");
    //     fileRef.current.value = null;
    //     navigate("/");
    //   });
  }

  const handleFileChange = async (e) => {
    if (e.target.files.length > 4) {
      setError("You can only upload 4 files maximum at a time");
      setTimeout(() => setError(""), 3000);
      return;
    }

    await setFiles(e.target.files);
  };


return (
    <>
          <section className="ftco-section pt-3 pb-5 mb-4">
              <div className="container">
                <div className="row justify-content-center mt-3 mb-3">
                  <div className="col-md-6 text-center">
                    <h2 className="heading-section">Edit your Story</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="wrapper">
                      <div className="row no-gutters">
                        <div className="col-lg-12 col-md-7 order-md-last d-flex align-items-stretch">
                          <div className="contact-wrap w-100 p-md-5 p-4">
                            <h3 className="mb-4">Lets Go</h3>
                            
                            <div id="alert alert-danger" className="mb-4">
                            {error}
                            </div>
                            <form id="contactForm" className="contactForm">
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
                                        <h3>Update your memory</h3>
                                      </div>
                                    </div>

                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                <div className="d-flex justify-content-center">
                            {previewimages.map((el) => {
                                
                                return <img key={el} className="img-fluid w-25" src={el} alt="" />;
                              })}
                            {images.map((el) => {
                              if (el.data === undefined) 
                                return <></>
                              else
                                return <img key={el} className="img-fluid w-25" src={`data:image/png;base64,`+el.data} alt="" />;
                              })}
                          </div></div>
                                                <div className="col-md-12 mt-3 text-center">
                                                    
                            <div className="form-group">
                                    <input  onClick={handleEditClick} defaultValue="Update Now" className="btn btn-primary" />
                                  
                                                    </div>
                                                    
                          </div>
                         
                              </div>
                            </form>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

    </>
)
}

export default Edit
