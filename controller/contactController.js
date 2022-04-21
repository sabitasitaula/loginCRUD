import ContactModel from "../model/Contact.js";

export const contactAll = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (error) {
    res.json({ message: error });
  }
};

export const contactDetails = async (req, res) => {
  try {
    const contact = await ContactModel.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    res.json({ message: "Contact isnot available" });
  }
};

export const contactCreate = async (req, res) => {
    let { fullName, email, message } = req.body;
    
  const contactModel = new ContactModel({
    fullName: fullName,
    email: email,
    message: message,
  });
  try {
    const savedContact = await contactModel.save();
    res.send({
      savedContact,
      message: "contact created successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json(error);
  }
};

export const contactUpdate = async (req, res) => {
  try {
    let { fullName, email, message} = req.body;
    const contact = {
      fullName: fullName,
      email: email,
      message: message,
    };
    const updateContact = await ContactModel.findByIdAndUpdate(
      { _id: req.params.contactId },
      contact,{new:true}
    );
    res.json({
      updateContact,
      message: "Contact Updated Successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const contactDelete = async (req, res) => {
  try {
    const _id = req.params.contactId;
    const removeContact = await ContactModel.findByIdAndDelete(_id);
    res.json({ message: "contact Deleted successfully" });
  } catch (error) {
    res.json({ message: error });
  }
};


