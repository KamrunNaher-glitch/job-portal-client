import { object } from 'motion/react-client';
import React from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJob = () => {

    const {user} = useAuth();


    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData)
        // console.log(initialData);
        const {min,max,currency,...newJob} = initialData;
        console.log(newJob);
        newJob.salaryRange = {min,max,currency}
       newJob.requirements = newJob.requirements.split('\n')
       newJob.responsibility = newJob.responsibility.split('\n')
        console.log(newJob);

        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
             if(data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Job  has been added",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/MyPostedJobs')
                       }
        })



    }

    return (
        <div>
            <h2 className='text-3xl'>Post a New JOB</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" placeholder="job title" name='title' className="input input-bordered" required />
                </div>
                {/* Job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" placeholder="job location" name='location' className="input input-bordered" required />

                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a job Type" className="select select-ghost w-full max-w-xs">
                    <option disabled >Pick a job Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Intern</option>
                       
                    </select>

                </div>
                {/* Job Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select defaultValue="Pick a job Field" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Web Design</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" placeholder="min" name='min' className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="max" name='max' className="input input-bordered" required />


                    </div>
                    <div className="form-control">

                        <select defaultValue="Currency"   name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>Teaching</option>
                        </select>
                    </div>
                </div>

                {/* job description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>

                    <textarea className="textarea textarea-bordered" placeholder="Job Description" name='description'></textarea>
                </div>
                {/* Company Name*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" placeholder="Company Name" name='company' className="input input-bordered" required />
                </div>

                {/* job requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>

                    <textarea className="textarea textarea-bordered" placeholder="put each requirements in a new line" name='requirements'></textarea>
                </div>
                {/* job responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibility</span>
                    </label>

                    <textarea className="textarea textarea-bordered" placeholder="write each responsibility in a new line" name='responsibility'></textarea>
                </div>
                    {/* HR Name*/}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" placeholder="HR Name" name='hr_name' className="input input-bordered" required />
                </div>
                    {/* HR email*/}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="text" defaultValue={user?.email} placeholder="HR Email" name='hr_email' className="input input-bordered" required />
                </div>
                    {/* Application Deadline*/}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input type="date"  placeholder="Deadline" name='applicationDeadline' className="input input-bordered" required />
                </div>

                    {/* Company Logo*/}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" placeholder="Company Logo URL" name='company_logo' className="input input-bordered" required />
                </div>

                {/* submit Button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;