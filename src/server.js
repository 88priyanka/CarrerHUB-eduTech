const { MongoClient } = require("mongodb");
const readline = require("readline");

// MongoDB Atlas Connection URL and Database Name
const url =
  "mongodb+srv://meyyarul:LvBTMZtP6HYFxjxD@cluster0.tybdolu.mongodb.net/userDB?retryWrites=true&w=majority"; // Replace with your MongoDB Atlas connection string
const dbName = "userDB"; // Ensure this matches the existing database name
const client = new MongoClient(url, { useUnifiedTopology: true });

// Setup readline for console input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to fetch all career and courses data from MongoDB
async function fetchAllCareersAndCourses() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    const db = client.db(dbName); // Use the existing database
    const careerReference = db.collection("careerrefernce"); // Collection name

    // Fetch all data from the collection
    const data_database = await careerReference.find({}).toArray();

    console.log("Fetched Data:");
    console.log(JSON.stringify(data_database, null, 2)); // Printing the data in formatted JSON

    // You can manipulate or return the data as needed
    return data_database;
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close(); // Close the connection
  }
}

// Run the function to fetch data
fetchAllCareersAndCourses().then((data_database) => {
  console.log("Data fetched successfully:", data_database);
}); 