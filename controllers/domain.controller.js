const Domain = require("../models/Domain");


async function createDomain(req, res)
{
    try
    {
        const createdDomain= await Domain.create(
        {
            domainName: req.body.domainName,
            icon: req.body.icon,
            User: req.user._id

        });
        res.status(201).json(createdDomain);
    } 

    catch (error)
    {
        res.status(400).json({ message: error.message });
    }
}


async function getAllDomains(req, res)
{
  try 
  {
    const allDomains = await Domain.find().select("domainName icon").populate('User');
    res.status(200).json(allDomains);
  } 

  catch (err)
  {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error. Try again later" });
  }
}


async function getDomainById(req, res) {
  try {
    const foundDomain = await Domain.findById(req.params.id)
    res.status(200).json(foundDomain);

  }catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error. Try again later" });
  }
}



async function updateDomainById(req,res){
    try{

        const foundDomain = await Domain.findById(req.params.id)

     if (!foundDomain.User || !foundDomain.User.equals(req.user._id))
        {         
        return res.status(403).json({message:'Cannot edit other peoples domains'})
        }

        const updatedDomain = await Domain.findByIdAndUpdate(req.params.id, req.body)
        res.json(updatedDomain)

    }catch(err){
        console.log(err)
    }
}


async function deleteDomain(req, res){
    try{
       const foundDomain = await Domain.findById(req.params.id)

        const deletedDomain = await Domain.findByIdAndDelete(req.params.id)
        res.json(deletedDomain)

    } catch(err){
         console.log(err)
    }
}


module.exports = {
    getAllDomains, 

    createDomain,

    getDomainById,

    updateDomainById,

    deleteDomain

 };