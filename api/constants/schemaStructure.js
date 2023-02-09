const schemaStructure = {
    schema: "AgeVerification",
    mandatoryExpiration: false,
    technicalName: "AgeVerification",
    attributes: [
        {
            name: "Age",
            type: "number",
            technicalName: "Age",
            description:
                "Age of the holder",
        },
        {
            name: "Birthdate",
            technicalName: "Birthdate",
            type: "date",
            description: "Birthdate of holder",
        }
    ]
}

module.exports = {
    schemaStructure
}


// {
//   active: true,
//   modifiedAt: '2023-02-09T11:08:17.488749Z',
//   schema: 'AgeVerification',
//   schemaHash: '5c397623fd6708c44977be4aed8739af',
//   schemaURL: 'https://s3.eu-west-1.amazonaws.com/polygonid-schemas/b3506e03-2f97-403e-a9da-a9c13b62fde1.json-ld',
//   technicalName: 'AgeVerification',
//   version: '1.1'
// }
