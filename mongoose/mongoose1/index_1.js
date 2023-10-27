const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect('mongodb+srv://temp:<<password>>@cluster0.kjidb5f.mongodb.net/?retryWrites=true&w=majority');
    
    const productSchema=new mongoose.Schema({
        name:String
    });

    const productModel=mongoose.model('product',productSchema);

    let data=new productModel({name:"m8"});

    let result=await data.save();

    console.log(result);

}

main()