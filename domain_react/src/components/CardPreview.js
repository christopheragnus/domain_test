import React from 'react';
import './CardPreview.css';

function CardPreview(props) {
    return (
        <div className="vcard">
            <div className="cardSubtitle">
                <h5>hCard Preview</h5>
            </div>
                <div className='cardPreview'>
                    <div className='header'>
                        <h1 className="fn">{props.givenname} {props.surname}</h1>
                        { props.imageData.length > 0 ? 
                            <img src={props.imageData} className="img-thumbnail avatar shadow-sm bg-white rounded" alt=""/>
                            : <img src={require('./avatarpic.jpg')} alt="" className="img-thumbnail avatar shadow-sm bg-white rounded"/>
                        }
                    </div>
                    
                    <div className='cardBody'>
                    <div className='field title'>Email </div> 
                    <div className='field email'>{props.email}</div>
                
                    <div className='field title'>Phone</div>  
                    <div className='field tel'>{props.phone}</div>
                    <div className='field title'>Address</div>  
                    <div className='field street-address'>{props.housename} {props.street}</div>
                    <div className='field placeholder' > . </div>
                    <div className='field locality region'> {props.suburb} {props.state} </div>
                    </div>
                    <div className='extraFields'>
                    <div className='field title'>Postcode </div> 
                    <div className='field postal-code'> {props.postcode} </div>
                    <div className='field title'>Country</div> 
                    <div className='field country-name'> {props.country} </div>
                    </div>
                </div>
        </div>
 
    )
}

export default CardPreview;