import { McpServer } from "@modelcontextprotocol/server";

export const createServer = () => {
  const server = new McpServer({
    name: "Arithmetic",
    version: "1.0.0",
  });

  return server;
};
