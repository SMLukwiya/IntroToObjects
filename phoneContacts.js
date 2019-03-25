function contact(aFirstName,aSecondName,aPhoneNumber,anEmail,aStreet,aCity,aState) {
  this.firstName   = aFirstName,
  this.secondName  = aSecondName,
  this.phoneNumber = aPhoneNumber,
  this.email= anEmail,
  this.address={},
  this.address.street=aStreet,
  this.address.city=aCity,
  this.address.state=aState;

  contact.prototype.location=function () {
    return this.address.street+','+this.address.city+','+this.address.state;
      }
  contact.prototype.deleteContact=function () {
    var props = Object.keys(contact);
    for (var i = 0; i < props.length; i++) {
        if (!email) {
          delete contact[props[i]];
         }
      }
    return this.email;
  }

}

var morgan=new contact("Lukwiya","Sunday","0775324678","sundaymorganl@gmail.com","Nkozi street","kla","Uganda");
