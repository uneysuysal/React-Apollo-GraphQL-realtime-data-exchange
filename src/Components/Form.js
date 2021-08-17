import React,{useState} from 'react';
import { useMutation } from "@apollo/client";
import {CREATE_JOBS} from "../GraphQL/mutation";
import { ListGroup,Button} from 'react-bootstrap';


import { Toaster,toast } from "react-hot-toast";


const Form = () => {
    const[age,setAge] = useState("");
    const[job,setJob] = useState("");
    const[name,setName] = useState("");
    

    const[insertJob] = useMutation(CREATE_JOBS)
    

    const createJob=()=>{
        insertJob({
            variables:{
                age:age,
                job:job,
                name:name
                
            }
        });
        toast.success('Başvuru başarılı')
    }
    
    return (
        <div>
            <h1>HOŞGELDİNİZ BAŞVURMAK İÇİN LÜTFEN FORMU DOLDURUN !</h1>
                <ListGroup  style={{margin:50}}>
                 <ListGroup.Item style={{marginRight:10}}><input  placeholder="Age" type="text" onChange={(e) => setAge(e.target.value)}/></ListGroup.Item>
                 <ListGroup.Item style={{marginRight:10}}><input  placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/></ListGroup.Item>
                 <ListGroup.Item style={{marginRight:10}}><input  placeholder="Job" type="text" onChange={(e) => setJob(e.target.value)}/></ListGroup.Item>


                 <ListGroup.Item style={{marginRight:10}}>  <Button onClick={createJob} variant="primary" block>Gönder</Button></ListGroup.Item>
                 
                 
                 </ListGroup> 
                
                 <Toaster
            position="top-center"
            reverseOrder={false}
          />
               
            
              
        </div>
    );
};

export default Form;