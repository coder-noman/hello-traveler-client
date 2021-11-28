import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PackageRegister = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        fetch('https://quiet-taiga-26650.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order Processed Succesfully');
                reset();
                <Link to={`/package/packageregister`} class="btn button fw-bold bg-primary text-white" ><i class="fas fa-route"></i> Book Now</Link>
            }
        })
    };
    return (
        <div>
        <h1 className="text-center fw-bold pt-5 mb-5">Please<span className="text-primary"> Register</span></h1>
        <div className="d-flex justify-content-center mt-5">
            <form className="row g-3 w-25" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue={user.displayName} {...register("name")} />
                <input className="form-control" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="text-danger">This field is required</span>}
                <input className="form-control" placeholder="Address" defaultValue="" {...register("address")} />
                <input className="form-control" placeholder="City" defaultValue="" {...register("city")} />
                <input className="form-control" placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit"  class="btn btn-primary" />
            </form>
        </div>
        </div>
    );
};

export default PackageRegister;