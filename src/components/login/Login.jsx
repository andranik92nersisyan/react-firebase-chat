import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase'; 
import { doc, setDoc } from 'firebase/firestore';
import './login.css';
import upload from '../../lib/upload';

const Login = () => {
   const [avatar, setAvatar] = useState({
      file: null,
      url: ""
   });

   const [loading, setLoading] = useState(false);

   const handleAvatar = (e) => {
      if (e.target.files[0]) {
         setAvatar({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
         });
      }
   };

   const handleRegister = async (e) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);
      const { username, email, password } = Object.fromEntries(formData);

      if (!username || !email || !password) {
         toast.error("Խնդրում ենք լրացնել բոլոր դաշտերը!");
         setLoading(false);
         return;
      }

      try {
         const res = await createUserWithEmailAndPassword(auth, email, password);
         const imgUrl = avatar.file ? await upload(avatar.file) : "/avatar.png";  

         await setDoc(doc(db, "users", res.user.uid), {
            id: res.user.uid,
            username,
            email,
            blocked: [],
            avatar: imgUrl,
         });

         await setDoc(doc(db, "userchats", res.user.uid), { chats: [] });

         console.log("User registered:", res.user);
         toast.success("Հաշիվը հաջողությամբ ստեղծվեց!");
      } catch (err) {
         console.log(err);
         toast.error(err.message);
      } finally {
         setLoading(false);
      }
   };

   const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target); 
      const { email, password } = Object.fromEntries(formData);

      if (!email || !password) {
         toast.error("Խնդրում ենք լրացնել բոլոր դաշտերը!");
         setLoading(false);
         return;
      }

      try {
         await signInWithEmailAndPassword(auth, email, password);
         toast.success("Մուտք գործեցիր հաջողությամբ!");
      } catch (err) {
         if (err.code === "auth/wrong-password") {
            toast.error("Սխալ գաղտնաբառ, փորձեք կրկին։");
         } else if (err.code === "auth/user-not-found") {
            toast.error("Օգտագործողը չի գտնվել։");
         } else {
            toast.error(err.message);
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='login'>
         <div className='item'>
            <h2>Բարի վերադարձ</h2>
            <form onSubmit={handleLogin}>
               <input type='text' placeholder='Email' name='email' />
               <input type='password' placeholder='Գաղտնաբառ' name='password' />
               <button disabled={loading}>{loading ? "Բեռնվում է..." : "Մուտք"}</button>
            </form>
         </div>
         <div className='separator'></div>
         <div className='item'>
            <h2>Ստեղծեք հաշիվ</h2>
            <form onSubmit={handleRegister}>
               <label htmlFor='file'>
                  <img src={avatar.url ? avatar.url : "/avatar.png"} alt="User Avatar" />
                  Ներբեռնեք նկարը
               </label>
               <input type='file' id='file' style={{ display: "none" }} onChange={handleAvatar} />
               <input type='text' placeholder='Մականուն' name='username' />
               <input type='text' placeholder='Email' name='email' />
               <input type='password' placeholder='Գաղտնաբառ' name='password' />
               <button disabled={loading}>{loading ? "Ստեղծվում է..." : "Գրանցվել"}</button>
            </form>
         </div>
      </div>
   );
};

export default Login;
