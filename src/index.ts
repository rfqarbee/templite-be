import fastify from "fastify";
import routes from "./routes";

const server = fastify({
  logger: {
    messageKey: "message",
    level: "info",
    timestamp: false,
    base: {
      pid: undefined,
      hostname: undefined,
    },
  },
});

server.get("/", async (request, reply) => {
  return "Started";
});

routes.forEach((route) => server.route(route));

server.listen({ host: "0.0.0.0", port: 5000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:5000`);
});

// const start = async () => {
//   try {
//     await server.listen({ host: "0.0.0.0", port: 8080 });
//     server.log.info(`Host started at http://localhost:8080`);
//   } catch (err) {
//     server.log.error(err);
//     process.exit(1);
//   }
// };

// start();
