const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labOrderSchema = new Schema(
    {
        patientId: {
            type: Schema.Types.ObjectId,
            required: true,
            index: true,
        },
        medecinId: {
            type: Schema.Types.ObjectId,
            required: true,
        },
        consultationId: {
            type: Schema.Types.ObjectId, // Optional ref l-consultation
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: String,
            enum: ['ordered', 'received', 'validated'],
            default: 'ordered',
        },
        tests: {
            type: [String], // e.g., ["NFS", "Glycémie"]
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('LabOrder', labOrderSchema);