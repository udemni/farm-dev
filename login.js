function login_data_check() {
    var user = document.getElementById('username') .value;
    var pass = document.getElementById('password') .value;
    if (user=="" || pass=="")
    {
        alert('please fill in all fields');
        return false;
    }else
    {
        return true;
    }

}