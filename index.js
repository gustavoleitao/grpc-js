const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('hello.proto')
const ServiceDefinition = grpc.loadPackageDefinition(packageDefinition)

const client = new ServiceDefinition.br.ufrn.imd.GreetingService('localhost:8085', grpc.credentials.createInsecure())

const helloRequest = {
    name: "TRE-RN"
}
client.greeting(helloRequest, (err, response) => {
    if (err) throw new Error('Fail to read response!')
    console.log(response)
})