// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener("submit", 
      event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, 
    false
  );
  })
})();












































// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");


// // Root Route
// app.get("/", (req, res) => {
//     res.send("Hi, I am root");
//   });
  
//   // Server Listening
//   app.listen(3000, () => {
//     console.log("server is listening to port 3000");
//   });
  