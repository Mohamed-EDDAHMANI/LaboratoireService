const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labResultSchema = new Schema(
    {
        // Hna nqdrou ndiro 'ref' 7it LabOrder kayn f nafs l-DB
        orderId: {
            type: Schema.Types.ObjectId,
            ref: 'LabOrder',
            required: true,
            index: true,
        },
        receivedDate: {
            type: Date,
            default: Date.now,
        },
        validatedDate: {
            type: Date,
        },
        anomalyFlags: {
            type: [String], // e.g., ["H", "L"] (High, Low)
        },
        // Pour données structurées (e.g., { "glucose": 1.10, "unit": "g/L" })
        resultsData: {
            type: Schema.Types.Mixed,
        },
        // IMPORTANT: Hada l-ID dyal file f Minio, li t'géra f CliniqueService
        reportDocumentId: {
            type: Schema.Types.ObjectId,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('LabResult', labResultSchema);