

function Bookingform() {
  return (
    <div>
      <br/>
      <div className="container">
      <div className="section-header">
            <h2>Booking Form <i className="bi bi-bookmark-check"></i></h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>
<form>
  <div>
    <div className="form-group col-md-12">
      <label for="inputEmail4">शासकीय कर्मचारी असल्यास हुद्दा.( Gov. Designation )</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder=""/>
      
    </div>
    <div className="form-group col-md-12">
      <label for="inputEmail4">
कार्यालयाचे नाव,पत्ता व फोन ( Name, Address and Phone of the office )</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder=""/>
      <a>महाराष्ट्र राज्य शासकीय अधिकारी व कर्मचारी यांना द्यावयाची कागत पत्रे .</a><br/>
<a>१. शासकीय कर्मचारी असलेच कार्यालयाचे पत्र</a><br/>
<a>२. ओळख पत्र</a><br/>
<a>३. आधार कार्ड अथवा राशन कार्ड ज्याचे कार्य आहे त्याचे आधार कार्ड</a><br/>
<a>४. शासकीय कर्मचारी सेवा निवृत्त असल्यास त्यांचे पी पी ओ ऑर्डर ची छायाप्रत.</a>
    </div>
    <div className="form-group col-md-12">
      <label for="inputPassword4">कागदपत्र अपलोड करा ( Upload Documents ) *</label><br/>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"/><br/>
      <a>Please upload ID Card and Other Documents if any ( Upload PDF/JPG/JPEG files only)</a><br/>
      <a>विविध आरक्षण करता वेळी संस्थेच्या विहित नमूद अर्जातील माहिती अथवा आवश्यक कागदपत्रामध्ये खोटी अथवा चुकीची माहिती आढळल्यास</a><br/>
      <a>आरक्षण रद्द समजले जाईल आणि पैसे परत केले जाणार नाहीत व त्यास संस्था जबाबदार राहणार नाही.</a><br/>
      <a>प्रत्येक व्यक्तीस फक्त दोन रूमचे आरक्षण करता येईल व अधिक आरक्षण केल्यास ते रद्द करण्यात येतील याची नोंद घ्यावी.</a><br/>
      <a>कृपया आपल्या डेबिट वा क्रेडिट कार्ड अकाऊंट मधील पैसे काढण्याचे ट्रांजेक्शन लिमिट चेक करा आणि बँकेमध्ये पैसे असल्याची खात्री करा.</a>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">First Name *</label>
    <input type="text" className="form-control" id="inputAddress" placeholder=" "/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Last Name *</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      <label for="inputCity">Company name (optional)*</label>
      <input type="text" className="form-control" id=""/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputState">Country *</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>India</option>
      </select>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Street Address *</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Town / City *</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">State *</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Postcode / ZIP * </label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Phone *</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Email address *</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="form-group col-md-12">
      <label for="inputZip">Order notes (optional)</label>
      <input type="text" className="form-control"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Book Now</button>
</form>
</div>
<br/>
    </div>
  );
}

export default Bookingform;