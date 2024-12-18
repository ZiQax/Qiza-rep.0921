document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

       const username =  document.getElementById('username').value;
       const password =  document.getElementById('password').value;
      
       if (username === 'username' || password === 'password'){
         document.getElementById('message').innerText = 'login succes';
       }else{
        document.getElementById('message').innerText = 'masukan username & password';
       }
});