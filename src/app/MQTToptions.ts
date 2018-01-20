import { MqttServiceOptions } from "ngx-mqtt";

export const MQTT_SERVICE_OPTIONS: MqttServiceOptions = {
  hostname: "broker.hivemq.com",
  port: 8000,
  path: "/mqtt"
};
