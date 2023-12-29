function displayGreeting() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
  
    if (name && age) {
      var ageInDays = age * 12;
      var greeting = `Hello, ${name}! You are ${ageInDays} months old.`;
      document.getElementById("greetingOutput").textContent = greeting;
      alert("mission successful")
    } else {
      alert("Please enter your name and age.");
    }
  }