import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    attachment: {
      type: String,
      required: true,
    },
    attachmentType: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
    complaintSubject: {
      type: String,
      required: true,
    },
    departments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Department", // Reference to the Department model
      },
    ],
    selectedLocation: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Complainer", // Reference to the Complainer model
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
