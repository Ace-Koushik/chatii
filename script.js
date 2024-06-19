// Define responses for different types of inquiries
const responses = {
    "admissions": [
        "For admissions information, please visit our website or contact our admissions office.",
        "Admissions requirements vary by program. You can find more information on our website."
    ],
    "programs": [
        "We offer a variety of programs including Engineering, Business, and Arts. What program are you interested in?"
    ],
    "financial_aid": [
        "Information about financial aid can be found on our website or by contacting the financial aid office.",
        "We offer scholarships and financial aid options. Contact our financial aid office for more details."
    ],
    "campus_life": [
        "Our campus offers a vibrant community with various clubs, sports teams, and events.",
        "Campus life is diverse and active. You can find more information on our website or by visiting us."
    ],
    "location": [
        "Our college is located in Kandlakoya,medchal,hyderabad,telangana. It's easily accessible by public transportation."
    ],
    "contact": [
        "You can reach us at [Phone Number] or email us at [Email Address]."
    ],
    "highest package":[
        "highest package in our college is 58LPA."
    ],
    "average package":[
        "average package is about 4LPA."
    ],
    "is it autonomous":[
        "yes,the college is autonoumous."
    ],
    "tuition fees":[
        "It is about 1,05,000 per year."
    ],
    "clubs":[
        "we have many clubs like akrithi,lexius,film and photography any many other clubs."
    ],
    "default": [
        "I'm sorry, I didn't understand. Could you please rephrase your question?"
    ],
};

// Function to generate response based on user input
function generateResponse(query) {

    query = query.toLowerCase();
    if (query.includes("admission")) {
        return getRandomResponse(responses["admissions"]);
    } else if (query.includes("program")) {
        return getRandomResponse(responses["programs"]);
    } else if (query.includes("financial aid") || query.includes("scholarship")) {
        return getRandomResponse(responses["financial_aid"]);
    } else if (query.includes("campus") || query.includes("life")) {
        return getRandomResponse(responses["campus_life"]);
    } else if (query.includes("location") || query.includes("where")) {
        return getRandomResponse(responses["location"]);
    } else if (query.includes("contact") || query.includes("phone") || query.includes("email")) {
        return getRandomResponse(responses["contact"]);
    } else if(query.includes("highest package"))   {
        return getRandomResponse(responses["highest package"]);
    } else if(query.includes("average package")){
        return getRandomResponse(responses["average package"]);
    } else if(query.includes("is it autonomous")) {
        return getRandomResponse(responses["is it autonomous"]);
    }  else if(query.includes("clubs")) {
        return getRandomResponse(responses["clubs"]);
    } else if(query.includes("tuition fees")) {
        return getRandomResponse(responses["tuition fees"]);
    }
    else {
        return getRandomResponse(responses["default"]);
    }
}

// Function to get a random response from an array
function getRandomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    chatBox.appendChild(userMessage);
    const botResponse = document.createElement("p");
    botResponse.textContent = "CollegeBot: " + generateResponse(userInput);
    chatBox.appendChild(botResponse);
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("user-input").value = "";
}