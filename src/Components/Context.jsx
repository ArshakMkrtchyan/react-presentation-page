import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function Context({ children }) {

  //login
  const [name, setname] = useState();
  const [password, setpassword] = useState();

  function handelclick() {
    if (name === "name" && password === "password") {
      localStorage.setItem(
        "User",
        JSON.stringify({
          name: name,
          password: password,
        })
      );
    } else {
      alert("Wrong login or password");
    }
  }


  //modal
  //images
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  }


  //modal display
  const [stylemodal, setstylemodal] = useState('none')
  function styleBlock() {
    setstylemodal('block')
  }

  function styleNone() {
    setstylemodal('none')
  }

  console.log(images);

  // images.map(img => (
  //   console.log(img.data_url, 'imggggggg')
  // ))

  //rigthSide
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [rightInfo, setRightInfo] = useState([])
  function addRigthInfo() {
    if (title !== '' && description !== '') {
      
      setRightInfo([
        ...rightInfo,
        {
          // id: 
          title: title,
          description: description,
          img: [images.map(img => (
           img.data_url
          ))]
        }
      ]
      );
      setTitle(' ');
      setDescription(' ');
      setImages([])
    }
  }

  // console.log(title, 'title');
  // console.log(description, 'descrip');
  // console.log(images[0], 'images');
  // console.log(rightInfo, 'rinf');

  const values = {
    name,
    setname,
    password,
    setpassword,
    handelclick,
    images,
    setImages,
    onChange,
    maxNumber,
    stylemodal,
    styleBlock,
    styleNone,
    title, setTitle,
    description, setDescription,
    rightInfo, setRightInfo,
    addRigthInfo
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
