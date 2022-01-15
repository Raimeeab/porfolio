import React from 'react'; 

const Contact = () => {
    return ( 
        <div>
           <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                    <input type="name" className="form-control form-control-sm" id="name" />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control form-control-sm" id="email" />
            </div>
            <div className="mb-3">
                <label for="enquiry" className="form-label">Enquiry</label>
                    <textarea className="form-control form-control-sm" id="enquiry" rows="3" placeholder="Get in touch..."></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
        </div>
    )
}

export default Contact;