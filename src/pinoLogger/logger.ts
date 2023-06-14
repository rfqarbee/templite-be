import { FastifyBaseLogger } from "fastify";
import pino from "pino";

export const logger: FastifyBaseLogger = pino();
