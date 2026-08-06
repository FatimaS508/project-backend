const Hoot = require("../models/Domain");


async function createDomain(req, res)
{
    try
    {
        const createdDomain= await Domains.create(
        {
            domainName: req.body.domainName,
            icon: req.body.icon,
            User: req.user._id

        });
        res.status(201).json(createdHoot);
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




module.exports = { 

    createDomain


 };