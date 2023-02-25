document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNameValue = document.getElementById("inputName").value;
  if(inputNameValue.length == 0){
    alert("Nama tidak boleh kosong");
    return false;
  }
  else if (inputNameValue.length < 3) {
    alert("Nama tidak boleh kurang dari 3 karakter");
    return false;
  }

  let inputEmailValue = document.getElementById("inputEmail").value;
  if(inputEmailValue.length == 0){
    alert("Email tidak boleh kosong");
    return false;
  }
  else if (!inputEmailValue.includes("@") || !inputEmailValue.includes(".com")) {
    alert("Email harus mengandung \"@\" dan \".com\"");
    return false;
  }

  let inputMessageValue = document.getElementById("inputMessage").value;
  if (inputMessageValue.split(" ").length < 3) {
    alert("Pesan harus memiliki minimal 3 kata");
    return false;
  }

  document.getElementById("form1").submit();
});
