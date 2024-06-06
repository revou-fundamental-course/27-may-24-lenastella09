document.addEventListener('DOMContentLoaded', (event) => {
  let sayhi = prompt("siapa nama anda?","jelena");
  document.getElementById("sayhi").innerHTML = sayhi
})

//replaceName();
//document.getElementById("ubahnama").addEventListener("click", function(){replaceName()})
// document.addEventListener('DOMContentLoaded', (event) => {

// let nama =prompt('siapakah nama anda?');
// let elemen = document.getElementById(`panggilan`);
// if(elemen) {
//     elemen.innerHTML = nama;
// } else {
//     console.log('elemen tidak ditemukan')
// }
// });


function setSenderUI(name,birthDate,gender,messages) {
    document.getElementById("sender-full-name").innerHTML = "Nama:" + name;
    document.getElementById("sender-birth-date").innerHTML = "Tanggal Lahir:" + birthDate;
    document.getElementById("sender-gender").innerHTML = "Jenis Kelamin:" + gender;
    document.getElementById("sender-messages").innerHTML = "Pesan:" + messages;
}

function validateForm() {

    const name = document.getElementById('full-name').value;
    const birthDate = document.getElementById('birth-date').value;
    const gender = document.getElementById('gender').value;
    const messaages = document.getElementById('messages').value; 
    

    if (name ==  null || birthDate == null || gender == null || messaages == null) {
         alert("Tidak boleh ada yang kosong")
        
     }

     setSenderUI(name,birthDate,gender,messaages);

     return false
 }



  var slideIndex = 1;
     showDivs(slideIndex);

   function plusDivs(n) {
     slideIndex += n;
      showDivs(slideIndex);

   }

   function showDivs(n) {
      var i;
       var x = document.getElementsByClassName('image-slideshow');
       if (x.length === 0) {
         console.error("No elements with class 'image-slideshow' found");
         return
       }
       if(n > x.length) {slideIndex = 1;
       }
       if (n < 1) {
         slideIndex = x.length
       }

      for(i = 0; i < x.length; i++) {
         console.log("Hiding element:", x[i]);
           x[i].style.display = "none";
      }
      if (x[slideIndex - 1]){
      console.log("Displaying element:", x[slideIndex - 1]);
      x[slideIndex - 1].style.display = "block";
      } else {
         console.error("Element at index" + (slideIndex - 1) + "not found");
      }
   }
   setInterval(() => {
       plusDivs(1)
   }, 3000);
