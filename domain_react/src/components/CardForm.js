import React from 'react';
import './CardForm.css';
import CardPreview from './CardPreview';

class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.state = {
            givenname:"",
            surname: "",
            email:"",
            phone:"",
            housename:"",
            street:"",
            suburb:"",
            state:"",
            postcode:"",
            country:"",
            imageData:""
    };
}

    handleChange(e) {
        console.log(e.target.id);
        this.setState({
           [e.target.id]: e.target.value
        });
    }

    previewImage(e) {
        console.log(e.target);

        let input = e.target;
        if (input.files && input.files[0]) {
            let reader = new FileReader(); //webApi
            reader.onload = (e) => {
                this.setState({imageData: e.target.result});
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    render() {
     return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="m-3">
                        <h2>hCard Builder</h2>
                        <h6>Personal Details</h6>
                        <form>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="givenname" className="mb-0 title">Given Name</label>
                                    <input type="text" className="form-control" id="givenname"  value={this.givenname} onChange={this.handleChange}/>
                                </div>
                                <div className="col">
                                    <label htmlFor="surname" className="mb-0 title">Surname</label>
                                    <input type="text" className="form-control" id="surname"  value={this.surname} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="email" className="mb-0 title">Email</label>
                                    <input type="text" className="form-control" id="email" value={this.email} onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="phone" className="mb-0 title">Phone</label>
                                    <input type="text" className="form-control" id="phone" value={this.phone} onChange={this.handleChange} />
                                </div>
                            </div>
                            <h6>Address</h6>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="housename" className="mb-0 title">House Name or #</label>
                                    <input type="text" className="form-control" id="housename" value={this.housename} onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="street" className="mb-0 title">Street</label>
                                    <input type="text" className="form-control" id="street" value={this.street} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="suburb" className="mb-0 title">Suburb</label>
                                    <input type="text" className="form-control" id="suburb" value={this.suburb} onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="state" className="mb-0 title">State</label>
                                    <input type="text" className="form-control" id="state" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="postcode" className="mb-0 title">Postcode</label>
                                    <input type="text" className="form-control" id="postcode" value={this.postcode} onChange={this.handleChange} />
                                </div>
                                <div className="col">
                                    <label htmlFor="country" className="mb-0 title">Country</label>
                                    <input type="text" className="form-control" id="country" value={this.country} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <div className="upload-btn-wrapper btn-block">
                                        <button type="button" className="btn btn-secondary btn-block mt-3" >Upload Avatar</button>
                                        <input type="file" name="fileupload" onChange={this.previewImage} accept="image/*" />
                                    </div>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-primary btn-block mt-3">Create hCard</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 background">
                    <CardPreview 
                        givenname={this.state.givenname}
                        surname={this.state.surname}
                        email={this.state.email}

                        phone={this.state.phone}
                        housename={this.state.housename}
                        street={this.state.street}
                        state={this.state.state}
                        suburb={this.state.suburb}
                        postcode={this.state.postcode}
                        country={this.state.country}
                        imageData={this.state.imageData}
    
                     /> 
                </div> 
            </div>
        </div>
     )
 }
}

export default CardForm;