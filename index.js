
var f1=0,f2=0,f3=0,f4=0,f5=0,f6=0,f7=0,f8=0,f9=0;
    function dp(){
            let ol=document.getElementById('ffname').value;
        //regex for firstname
        const fnamevalid=/^[a-zA-Z\s]+$/;
        var firstname;
        if(fnamevalid.test(ol))
        {
        //        alert('succ');
        f1=1;
                localStorage.setItem("firstname",ol);
        }else
        {
            alert("Please check your First name");
        }

     let om=document.getElementById('lname').value;
        //regex for lastname
        const lnamevalid=/^[a-zA-Z\s]+$/;
        var lastname;
        if(lnamevalid.test(om))
        {
            f2=1;
                localStorage.setItem("lastname",om);
        }else
        {
            alert("Please check your last name ");
        }
        

      let on=document.getElementById('number').value;
        //regex for number
        const numbervalid=/^[0-9]+$/;
        var numberofuser;
        if(numbervalid.test(on)&&on.length===10)
        {
            f3=1;
                localStorage.setItem("numberofuser",on);
        }else
        {
           alert("Please check phone number \nNote:Enter 10 digit number ");
        }
        
        let oo=document.getElementById('emai').value;
            //regex for email
            const emailvalid=/^([a-zA-Z0-9])+@([a-zA-z]+\.)+(\w+)/;
            let emailofuser;
            if(emailvalid.test(oo))
            {
        f4=1;
                localStorage.setItem("emailofuser",oo);
            }else
            {
                alert('Please check the mail');
            }

            
            let op=document.getElementById('Test_DatetimeLocal').value;
            var calenderbox;
            var calenderr=daterequired;
            var calender;
            if(op){
                f8=1;
                localStorage.setItem('calender',op);
                localStorage.setItem('calenderbox',op);
            }else{
                    alert("Please select the Preferred Interview Date!");
            }
           
            let oq=document.getElementById('appliedpostion').value;
                
            var appliedpositiondata;
            const appliedpositionvalid=/^[A-Za-z\s]+$/;
            if(oq.match(appliedpositionvalid))
            {
                f5=1;
                localStorage.setItem('appliedpositiondata',oq);
            }else
                {
                   alert("Please check the Applied role");
                }

                //city
                let or=document.getElementById('cityop').value;
                
                var citydata;
                if(or)
                {
                    f6=1;
                        localStorage.setItem('citydata',or);
                }else{
                      alert("Please select the city");
                }

                let early=document.getElementById("Test_DatetimeLocall").value;

                   var earlydate;
                   if(early){
                        f9=1;
                    localStorage.setItem('earlydate',early);
                   }else
                    alert('Please alert the Earliest Interview Date');

                    let m=document.getElementById('male');
                    let f=document.getElementById('female');
                    let t=document.getElementById('transgender');
                        var radiodata,selector;

                    if(m.checked)
                        {
                            selector=m.value;
                        }else if(f.checked)
                        {
                            selector=f.value;
                        }
                        else if(t.checked)
                        {
                            selector=t.value;
                        }

                        localStorage.setItem('radiodata',selector);
                        var tyy=localStorage.getItem('radiodata');
                    var radiogroupp=document.getElementsByName('genderop');
                    for(var i=0;i<radiogroupp.length;i++)
                    {
                        if(radiogroupp[i].value==tyy)
                            {
                                  f7=1;
                                break;
                            }

                    }
                        var sum=f1+f2+f3+f4+f5+f6+f7+f8+f9;
                        if(f7==0)
                            alert('Please select the gender!');
                            if(sum==9)
                                {
                                    var lkl=localStorage.getItem('appliedpositiondata');
                                    alert('You have registered for the role of ' +lkl)
                                    document.getElementById('formxal').reset();     
                                }
                                event.preventDefault();

                        }
    document.addEventListener("DOMContentLoaded",(event)=>{
            
            document.getElementById('ffname').value=localStorage.getItem('firstname')||"";
            document.getElementById('lname').value=localStorage.getItem('lastname')||"";
            document.getElementById('emai').value=localStorage.getItem('emailofuser')||"";
            document.getElementById('number').value=localStorage.getItem('numberofuser')||"";

            document.getElementById('Test_DatetimeLocal').value=localStorage.getItem('calenderbox')||"";
            document.getElementById('datepicker').innerHTML=localStorage.getItem('calender')||over;
            document.getElementById('appliedpostion').value=localStorage.getItem('appliedpositiondata')||"";
            document.getElementById('cityop').value=localStorage.getItem('citydata')||"";
          document.getElementById('Test_DatetimeLocall').value=localStorage.getItem('earlydate')||"";
            var ty=localStorage.getItem('radiodata');
                    var radiogroup=document.getElementsByName('genderop');
                    for(var i=0;i<radiogroup.length;i++)
                    {
                        if(radiogroup[i].value==ty)
                            {
                                  f7=1;
                                radiogroup[i].checked=true;
                                break;
                            }   

                    }
                });
    var daterequired;
function datefinder(){
let p=document.getElementById("Test_DatetimeLocal").value;
let y=new Date(p);
const arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
let res1=arr[y.getMonth()];
let res2=y.getDate();
let res3=y.getFullYear();
var over=res1+", "+res2+", "+res3;
document.getElementById("datepicker").innerHTML=over;
daterequired=over;
}
