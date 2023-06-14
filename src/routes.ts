import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { logger } from "./pinoLogger/logger";

const serviceStatusCheck: RouteOptions = {
  method: "GET",
  url: "/service-status",
  handler: (req: FastifyRequest, res: FastifyReply) => {
    res.status(200).send({ message: "Service is running" });
  },
};

const testPost: RouteOptions = {
  method: "POST",
  url: "/test-post",
  handler: (req: FastifyRequest, res: FastifyReply) => {
    const header = `[testPost - header]`;
    const body = req.body;

    logger.info({ body }, `${header} Request Body`);

    return "Request Success - 200";
  },
};

const routes: RouteOptions[] = [serviceStatusCheck, testPost];

export default routes;
