const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");


app.use(methodOverride("_method"));

const MONGO_URL="mongodb://127.0.0.1:27017/wanderra";
main().then(()=>{
    console.log("connected to BD");
}).catch(err=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=>{
    res.send("hi i m root");
})

//index route
app.get("/listings",async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});

//NEW ROUTE
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});


//CREATE ROUTE
app.post("/listings",async (req,res)=>{
     let listing=req.body.listing;
     const newListing=new Listing(listing);
     await newListing.save();
     res.redirect("/listings");
});

//EDIT ROUTE
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
});


// UPDATE ROUTE
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;

    console.log(req.body); // check karne ke liye

    await Listing.findByIdAndUpdate(id, req.body.listing);

    res.redirect(`/listings/${id}`);
});

//DELETE ROUTE
app.delete("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});
app.get("/fixImage", async (req, res) => {

    await Listing.updateOne(
        { title: "Historic Villa in Tuscany" },

        {
            $set: {
                image: {
                    filename: "listingimage",
                    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
                }
            }
        }
    );

    res.send("Fixed!");
});

// app.get("/testing",async (req,res)=>{
//     const sampleListing=new Listing({
//      title:"calangute beach house",
//      description:"a beautiful beach house in calangute,goa with all the amenities and a stunning view of the beach.",
//      image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

//      price:1200,
//      location:"calangute,Goa",
//      country:"India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080,()=>{
console.log("server is listening to port 8080");
});
