// import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "./firebase";

// const upload = async(file) =>{

//     // const storage = getStorage();
//     const date = new Date();
//     const storageRef = ref(storage, `images/${date.getTime()}_${file.name}`);


//     const uploadTask = uploadBytesResumable(storageRef, file);


//     return new Promise((resolve, reject) => {
    
//         uploadTask.on('state_changed', 
//             (snapshot) => {
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log('Upload is ' + progress + '% done');
//                 // switch (snapshot.state) {
//                 //     case 'paused':
//                 //         console.log('Upload is paused');
//                 //         break;
//                 //         case 'running':
//                 //             console.log('Upload is running');
//                 //             break;
//                 //         }
//                     }, 
//                     (error) => {
//                         reject("Something went wrong" +error.code);
//                     }, 
//                     () => {
//                         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                             resolve
//                         });
//                     }
//                 );
//             });
//         };

// export default upload;