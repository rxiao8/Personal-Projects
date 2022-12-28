function favTutorial() {  
    var mylist = document.getElementById("myList");  
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
    }  
        const file = document.getElementById("file-input");
    file.onchange = () => {
      const selectedFile = file.files[0];
    makeCal(selectedFile);
    }
  