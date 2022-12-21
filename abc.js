let user={
    fname:"sahil",
    lname:"shah",
    age:25,
    fullname:function(){
          console.log(this.lname);
    }
};
user.fullname();