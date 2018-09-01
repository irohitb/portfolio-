import React from 'react';
import './contactUs.css'
import GMaps from './../GoogleMpas/googleMaps.js'

const contactUs = (props) => {
    return (
        <div>
          <div className="main-contactUs-d">
                <div className="container contactus-margin">
                    <h4 className="content-service-heading content-1 contact-us-content1"> Contact Us? </h4>
                    <h2 className="content-service-heading content-2 contact-us-content2">Drop us an email about enquires, complaints, proposals or just say hello</h2>
                    <div className="side-padding">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <form>
                                    <div class="form-group">
                                        <input type="name" class="form-control" id="exampleInputName"  placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Your email" />
                                    </div>
                                    <div class="form-group">
                                        <input type="subject" class="form-control" id="exampleInputSubject" placeholder="Your Subject" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-contact-submit">Submit</button>
                                </form>
                            </div>

                            <div className="col-md-4 col-lg-4">
                                        <h5 class="contact-info"> Contact info</h5>
                                        <h5 className="contact-info-address"> Where to find us?</h5>
                                        <p className="contact-para-address"> Nature Life Trad Cont and Services W.L.L <br/> Doha, Qatar </p>
                                        <h5 className="contact-info-address"> Email Us at?</h5>
                                        <p className="contact-para-address"> info@naturelifeservices.com </p>
                                        <h5 className="contact-info-address"> Give us a call at</h5>
                                        <p className="contact-para-address"> +97470390100 / +97470046021 </p>
                           
                            </div>

                             <div className="col-md-4 col-lg-4">
                                <div className="GoogleMaps">
                                   <GMaps />
                                </div>
                             </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
} 

export default contactUs;