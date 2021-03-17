import React, { useEffect, useState} from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {useHistory} from 'react-router-dom';
import './PostCreate.scss';
import { PostCreateSchema } from './PostCreate.schema';
import environment from '../environments/index';
import { UserService } from '../services/user.service';



 function PostCreate() {
     const history = useHistory();

     async function submit(values) {
        const data = new FormData();
        data.append('image', values.image);
        data.append('description', values.description);
        try{
         await fetch(environment.apiUrl + '/post', {
             method: 'PUT',
             body: data,
             headers: {
                 Authorization: UserService.getToken()
             }
         });
         history.push('/');
        }catch(err){
         console.log(err);
        }
        
     }
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

     useEffect(() =>{
         if(image){
          const reader = new FileReader();
          reader.onloadend = () => {
          setPreview(reader.result );
          }
          
          reader.readAsDataURL(image);
          
         }else{
         setPreview(null);
         }
     }, [image])

    return (
       <div className="container-file d-flex justify-content-center align-items-center text-start ">
         <div col-lg-6 order-sm-0 order-lg-1 my-3>
            <h3>Create Post</h3>     
    <Formik
        initialValues={{image: '', description: ''}}
        validationSchema={PostCreateSchema}
        // validateOnChange={true}
        onSubmit={submit}>
            {({setFieldValue, isSubmitting}) => (
     <Form className=" mt-5 col-lg-8 px-0" noValidate>
         <div className="form-group my-3 files">
         <input type="file" accept='image/*'id="image" name="image" className="form-control" onChange={(e) => {
            const file = e.target.files[0];
            setFieldValue('image', file);
            if(file && file.type.substr(0,5) === 'image'){
                setImage(file)
            }else{
                setImage(null);
            }
             }} />
             <div className='preview d-flex justify-content-center'>
                  <img src={preview} style={{width : '200px'} ,{height :'200px'}} />
             </div>
        
         <ErrorMessage name="image" component="small"/>
         </div>
         <div class="form-group my-3 text-area ">
         <label for="exampleFormControlTextarea1  " className="form-label" htmlFor="description">Description</label>
         <Field as = "textarea" className="form-control" name = "description" id="description" />
         <ErrorMessage name="description" component="small"/>
         </div>   
         <div className="d-grid gap-2  text-right">
               <button type = "submit" className="btn btn-dark btn btn-primary" disabled={isSubmitting} >{isSubmitting ? 'Posting...' : 'Post'}</button>
		</div>
     </Form>
    )}
    </Formik>
  </div>
  </div>
    );
}
export default PostCreate;