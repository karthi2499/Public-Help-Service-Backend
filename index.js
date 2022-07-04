const { anchor, merkle } = require("provendb-sdk-node");
const fs = require('fs');
const express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");


// MongoDB Connection

async function connectDB() {
    await mongoose.connect(
        "mongodb://karthi:karthi@project.provendb.io/project?ssl=true", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    );
    console.log("db connected");
}
connectDB();

app.use(express.json({
    extended: false
}));

app.get("/", (req, res) => res.send("Backend Server is Running"));

// ElectrictyComplaints Route

app.post("/ElectrictyComplaints", async (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.mobile;
    const location=req.body.location;
    const complaint=req.body.complaint;

    console.log(name);

    // MongoDB Schema

    var schema = new mongoose.Schema({
        name: "string",
        location: "string",
        complaint: "string",
        encryptedData: "string",
    });

    // MongoDB Collection

    mongoose.models = {};
    var ElectrictyComplaints = mongoose.model("Electricty-Complaints", schema);

    // Chainpoint - Proven DB (Blockchain User Data Encryption)

    // Create the New Builder and Add User Data
    let builder = merkle.newBuilder("sha-256");
    builder.add("key1", Buffer.from(name));
    builder.add("key2", Buffer.from(email));
    builder.add("key3", Buffer.from(mobile));
    builder.add("key4", Buffer.from(location));
    builder.add("key5", Buffer.from(complaint));

    // Constructing Tree
    let tree = builder.build();

    // Creating a New Anchor Client
    let client = anchor.connect(anchor.withCredentials("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhbmNob3IiLCJleHAiOjE3OTMyNzA0NDUsImp0aSI6ImFvNng3NWo1ZWVrcm0yNnpzY2sxeXdiaSIsInN1YiI6InV1aWd3Yzd6YXhlanJxZHNnYXF6M3NidSIsInNjb3BlIjoiMzEiLCJyb2xlIjoiRnJlZSJ9.Z--sFCzSKffue0cW4eyI4EuEM93R8bP8KRRUzqkGkhc"));

    // Submitting Proof
    let proof = await client.submitProof(tree.getRoot(), 
        anchor.submitProofWithAnchorType(anchor.Anchor.Type.HEDERA_MAINNET), 
        anchor.submitProofWithAwaitConfirmed(true));

    console.log(proof);

    // Adding Proof to the Tree Object
    tree.addProof(proof);

    // Exporting Tree to JSON
    //tree.exportSync("./electricityComplaintsProof.json");

    var encryptedData = JSON.stringify(proof);
    console.log(encryptedData);

    let electrictyComplaints = new ElectrictyComplaints({
        name,
        location,
        complaint,
        encryptedData,
    });

    await electrictyComplaints.save();
    res.json({
        token: "1234567890"
    });
    
});

// PollutionComplaints Route

app.post("/PollutionComplaints", async (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.mobile;
    const location=req.body.location;
    const complaint=req.body.complaint;

    // MongoDB Schema

    var schema = new mongoose.Schema({
        name: "string",
        location: "string",
        complaint: "string",
        encryptedData: "string",
    });

    // MongoDB Collection

    mongoose.models = {};
    var PollutionComplaints = mongoose.model("Pollution-Complaints", schema);

    // Chainpoint - Proven DB (Blockchain User Data Encryption)

    // Create the New Builder and Add User Data
    let builder = merkle.newBuilder("sha-256");
    builder.add("key1", Buffer.from(name));
    builder.add("key2", Buffer.from(email));
    builder.add("key3", Buffer.from(mobile));
    builder.add("key4", Buffer.from(location));
    builder.add("key5", Buffer.from(complaint));

    // Constructing Tree
    let tree = builder.build();

    // Creating a New Anchor Client
    let client = anchor.connect(anchor.withCredentials("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhbmNob3IiLCJleHAiOjE3OTMyNzA0NDUsImp0aSI6ImFvNng3NWo1ZWVrcm0yNnpzY2sxeXdiaSIsInN1YiI6InV1aWd3Yzd6YXhlanJxZHNnYXF6M3NidSIsInNjb3BlIjoiMzEiLCJyb2xlIjoiRnJlZSJ9.Z--sFCzSKffue0cW4eyI4EuEM93R8bP8KRRUzqkGkhc"));

    // Submitting Proof
    let proof = await client.submitProof(tree.getRoot(), 
        anchor.submitProofWithAnchorType(anchor.Anchor.Type.HEDERA_MAINNET), 
        anchor.submitProofWithAwaitConfirmed(true));

    // Adding Proof to the Tree Object
    tree.addProof(proof);

    // Exporting Tree to JSON
    // tree.exportSync("./pollutionComplaintsProof.json");

    var encryptedData = JSON.stringify(proof);
    console.log(encryptedData);

    let pollutionComplaints = new PollutionComplaints({
        name,
        location,
        complaint,
        encryptedData,
    });

    await pollutionComplaints.save();
    res.json({
        token: "1234567890"
    });
    
});

// SewageComplaints Route

app.post("/SewageComplaints", async (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.mobile;
    const location=req.body.location;
    const complaint=req.body.complaint;

    // MongoDB Schema

    var schema = new mongoose.Schema({
        name: "string",
        location: "string",
        complaint: "string",
        encryptedData: "string",
    });

    // MongoDB Collection

    mongoose.models = {};
    var SewageComplaints = mongoose.model("Sewage-Complaints", schema);

    // Chainpoint - Proven DB (Blockchain User Data Encryption)

    // Create the New Builder and Add User Data
    let builder = merkle.newBuilder("sha-256");
    builder.add("key1", Buffer.from(name));
    builder.add("key2", Buffer.from(email));
    builder.add("key3", Buffer.from(mobile));
    builder.add("key4", Buffer.from(location));
    builder.add("key5", Buffer.from(complaint));

    // Constructing Tree
    let tree = builder.build();

    // Creating a New Anchor Client
    let client = anchor.connect(anchor.withCredentials("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhbmNob3IiLCJleHAiOjE3OTMyNzA0NDUsImp0aSI6ImFvNng3NWo1ZWVrcm0yNnpzY2sxeXdiaSIsInN1YiI6InV1aWd3Yzd6YXhlanJxZHNnYXF6M3NidSIsInNjb3BlIjoiMzEiLCJyb2xlIjoiRnJlZSJ9.Z--sFCzSKffue0cW4eyI4EuEM93R8bP8KRRUzqkGkhc"));

    // Submitting Proof
    let proof = await client.submitProof(tree.getRoot(), 
        anchor.submitProofWithAnchorType(anchor.Anchor.Type.HEDERA_MAINNET), 
        anchor.submitProofWithAwaitConfirmed(true));

    // Adding Proof to the Tree Object
    tree.addProof(proof);

    // Exporting Tree to JSON
    // tree.exportSync("./sewageComplaintsProof.json");

    var encryptedData = JSON.stringify(proof);
    console.log(encryptedData);

    let sewageComplaints = new SewageComplaints({
        name,
        location,
        complaint,
        encryptedData,
    });

    await sewageComplaints.save();
    res.json({
        token: "1234567890"
    });
    
});

app.listen(port, () => console.log("Final Year Project Backend Listening on Port 5000"));