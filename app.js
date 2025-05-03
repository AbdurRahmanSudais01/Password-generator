

// Form
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    
        const img = document.getElementById("image");
        const length = parseInt(document.getElementById("length").value);
        const type = document.querySelector('input[name="type"]:checked').value; // Get the selected radio value

        if (length < 4 || length > 16){

            alert("Please select length first!");
            return;
        }
        

        const password = generatePassword(length, type);
        document.getElementById("result").value = `${password}`;
        img.src = "file.png";

    });
// For generating Password
    function generatePassword(length, type) {
        const alphanumericChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const strongChars = alphanumericChars + "!@#$%^&*()_+[]{}|;:,.<>?";

        const chars = type === "strong" ? strongChars : alphanumericChars;
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        return password;
    }
// for the copy of text
    function copytext(){
        const img = document.getElementById("image");
        const textToCopy = document.getElementById("result").value; // Get the text from the input field
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy);

            // Toggle between two images
            img.src = "compliance.png";
    }
    }