const addUser = async(req,res)=>{
    try{
        const {full_name,email,phone_number,password} = req.body;
        const exist_user = await user.findOne({email});
        const exist_phone = await user.findOne({phone_number})
        if (exist_user || exist_phone){
            return res.status(400).send({
                statusCode:400,
                message:"Email already exists!"
            });
        }

        const new_user = await user.create({
            full_name,email,phone_number,password
        });

        return res.status(201).send({
            statusCode:201,
            message:"User created successfully!",
            data:new_user
        })
    } 
    
    catch(error){
        console.log(`Error on add user: ${error}`)
    };

}

module.exports = {addUser}