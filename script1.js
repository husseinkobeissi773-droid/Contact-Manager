
    let contacts = [];

    function addContact() {
      const fname = document.getElementById("fname").value
      const lname = document.getElementById("lname").value
      const phone = document.getElementById("phone").value
      const email = document.getElementById("email").value
      const address = document.getElementById("address").value

      if (!fname || !lname || !phone || !email || !address) {
        displayMessage("Please fill all fields.");
        return;
      }

      contacts.push({ fname, lname, phone, email, address });
      displayMessage("Contact added successfully.");
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("address").value = "";
    }

    function listContacts() {
      if (contacts.length === 0) {
        displayMessage("No contacts available.");
        return;
      }
      let output = "<strong>Contact List:</strong><br>";
for (var i = 0; i < contacts.length; i++) {
  var c = contacts[i];
  output += (i + 1) + ". " + c.fname + " " + c.lname + "<br>";
}
displayMessage(output);
    }

    function viewContact() {
      const fname = prompt("Enter first name:");
      const lname = prompt("Enter last name:");

      const contact = contacts.find(function(c) {
        return c.fname === fname && c.lname === lname;
      });

      if (contact) {
        displayMessage(
          "Name: " + contact.fname + " " + contact.lname + "<br>" +
          "Phone: " + contact.phone + "<br>" +
          "Email: " + contact.email + "<br>" +
          "Address: " + contact.address
        );
      } else {
        displayMessage("Contact not found.");
      }
    }

    function editContact() {
      const fname = prompt("Enter first name to edit:");
      const lname = prompt("Enter last name to edit:");

      const contact = contacts.find(function(c) {
        return c.fname === fname && c.lname === lname;
      });

      if (contact) {
        contact.phone = prompt("New phone:", contact.phone);
        contact.email = prompt("New email:", contact.email);
        contact.address = prompt("New address:", contact.address);
        displayMessage("Contact updated.");
      } else {
        displayMessage("Contact not found.");
      }
    }

    function deleteContact() {
      const fname = prompt("Enter first name to delete:");
      const lname = prompt("Enter last name to delete:");

      const index = contacts.findIndex(function(c) {
        return c.fname === fname && c.lname === lname;
      });

      if (index !== -1) {
        contacts.splice(index, 1);
        displayMessage("Contact deleted.");
      } else {
        displayMessage("Contact not found.");
      }
    }
  

    

    function displayMessage(msg) {
      document.getElementById("result").innerHTML = msg;    
    }