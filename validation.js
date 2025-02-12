function valid(){
    var user=document.getElementById('user').value;
    var Email=document.getElementById('Email').value;
    var num=document.getElementById('num').value;
    var pass=document.getElementById('pass').value;
    var con=document.getElementById('con').value;
    var d=document.getElementById('DOB').value;
    if(user==""||Email==""|| num=="" || pass=="" || con==""|| d==""){
        alert("All fields are Mandatory");
        return false;

    }
    
    else if(num.length<10||num.length>10){
        alert('Enter Valid ContactNumber');
        return false;
    }
    else if(!evalid(Email)){
        alert('Enter valid email');
        return false;
    }
    else if(pass!=con){
        alert('Conform the password');
        return false;
    }
    else{
        return true;
    }
}
function evalid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}


